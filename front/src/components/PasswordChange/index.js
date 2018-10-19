import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
    const { global : { loginUser } } = state;
    const { routing : { location } } = state;
    const { user : { current_error } } = state;
    return {
        loginUser,
        pathname: location.pathname,
        current_error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changePassword: (username, current_password, new_password) => {
            dispatch(userActions.changePassword(username, current_password, new_password))
        },
        removePasswordCheck: () => {
            dispatch(userActions.removePasswordCheck());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);