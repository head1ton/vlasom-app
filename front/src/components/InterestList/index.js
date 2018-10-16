import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapStateToProps = (state, ownProps) => {
    const { photos : { interestList } } = state;
    const { global : { loginUser : { username } } } = state;
    console.log('fnwekf')
    console.log(interestList);
    return {
        interestList,
        username
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getInterestList: () => {
            dispatch(photoActions.getInterestList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);