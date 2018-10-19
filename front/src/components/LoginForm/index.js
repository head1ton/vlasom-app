import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
    const { routing : { location } } = state;
    const { user : { loginError } } = state;
    return {
        pathname: location.pathname,
        loginError
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        facebookLogin: (access_token) => {
            dispatch(userActions.facebookLogin(access_token));
        },
        usernameLogin: (email, password) => {
            dispatch(userActions.usernameLogin(email, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);