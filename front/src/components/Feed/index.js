import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photos';
import { actionCreators as globalActions } from 'redux/modules/global';

const mapStateToProps = (state, ownProps) => {
    const { photos: { feed } } = state;
    const { routing : { location } } = state;
    return {
        feed,
        pathname: location.pathname
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getFeed: () => {
            dispatch(photoActions.getFeed());
        },
        getMyProfile: () => {
            dispatch(globalActions.getMyProfile());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);