import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './presenter';

class Container extends Component{
    state = {
        username: "",
        password: ""
    };

    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        usernameLogin: PropTypes.func.isRequired
    }

    render(){
        const { username, password } = this.state;
        return <LoginForm 
        {...this.props}
        handleInputChange={this._handleInputChange} 
        handleSubmit={this._handleSubmit} 
        usernameValue={username} 
        passwordValue={password} 
        handleFacebookLogin = {this._handleFacebookLogin} 
        />;
    }

    _handleInputChange = event => {
        const { target : { value, name } } = event;
        this.setState({
            [name]: value //[name]은 위에서 정의한 name 변수를 의미함
        });
    };

    _handleSubmit = event => {
        const{ usernameLogin } = this.props;
        const { username, password} = this.state;
        event.preventDefault();
        usernameLogin(username, password);
    };

    _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
    }
}

export default Container;