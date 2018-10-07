import React, { Component } from 'react';
import LoginForm from './presenter';

class Container extends Component{
    state = {
        username: "",
        password: ""
    };

    render(){
        const { username, password } = this.state;
        return <LoginForm 
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
        console.log(this.state);
    };

    _handleSubmit = event => {
        event.preventDefault();
    };

    _handleFacebookLogin = response => {
        console.log(response);
    }
}

export default Container;