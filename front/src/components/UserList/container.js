import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserList from './presenter';

class Container extends Component{
    state = {
        loading: true
    }
    render(){
        return <UserList {...this.props} {...this.state} />
    }
};

export default Container;