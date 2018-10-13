import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from './presenter';

class Container extends Component{
    static propTypes = {
        closeMenu: PropTypes.func.isRequired
    }

    render(){
        return <Menu closeMenu={this._closeMenu} />
    }

    _closeMenu = () => {
        const { closeMenu } = this.props;
        closeMenu();
    }
}

export default Container;