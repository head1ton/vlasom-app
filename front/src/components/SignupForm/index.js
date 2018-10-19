import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
    const { routing : { location } } = state;
    return {
        pathname: location.pathname
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createAccount: (username, password, email, name, nickname, birthYear, birthMonth, birthDay) => {
            dispatch(userActions.createAccount(username, password, email, name, nickname, birthYear, birthMonth, birthDay));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);