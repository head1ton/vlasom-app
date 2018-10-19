import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './presenter';

class Container extends Component{
    state = {
        loading: true
    }

    static propTypes = {
        categoryImage: PropTypes.func.isRequired,
        feed: PropTypes.array,
        interestCategory: PropTypes.func.isRequired,
        uninterestCategory: PropTypes.func.isRequired
    }

    componentDidMount(){
        const { categoryImage } = this.props;
        categoryImage();
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { categoryImage } = this.props;
        if(prevProps.match.params.categoryName !== this.props.match.params.categoryName){
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

    _handleInterestClick = event => {
        const { feed, interestCategory, uninterestCategory } = this.props;
        const categoryId = feed[0].category.id
        if(feed[0].category.is_interested_category){
            uninterestCategory(categoryId);
        }
        else{
            interestCategory(categoryId);
        }
    }

    
    render(){
        const { feed } = this.props;
        return <Category {...this.props} {...this.state} feed={feed} handleInterestClick={this._handleInterestClick} />;
    }
};

export default Container;