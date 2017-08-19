import { connect } from 'react-redux';

import App from 'Components/App';
import { login, signUp } from 'Actions/api';

export default connect(({ loggedIn }) => ({ loggedIn }), { login, signUp })(App);
