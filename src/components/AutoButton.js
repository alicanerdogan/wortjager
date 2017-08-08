import React, { PureComponent } from 'react';

export default class AutoButton extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      countdown: this.props.countdown || 3
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { countdown } = this.state;
      const newCountdownValue = countdown - 1;
      if (newCountdownValue <= 0) {
        clearInterval(this.timer);
        this.onClick();
      } else {
        this.setState(() => ({ countdown: newCountdownValue }));
      }
    }, 1000);
  }

  onClick(event) {
    clearInterval(this.timer);
    this.props.onClick && this.props.onClick(event);
  }

  focus() {
    this.refs.btn.focus();
  }

  static sanitizeProps(props) {
    const buttonProps = Object.assign({}, props);
    delete buttonProps.countdown;
    delete buttonProps.labelTemplate;
    return buttonProps;
  }

  render() {
    const { labelTemplate } = this.props;
    return (
      <button {...AutoButton.sanitizeProps(this.props)} onClick={e => this.onClick(e)} ref="btn">
        {labelTemplate ? labelTemplate(this.state.countdown) : this.props.children}
      </button>
    );
  }
}
