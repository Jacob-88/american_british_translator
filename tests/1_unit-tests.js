const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
  const translator = new Translator();

  suite('American to British English', () => {
    test('Translate "Mangoes are my favorite fruit."', () => {
      const text = 'Mangoes are my favorite fruit.';
      const locale = 'american-to-british';
      const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "I ate yogurt for breakfast."', () => {
      const text = 'I ate yogurt for breakfast.';
      const locale = 'american-to-british';
      const expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test("Translate \"We had a party at my friend's condo.\"", () => {
      const text = "We had a party at my friend's condo.";
      const locale = 'american-to-british';
      const expected = "We had a party at my friend's <span class=\"highlight\">flat</span>.";
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "Can you toss this in the trashcan for me?"', () => {
      const text = 'Can you toss this in the trashcan for me?';
      const locale = 'american-to-british';
      const expected = 'Can you toss this in the <span class="highlight">bin</span> for me?';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "The parking lot was full."', () => {
      const text = 'The parking lot was full.';
      const locale = 'american-to-british';
      const expected = 'The <span class="highlight">car park</span> was full.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "Like a high tech Rube Goldberg machine."', () => {
      const text = 'Like a high tech Rube Goldberg machine.';
      const locale = 'american-to-british';
      const expected = 'Like a <span class="highlight">Heath Robinson device</span>.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "To play hooky means to skip class or work."', () => {
      const text = 'To play hooky means to skip class or work.';
      const locale = 'american-to-british';
      const expected = 'To <span class="highlight">bunk off</span> means to skip class or work.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "No Mr. Bond, I expect you to die."', () => {
      const text = 'No Mr. Bond, I expect you to die.';
      const locale = 'american-to-british';
      const expected = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "Dr. Grosh will see you now."', () => {
      const text = 'Dr. Grosh will see you now.';
      const locale = 'american-to-british';
      const expected = '<span class="highlight">Dr</span> Grosh will see you now.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "Lunch is at 12:15 today."', () => {
      const text = 'Lunch is at 12:15 today.';
      const locale = 'american-to-british';
      const expected = 'Lunch is at <span class="highlight">12.15</span> today.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });
  });

  suite('British to American English', () => {
    test('Translate "We watched the footie match for a while."', () => {
      const text = 'We watched the footie match for a while.';
      const locale = 'british-to-american';
      const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "Paracetamol takes up to an hour to work."', () => {
      const text = 'Paracetamol takes up to an hour to work.';
      const locale = 'british-to-american';
      const expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "First, caramelise the onions."', () => {
      const text = 'First, caramelise the onions.';
      const locale = 'british-to-american';
      const expected = 'First, <span class="highlight">caramelize</span> the onions.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "I spent the bank holiday at the funfair."', () => {
      const text = 'I spent the bank holiday at the funfair.';
      const locale = 'british-to-american';
      const expected = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "I had a bicky then went to the chippy."', () => {
      const text = 'I had a bicky then went to the chippy.';
      const locale = 'british-to-american';
      const expected = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "I\'ve just got bits and bobs in my bum bag."', () => {
      const text = "I've just got bits and bobs in my bum bag.";
      const locale = 'british-to-american';
      const expected = "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.";
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "The car boot sale at Boxted Airfield was called off."', () => {
      const text = 'The car boot sale at Boxted Airfield was called off.';
      const locale = 'british-to-american';
      const expected = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "Have you met Mrs Kalyani?"', () => {
      const text = 'Have you met Mrs Kalyani?';
      const locale = 'british-to-american';
      const expected = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "Prof Joyner of King\'s College, London."', () => {
      const text = "Prof Joyner of King's College, London.";
      const locale = 'british-to-american';
      const expected = "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.";
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Translate "Tea time is usually around 4 or 4.30."', () => {
      const text = 'Tea time is usually around 4 or 4.30.';
      const locale = 'british-to-american';
      const expected = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });
  });

  suite('Highlighting', () => {
    test('Highlight translation in "Mangoes are my favorite fruit."', () => {
      const text = 'Mangoes are my favorite fruit.';
      const locale = 'american-to-british';
      const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Highlight translation in "I ate yogurt for breakfast."', () => {
      const text = 'I ate yogurt for breakfast.';
      const locale = 'american-to-british';
      const expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Highlight translation in "We watched the footie match for a while."', () => {
      const text = 'We watched the footie match for a while.';
      const locale = 'british-to-american';
      const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });

    test('Highlight translation in "Paracetamol takes up to an hour to work."', () => {
      const text = 'Paracetamol takes up to an hour to work.';
      const locale = 'british-to-american';
      const expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      const translation = translator.translate(text, locale);
      assert.equal(translation, expected);
    });
  });
});