import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as globalActions } from 'redux/modules/global';

const mapStateToProps = (state, ownProps) => {
    const { user, routing: { location } } = state;
    const { global : { show_menu, category_name } } = state;
    return {
        isLoggedIn: user.isLoggedIn,
        pathname: location.pathname,
        show_menu,
        category_name
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        closeMenu: () => {
            dispatch(globalActions.closeMenu())
        },
        openMenu: () => {
            dispatch(globalActions.openMenu())
        },
        allCategoryName: () => {
            dispatch(globalActions.allCategoryName())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);