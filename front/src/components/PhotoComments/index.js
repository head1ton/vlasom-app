import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapStateToProps = (state, ownProps) => {
    const { global : { loginUser } } = state;
    return {
        loginUser
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteComment: (commentId) => {
            dispatch(photoActions.deleteComment(commentId, ownProps.photoId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);