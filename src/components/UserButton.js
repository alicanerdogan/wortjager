import React, { PureComponent } from 'react';
import UserMenu from './UserMenu';

export default class UserButton extends PureComponent {
  render() {
    const { logout, loggedIn } = this.props;
    if (!loggedIn) return null;
    return (
      <div className="user-button">
        <button onClick={() => this.refs.menu.show()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-user"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
        <UserMenu ref="menu" logout={logout} />
      </div>
    );
  }
}
