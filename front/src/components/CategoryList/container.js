import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from './presenter';

class Container extends Component{
    state = {
        loading: true
    };

    static propTypes = {
        allCategory: PropTypes.func.isRequired,
        categoryImageList: PropTypes.array,
        category_name: PropTypes.array
    };

    componentDidMount(){
        const { allCategory } = this.props;
        allCategory();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.categoryImageList){
            this.setState({
                loading: false
            })
        }
    }

    render(){
        const { categoryImageList, category_name } = this.props;
        return(
            <CategoryList {...this.state} {...this.props} categoryImageList={categoryImageList} category_name={category_name} />
        )
    }
};

export default Container;