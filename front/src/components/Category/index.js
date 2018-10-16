import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapStateToProps = (state, ownProps) => {
    const { photos : { categoryImages } } = state;
    return {
        categoryImages
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { match: { params: { categoryName } } } = ownProps;
    console.log(categoryName);
    return{
        categoryImage: () => {
            dispatch(photoActions.categoryImage(categoryName));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);