import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapStateToProps = (state, ownProps) => {
    const { photos : { categoryImageList } } = state;
    const { global : { category_name } } = state;
    return {
        categoryImageList,
        category_name
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        allCategory: () => {
            dispatch(photoActions.allCategory());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);