import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapStateToProps = (state, ownProps) => {
    const { routing : { location } } = state;
    return {
        pathname: location.pathname
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitComment: (message) => {
            dispatch(photoActions.commentPhoto(ownProps.photoId, message));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Container);