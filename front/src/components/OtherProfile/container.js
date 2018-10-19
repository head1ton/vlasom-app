import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OtherProfile from './presenter';

class Container extends Component{
    state = {
        loading: true
    }

    static propTypes = {
        getUserProfile: PropTypes.func.isRequired,
        user: PropTypes.shape({
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

    componentDidMount(){
        const { getUserProfile } = this.props;
        getUserProfile();
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { getUserProfile } = this.props;
        if(prevProps.match.params !== this.props.match.params){
            getUserProfile();
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user && nextProps.user){
            this.setState({
                loading: false
            })
        }
    }

    render(){
        const { user } = this.props;
        return (
            <OtherProfile {...this.props} {...this.state} user={user} />
        )
    }
};

export default Container;