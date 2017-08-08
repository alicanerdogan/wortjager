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
        this.props.onSubmit('der');
        break;
      case '2':
        this.props.onSubmit('die');
        break;
      case '3':
        this.props.onSubmit('das');
        break;
      default:
        break;
    }
  }

  render() {
    const { disabled, onSubmit } = this.props;

    return (
      <div ref="form" className="input-artikel" tabIndex={disabled ? -1 : 0} onKeyDown={event => this.onKeyDown(event)}>
        <div className="row">
          <div className="col-sm-4">
            <button className="btn btn-block" onClick={() => onSubmit('der')}>
              <span>1</span>der
            </button>
          </div>
          <div className="col-sm-4">
            <button className="btn btn-block" onClick={() => onSubmit('die')}>
              <span>2</span>die
            </button>
          </div>
          <div className="col-sm-4">
            <button className="btn btn-block" onClick={() => onSubmit('das')}>
              <span>3</span>das
            </button>
          </div>
        </div>
      </div>
    );
  }
}
