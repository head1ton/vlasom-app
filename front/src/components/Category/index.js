import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapStateToProps = (state, ownProps) => {
    const { photos : { feed } } = state;
    const { routing: { location } } = state;
    return {
        feed,
        pathname: location.pathname
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { match: { params: { categoryName } } } = ownProps;
    return{
        categoryImage: () => {
            dispatch(photoActions.categoryImage(categoryName));
        },
        interestCategory: (categoryId) => {
            dispatch(photoActions.interestCategory(categoryId));
        },
        uninterestCategory: (categoryId) => {
            dispatch(photoActions.uninterestCategory(categoryId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);