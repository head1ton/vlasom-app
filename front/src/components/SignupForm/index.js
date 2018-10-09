import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createAccount: (username, password, email, name, nickname, birthYear, birthMonth, birthDay) => {
            dispatch(userActions.createAccount(username, password, email, name, nickname, birthYear, birthMonth, birthDay));
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);