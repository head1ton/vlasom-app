import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from './presenter';

class Container extends Component {
    state = {
        term: ""
    }

    static propTypes = {
        goToSearch: PropTypes.func.isRequired,
        openMenu: PropTypes.func.isRequired,
        loginUser: PropTypes.shape({
            name: PropTypes.string.isRequired,
            nickname: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            images: PropTypes.array,
            profile_image: PropTypes.string,
            description: PropTypes.string,
            follower_count: PropTypes.number.isRequired,
            following_count: PropTypes.number.isRequired,
            post_count: PropTypes.number.isRequired
        })
    }
    render() {
        return <Navigation onSubmit={this._onSubmit} onInputChange={this._onInputChange} openMenu={this._openMenu} value={this.state.term} loginUser={this.props.loginUser} />;
    }

    _onInputChange = event => {
        const { target: { value } } = event;
        this.setState({
            term: value
        })
    };

    _onSubmit = event => {
        const { goToSearch } = this.props;
        const { term } = this.state;
        event.preventDefault();
        goToSearch(term);
        this.setState({
            term: ""
        })
    }

    _openMenu = event => {
        const { openMenu } = this.props;
        openMenu();
    }
}

export default Container;