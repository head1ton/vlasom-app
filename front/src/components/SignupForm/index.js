import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';
import { actionCreators as globalActions } from 'redux/modules/global';

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
        },
        doCheckNickname: (nickname) => {
            dispatch(globalActions.doCheckNickname(nickname));
        },
        doCheckEmail: (email) => {
            dispatch(globalActions.doCheckEmail(email));
        },
        doCheckUsername: (username) => {
            dispatch(globalActions.doCheckUsername(username));
        },
        removeCheckNickname: () => {
            dispatch(globalActions.removeCheckNickname());
        },
        removeCheckEmail: () => {
            dispatch(globalActions.removeCheckEmail());
        },
        removeCheckUsername: () => {
            dispatch(globalActions.removeCheckUsername());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);