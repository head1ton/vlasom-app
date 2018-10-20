import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './presenter';

class Container extends Component{
    state = {
        lastScrollTop: 0,
        delta: 15
    }
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        pathname: PropTypes.string.isRequired,
        show_menu: PropTypes.bool.isRequired,
        closeMenu: PropTypes.func.isRequired,
        openMenu: PropTypes.func.isRequired,
        allCategoryName: PropTypes.func.isRequired,
        getMyProfile: PropTypes.func.isRequired,
        handleNavBtm: PropTypes.func.isRequired,
        show_nav_btm: PropTypes.bool.isRequired
    }

    componentWillReceiveProps(nextProps){
        const { closeMenu, show_menu } = this.props;
        if(show_menu === true){
            closeMenu();
        }
    }
    
    componentWillMount(){
        const { getMyProfile, closeMenu } = this.props;
        getMyProfile();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this._handleScroll, false);
    }

    componentDidMount(){
        window.addEventListener('scroll', this._handleScroll, false)
        const { allCategoryName } = this.props;
        allCategoryName();
    }
    _handleScroll = () => {
        const { lastScrollTop, delta } = this.state;
        const { show_nav_btm, handleNavBtm } = this.props;
        var st = window.scrollY;
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            if(show_nav_btm){
                handleNavBtm(show_nav_btm);
            }
        }
        else {
            if(!show_nav_btm){
                handleNavBtm(show_nav_btm);
            }
        }
        this.setState({
            lastScrollTop: st
        })
    }

    render(){
        return <App {...this.props} />
    }
}

export default Container;