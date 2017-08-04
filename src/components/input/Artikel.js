import React, { PureComponent } from 'react';

const artikels = ['der', 'die', 'das'];

export default class Artikel extends PureComponent {
  componentDidMount() {
    this.refs.form.focus();
  }

  onKeyDown(event) {
    if (this.props.disabled) {
      return;
    }
    switch (event.key) {
      case '1':
        this.refs.der.checked = true;
        break;
      case '2':
        this.refs.die.checked = true;
        break;
      case '3':
        this.refs.das.checked = true;
        break;
      case 'Enter':
        const answer = this.getAnswer();
        answer && this.props.onSubmit && this.props.onSubmit(answer);
        break;
      default:
        break;
    }
  }

  getAnswer() {
    if (this.refs.der.checked) {
      return 'der';
    }
    if (this.refs.die.checked) {
      return 'die';
    }
    if (this.refs.das.checked) {
      return 'das';
    }
    return null;
  }

  render() {
    const { disabled } = this.props;

    return (
      <div ref="form" tabIndex={disabled ? -1 : 0} onKeyDown={event => this.onKeyDown(event)}>
        <input type="radio" value="der" name="artikel" ref="der" disabled={disabled} /> der
        <input type="radio" value="die" name="artikel" ref="die" disabled={disabled} /> die
        <input type="radio" value="das" name="artikel" ref="das" disabled={disabled} /> das
      </div>
    );
  }
}
