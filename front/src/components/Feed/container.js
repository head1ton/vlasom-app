import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feed from './presenter';

class Container extends Component{
    state = {
        loading: true
    }

    static propTypes = {
        getFeed: PropTypes.func.isRequired,
        getMyProfile: PropTypes.func.isRequired
    };

    componentDidMount(){
        const { getFeed, getMyProfile } = this.props;
        this.props.feed
        getFeed();
        getMyProfile();
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.feed){
            this.setState({
                loading: false
            })
        }
    }

    render(){
        const { feed } = this.props;
        return <Feed {...this.state} feed={feed} />
    }
}

export default Container;