import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './presenter';

class Container extends Component{
    state = {
        loading: true
    }

    static propTypes = {
        categoryImage: PropTypes.func.isRequired
    }

    componentDidMount(){
        const { categoryImage } = this.props;
        categoryImage();
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { categoryImage } = this.props;
        if(prevProps.match.params !== this.props.match.params){
            categoryImage();
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.feed){
            this.setState({
                loading: false
            })
        }
    }

    
    render(){
        const { feed } = this.props;
        return <Category {...this.props} {...this.state} feed={feed} />;
    }
};

export default Container;