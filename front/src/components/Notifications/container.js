import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from './presenter';

class Container extends Component {
    state = {
        loading: true
    }

    static propTypes = {
        getNotifications: PropTypes.func.isRequired,
        notifications: PropTypes.array,
        getMyProfile: PropTypes.func.isRequired
    }

    componentDidMount(){
        const { getNotifications, getMyProfile } = this.props;
        getNotifications();
        getMyProfile();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.notifications){
            this.setState({
                loading: false
            })
        }
    }

    render(){
        const { notifications } = this.props;
        return (
            <Notifications {...this.state} {...this.props} notifications={notifications} />
        )
    }
};

export default Container;