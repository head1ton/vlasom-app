import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createAccount: (username, password, email, name, nickname, birth_year, birth_month, birth_day) => {
            dispatch(userActions.createAccount(username, password, email, name, nickname, birth_year, birth_month, birth_day));
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);