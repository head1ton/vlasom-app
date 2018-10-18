import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from './presenter';

class Container extends Component{
    static propTypes = {
        closeMenu: PropTypes.func.isRequired,
        show_profile: PropTypes.bool.isRequired,
        show_category: PropTypes.bool.isRequired,
        handleProfile: PropTypes.func.isRequired,
        handleCategory: PropTypes.func.isRequired,
        getLogout: PropTypes.func.isRequired,
        category_name: PropTypes.array,
        loginUser: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            nickname: PropTypes.string.isRequired,
            images: PropTypes.array,
            email: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
            description: PropTypes.string,
            follower_count: PropTypes.number.isRequired,
            following_count: PropTypes.number.isRequired,
            post_count: PropTypes.number.isRequired,
            birth_year: PropTypes.string.isRequired,
            birth_month: PropTypes.string.isRequired,
            birth_day: PropTypes.string.isRequired,
            notification_count: PropTypes.number.isRequired
        })
    }

    componentDidMount(){
        window.addEventListener('scroll', this._handleScroll, false)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this._handleScroll, false);
    }

    render(){
        return <Menu loginUser={this.props.loginUser} category_name={this.props.category_name} handleLogout={this._handleLogout} closeMenu={this._closeMenu} show_profile={this.props.show_profile} show_category={this.props.show_category} handleProfile={this._handleProfile} handleCategory={this._handleCategory} />
    }

    _closeMenu = () => {
        const { closeMenu } = this.props;
        closeMenu();
    }

    _handleProfile = () => {
        const { handleProfile } = this.props;
        handleProfile();
    }

    _handleCategory = () => {
        const { handleCategory } = this.props;
        handleCategory();
    }

    _handleLogout = () => {
        const { getLogout, closeMenu } = this.props;
        closeMenu();
        getLogout();
    }

    _handleScroll = () => {
        console.log('scroll!!');
    }
}

export default Container;