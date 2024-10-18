'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;

      // Проверка на наличие обязательных полей
      if (text === undefined || locale === undefined) {
        return res.json({ error: 'Required field(s) missing' });
      }

      // Проверка на пустой текст
      if (text.trim() === '') {
        return res.json({ error: 'No text to translate' });
      }

      // Проверка валидности поля locale
      if (!['american-to-british', 'british-to-american'].includes(locale)) {
        return res.json({ error: 'Invalid value for locale field' });
      }

      const translation = translator.translate(text, locale);

      if (translation === null) {
        return res.json({ error: 'Invalid value for locale field' });
      }

      res.json({ text, translation });
    });
};