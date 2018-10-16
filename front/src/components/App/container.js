import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './presenter';

class Container extends Component{
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        pathname: PropTypes.string.isRequired,
        show_menu: PropTypes.bool.isRequired,
        closeMenu: PropTypes.func.isRequired,
        openMenu: PropTypes.func.isRequired,
        allCategoryName: PropTypes.func.isRequired,
        getMyProfile: PropTypes.func.isRequired,
    }
    
    componentWillMount(){
        const { getMyProfile } = this.props;
        getMyProfile();
    }

    componentDidMount(){
        const { allCategoryName } = this.props;
        allCategoryName();
    }

    render(){
        return <App {...this.props} />
    }
}

export default Container;