import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoComments from './presenter';

class Container extends Component{
    static propTypes = {
        deleteComment: PropTypes.func.isRequired,
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

    render(){
        const { loginUser } = this.props
        return <PhotoComments {...this.state} {...this.props} loginUser={loginUser} />
    }
};

export default Container;