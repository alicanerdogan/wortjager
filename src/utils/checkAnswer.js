export default function checkAnswer(answer, word, questionType) {
  return questionType === 'translation'
    ? Promise.resolve(word.translations.find(t => t === answer))
    : Promise.resolve(word[questionType] === answer);
}
