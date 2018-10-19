import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as globalActions } from 'redux/modules/global';

const mapStateToProps = (state, ownProps) => {
    const { global : { loginUser, editComplete, checkNickname, checkEmail } } = state;
    const { routing : { location } } = state;
    return {
        loginUser,
        pathname: location.pathname,
        editComplete,
        checkNickname,
        checkEmail
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editProfile: (nickname, email, description) => {
            dispatch(globalActions.editProfile(nickname, email, description))
        },
        doCheckNickname: (nickname) => {
            dispatch(globalActions.doCheckNickname(nickname));
        },
        doCheckEmail: (email) => {
            dispatch(globalActions.doCheckEmail(email));
        },
        removeCheckNickname: () => {
            dispatch(globalActions.removeCheckNickname());
        },
        removeCheckEmail: () => {
            dispatch(globalActions.removeCheckEmail());
        },
        finishEditProfile: () => {
            dispatch(globalActions.finishEditProfile());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);