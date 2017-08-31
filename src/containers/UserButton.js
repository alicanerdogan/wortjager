import { connect } from 'react-redux';

import UserButton from 'Components/UserButton';
import logout from 'Actions/logout';

export default connect(({ loggedIn }) => ({ loggedIn }), { logout })(UserButton);
