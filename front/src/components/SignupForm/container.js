import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupForm from './presenter';

class Container extends Component{
    state = {
        username: "",
        password1: "",
        password2: "",
        name: "",
        nickname: "",
        email: "",
        birthYear: "",
        birthMonth: "",
        birthDay: ""
    }

    static propTypes = {
        createAccount: PropTypes.func.isRequired
    }

    render(){
        const { username, password1, password2, name, nickname, email, birthYear, birthMonth, birthDay } = this.state;
        return <SignupForm 
        usrenameValue={username} 
        password1Value={password1} 
        password2Value={password2} 
        nameValue={name} 
        nicknameValue={nickname} 
        emailValue={email} 
        birthYearValue={birthYear} 
        birthMonthValue={birthMonth} 
        birthDayValue={birthDay} 
        handleInputChange={this._handleInputChange} 
        handleSUbmit={this._handleSubmit} 
        />
    }

    _handleInputChange = event => {
        const { target : { value, name } } = event;
        this.setState({
            [name]: value //[name]은 위에서 정의한 name 변수를 의미함
        });
    };
    
    _handleSubmit = event => {
        const { username, password2, email, name, nickname, birthYear, birthMonth, birthDay } = this.state;
        const password = password2
        const { createAccount } = this.props;
        event.preventDefault();
        createAccount(username, password, email, name, nickname, birthYear, birthMonth, birthDay);
    
    }
}

export default Container;