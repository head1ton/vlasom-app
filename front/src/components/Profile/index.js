import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as globalActions } from 'redux/modules/global';

const mapStateToProps = (state, ownProps) => {
    const { global : { loginUser, editComplete } } = state;
    const { routing : { location } } = state;
    return {
        loginUser,
        pathname: location.pathname,
        editComplete
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editProfile: (nickname, email, description) => {
            dispatch(globalActions.editProfile(nickname, email, description))
        },
        getMyProfile: () => {
            dispatch(globalActions.getMyProfile())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);