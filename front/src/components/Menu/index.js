import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as globalActions } from 'redux/modules/global';

const mapStateToProps = (state, ownProps) => {
    const { global : { show_profile, show_category, category_name, loginUser } } = state;
    return {
        show_profile,
        show_category,
        category_name,
        loginUser
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        closeMenu: () => {
            dispatch(globalActions.closeMenu());
        },
        handleProfile: () => {
            dispatch(globalActions.handleProfile());
        },
        handleCategory: () => {
            dispatch(globalActions.handleCategory());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);