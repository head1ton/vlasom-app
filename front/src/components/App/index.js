import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import { actionCreators as globalActions } from 'redux/modules/global';

const mapStateToProps = (state, ownProps) => {
    const { user, routing: { location } } = state;
    const { global : { show_menu, category_name, loginUser, show_nav_btm } } = state;
    return {
        isLoggedIn: user.isLoggedIn,
        pathname: location.pathname,
        show_menu,
        category_name,
        loginUser,
        show_nav_btm
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
        },
        getMyProfile: () => {
            dispatch(globalActions.getMyProfile())
        },
        handleNavBtm: (show_nav_btm) => {
            dispatch(globalActions.handleNavBtm(show_nav_btm))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));