import React, { PureComponent } from 'react';

export default class UserMenu extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isVisible: false };
  }

  show() {
    this.setState(() => ({ isVisible: true }));
  }

  hide() {
    this.setState(() => ({ isVisible: false }));
  }

  render() {
    const { isVisible } = this.state;
    if (!isVisible) return null;

    const { logout } = this.props;
    return (
      <div>
        <div className="user-menu-overlay" onClick={() => this.hide()} />
        <div className="user-menu">
          <ul>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
