import React, { PureComponent } from 'react';
import AutoButton from './AutoButton';

function mapToHeader(word) {
  switch (word.type) {
    case 'noun':
      return `${word.props.artikel} ${word.word}`;
    default:
      return word.word;
  }
}

function mapToProps(word) {
  switch (word.type) {
    case 'noun':
      return (
        <p>
          {`(${word.props.plural})`}
        </p>
      );
    case 'verb':
      return (
        <div>
          <p>
            {word.props.preterite}
            <span className="badge badge-primary">II</span>
          </p>
          <p>
            {word.props.pp}
            <span className="badge badge-primary">III</span>
          </p>
        </div>
      );
    default:
      return null;
  }
}

export default class Answer extends PureComponent {
  componentDidMount() {
    this.refs.skip.focus();
  }

  render() {
    const { word, isAnswerCorrect, getQuestion } = this.props;
    return (
      <div className="answer">
        <h2 className={isAnswerCorrect ? 'correct' : 'wrong'}>
          {isAnswerCorrect ? 'Richtig' : 'Falsch'}
        </h2>
        <h4 className="header">
          {mapToHeader(word)}
        </h4>
        <div className="props">
          {mapToProps(word)}
          <p className="translations">
            {`"${word.translations.join(', ')}"`}
          </p>
        </div>
        <AutoButton
          ref="skip"
          className="btn btn-primary btn-lg"
          labelTemplate={countdown => `Next in ${countdown}`}
          onClick={() => getQuestion()}
        />
      </div>
    );
  }
}
