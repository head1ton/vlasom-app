import { connect } from "react-redux";
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
        getPhotoLikes: () => {
            dispatch(userActions.getPhotoLikes(ownProps.id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);