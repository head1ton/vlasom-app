import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './presenter';

class Container extends Component{
    static propTypes = {
        loginUser: PropTypes.shape({
            description: PropTypes.string,
            follower_count: PropTypes.number.isRequired,
            following_count: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
            images: PropTypes.array,
            email: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            nickname: PropTypes.string.isRequired,
            post_count: PropTypes.number.isRequired,
            profile_image: PropTypes.string,
            username: PropTypes.string.isRequired,
            birth_year: PropTypes.string.isRequired,
            birth_month: PropTypes.string.isRequired,
            birth_day: PropTypes.string.isRequired
        })
    }

    render(){
        const { loginUser } = this.props;
        return (
            <Profile {...this.props} user={loginUser} />
        )
    }
}

export default Container;