import Ipsum from './site.config.js';
import Paragraph from './paragraph.js';
import PForm from './pform.js';
import EditMode from './editmode.js';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
  }

  componentDidMount() {
    this.setState({title: Ipsum.title});
  }

  render() {
    return this.state.title;
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    const {head, subhead} = Ipsum;

    this.state = {
      head: head,
      subhead: subhead,
      numParagraphs: 1,
      useLatin: false,
      isEditMode: false
    }

    this.onParagraphChange = this.onParagraphChange.bind(this);
    this.onLatinChange = this.onLatinChange.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onViewClick = this.onViewClick.bind(this);
  }

  componentDidMount() {
  }

  onSelectClick() {
    const text = document.getElementById('clip');
    const selection = window.getSelection();
    const range = document.createRange();

    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);

    // function clearText() {
    //         var selection = window.getSelection();
    //         selection.removeAllRanges();
    // }

  }

  onParagraphChange(numParagraphs) {
    const newNum = numParagraphs;
    this.setState(Object.assign(this.state, {numParagraphs: newNum}));
  }
  onLatinChange(useLatin) {
    this.setState(Object.assign(this.state, {useLatin}));
  }
  onEditClick() {
    this.setState(Object.assign(this.state, {isEditMode: true}));
  }
  onViewClick() {
    this.setState(Object.assign(this.state, {isEditMode: false}));
  }

  render() {
    let text = [];

    if (parseInt(this.state.numParagraphs) > 0) {
      for(let ph = 0; ph < this.state.numParagraphs; ph++) {
        let isLast = (ph === this.state.numParagraphs - 1);
        text.push(<p key={ph}>{Paragraph.build(isLast, this.state.useLatin*1)}</p>);
      }
    }

    if (this.state.isEditMode) {
      return (
        <EditMode
           viewClick={this.onViewClick}
        />
      );
    } else {
      return (
        <div>
        <h1>{this.state.head}</h1>
        <h2>{this.state.subhead}</h2>
        <PForm
          numParagraphs={this.state.numParagraphs}
          useLatin={this.state.useLatin}
          onParagraphChange={this.onParagraphChange}
          onLatinChange={this.onLatinChange} />
          <label id='clickme' onClick={this.onSelectClick}>[select text]</label><label id="edit" onClick={this.onEditClick}>[edit]</label>
          <div id='clip' className='universe'>
            {text}
          </div>
      </div>
    );
    }
  }
}

ReactDOM.render(
  <Title />,
  document.querySelector('title')
)

ReactDOM.render(
  <Main />,
  document.getElementById('main')
)
