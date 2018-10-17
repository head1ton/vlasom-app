import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
    const { user : { user } } = state;
    return {
        user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { match: { params: { username } } } = ownProps;
    return {
        getUserProfile: () => {
            dispatch(userActions.getUserProfile(username));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);