import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';
import { actionCreators as globalActions } from 'redux/modules/global';

const mapStateToProps = (state, owmProps) => {
    const { user : { notifications } } = state;
    return {
        notifications
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getNotifications: () => {
            dispatch(userActions.getNotifications());
        },
        getMyProfile: () => {
            dispatch(globalActions.getMyProfile());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);