import { connect } from 'react-redux';

import App from 'Components/App';
import { login, loginWithGoogle, signUp } from 'Actions/api';

export default connect(({ loggedIn }) => ({ loggedIn }), { login, loginWithGoogle, signUp })(App);
