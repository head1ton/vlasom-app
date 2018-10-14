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
        category_name: PropTypes.array
    }

    render(){
        return <Menu category_name={this.props.category_name} closeMenu={this._closeMenu} show_profile={this.props.show_profile} show_category={this.props.show_category} handleProfile={this._handleProfile} handleCategory={this._handleCategory} />
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
}

export default Container;