import React, { Component } from 'react';
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
        console.log(this.state);
    };
    
    _handleSubmit = event => {
        event.preventDefault();
    
    }
}

export default Container;