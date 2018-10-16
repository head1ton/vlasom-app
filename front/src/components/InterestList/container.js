import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InterestList from './presenter';

class Container extends Component{
    state = {
        loading: true
    }

    static propTypes = {
        getInterestList: PropTypes.func.isRequired
    }

    componentDidMount(){
        const { getInterestList } = this.props;
        getInterestList();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.feed){
            this.setState({
                loading: false
            })
        }
    }

    render(){
        return <InterestList {...this.props} />
    }
};

export default Container;