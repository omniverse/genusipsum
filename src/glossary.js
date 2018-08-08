import baseline from './empty.config.js';

export default class Glossary {
  constructor() {
    this.d = baseline();
  }

  data(data) {
    if (data) {
      this.d = data;
    }

    return this.d;
  }
}

Glossary.WORDS = 'words';
Glossary.PHRASES = 'phrases';
