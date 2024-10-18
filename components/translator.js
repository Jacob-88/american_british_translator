const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
  constructor() {
    this.britishToAmericanSpelling = this.swapDictionary(americanToBritishSpelling);
    this.britishToAmericanTitles = this.swapDictionary(americanToBritishTitles);

    this.amToBrDict = { ...americanOnly, ...americanToBritishSpelling };
    this.brToAmDict = { ...britishOnly, ...this.britishToAmericanSpelling };

    // Добавляем титулы в общие словари
    this.amToBrTitles = americanToBritishTitles;
    this.brToAmTitles = this.britishToAmericanTitles;
  }

  swapDictionary(obj) {
    const swapped = {};
    for (let key in obj) {
      swapped[obj[key]] = key;
    }
    return swapped;
  }

  translate(text, locale) {
    if (locale === 'american-to-british') {
      return this.translateAmericanToBritish(text);
    } else if (locale === 'british-to-american') {
      return this.translateBritishToAmerican(text);
    } else {
      return null;
    }
  }

  translateAmericanToBritish(text) {
    let translation = text;

    // Обработка времени
    translation = translation.replace(/(\d{1,2}):(\d{2})/g, '<span class="highlight">$1.$2</span>');

    // Обработка титулов
    for (let title in this.amToBrTitles) {
  const escapedTitle = title.replace('.', '\\.');
  const regex = new RegExp('\\b' + escapedTitle, 'gi');
  translation = translation.replace(regex, (match) => {
    const translatedTitle = this.amToBrTitles[title];
    const formattedTitle = this.matchCase(translatedTitle, match);
    return '<span class="highlight">' + formattedTitle + '</span>';
  });
}

    // Обработка терминов и орфографии (от длинных к коротким)
    const terms = Object.keys(this.amToBrDict).sort((a, b) => b.length - a.length);
    for (let term of terms) {
      const escapedTerm = term.replace('.', '\\.').replace('-', '\\-').replace('?', '\\?');
      const regex = new RegExp('\\b' + escapedTerm + '\\b', 'gi');
      translation = translation.replace(regex, (match) => {
        const translatedTerm = this.amToBrDict[term];
        return '<span class="highlight">' + this.matchCase(translatedTerm, match) + '</span>';
      });
    }

    return this.checkForChanges(text, translation);
  }

  translateBritishToAmerican(text) {
    let translation = text;

    // Обработка времени
    translation = translation.replace(/(\d{1,2})\.(\d{2})/g, '<span class="highlight">$1:$2</span>');

    // Обработка титулов
    for (let title in this.brToAmTitles) {
      const escapedTitle = title.replace('.', '\\.');
      const regex = new RegExp('\\b' + escapedTitle + '\\b', 'gi');
      translation = translation.replace(regex, (match) => {
        const translatedTitle = this.brToAmTitles[title];
        const formattedTitle = this.matchCase(translatedTitle, match);
        return '<span class="highlight">' + formattedTitle + '</span>';
      });
    }

    // Обработка терминов и орфографии (от длинных к коротким)
    const terms = Object.keys(this.brToAmDict).sort((a, b) => b.length - a.length);
    for (let term of terms) {
      const escapedTerm = term.replace('.', '\\.').replace('-', '\\-').replace('?', '\\?');
      const regex = new RegExp('\\b' + escapedTerm + '\\b', 'gi');
      translation = translation.replace(regex, (match) => {
        const translatedTerm = this.brToAmDict[term];
        return '<span class="highlight">' + this.matchCase(translatedTerm, match) + '</span>';
      });
    }

    return this.checkForChanges(text, translation);
  }

  matchCase(text, original) {
    if (original[0] === original[0].toUpperCase()) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    } else {
      return text;
    }
  }

  checkForChanges(original, translated) {
    if (original === translated) {
      return 'Everything looks good to me!';
    } else {
      return translated;
    }
  }
}

module.exports = Translator;