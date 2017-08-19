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

function mapToDetails(word) {
  switch (word.type) {
    case 'noun':
      return (
        <h5 className="plural">
          {`(${word.props.plural})`}
        </h5>
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
        {mapToDetails(word)}
        <p className="translations">{`"${word.translations.join(', ')}"`}</p>
        <AutoButton
          ref="skip"
          className="btn btn-primary"
          labelTemplate={countdown => `Find in ${countdown}`}
          onClick={() => getQuestion()}
        />
      </div>
    );
  }
}
