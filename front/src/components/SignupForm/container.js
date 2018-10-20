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
        birthDay: "",
        gender: "",
        is_duplicated_nickname: true,
        is_duplicated_email: true,
        is_duplicated_username: true,
        error_nickname: "",
        error_email: "",
        error_username: "",
        error_submit: "",
    }

    static propTypes = {
        createAccount: PropTypes.func.isRequired,
        doCheckNickname: PropTypes.func.isRequired,
        doCheckEmail: PropTypes.func.isRequired,
        doCheckUsername: PropTypes.func.isRequired,
        removeCheckNickname: PropTypes.func.isRequired,
        removeCheckEmail: PropTypes.func.isRequired,
        removeCheckUsername: PropTypes.func.isRequired
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.editComplete){
            const { finishEditProfile } = this.props;
            this.setState({
                is_duplicated_nickname: true,
                is_duplicated_email: true
            })
            finishEditProfile();
        }
        if(nextProps.checkNickname === true){
            this.setState({
                is_duplicated_nickname: false,
                error_nickname: ""
            })
        }
        else if(nextProps.checkNickname === false){
            this.setState({
                is_duplicated_nickname: true,
                error_nickname: '닉네임이 중복되거나 빈값입니다.'
            })
        }
        if(nextProps.checkEmail === true){
            this.setState({
                is_duplicated_email: false,
                error_email: ""
            })
        }
        else if(nextProps.checkEmail === false){
            this.setState({
                is_duplicated_email: true,
                error_email: '이메일이 중복되거나 잘못된 값입니다.'
            })
        }
        if(nextProps.checkUsername === true){
            this.setState({
                is_duplicated_username: false,
                error_username: ""
            })
        }
        else if(nextProps.checkUsername === false){
            this.setState({
                is_duplicated_username: true,
                error_username: '아이디가 중복되거나 빈값입니다.'
            })
        }
    }

    render(){
        const { username, password1, password2, name, nickname, email, birthYear, birthMonth, birthDay, gender } = this.state;
        return <SignupForm 
        {...this.props} 
        {...this.state} 
        usrenameValue={username} 
        password1Value={password1} 
        password2Value={password2} 
        nameValue={name} 
        nicknameValue={nickname} 
        emailValue={email} 
        birthYearValue={birthYear} 
        birthMonthValue={birthMonth} 
        birthDayValue={birthDay} 
        genderValue={gender} 
        handleInputChange={this._handleInputChange} 
        handleSubmit={this._handleSubmit} 
        checkNickname={this._checkNickname} 
        checkEmail={this._checkEmail} 
        checkUsername={this._checkUsername} 
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
        const { is_duplicated_nickname, is_duplicated_email, is_duplicated_username } = this.state;
        if((is_duplicated_nickname === false) && (is_duplicated_email === false) && (is_duplicated_username === false)){
            const { username, password2, email, name, nickname, birthYear, birthMonth, birthDay, gender } = this.state;
            const password = password2
            const { createAccount,removeCheckNickname, removeCheckEmail, removeCheckUsername } = this.props;
            createAccount(username, password, email, name, nickname, birthYear, birthMonth, birthDay, gender);
            removeCheckNickname();
            removeCheckEmail();
            removeCheckUsername();
        }
        else{
            const { removeCheckNickname, removeCheckEmail, removeCheckUsername } = this.props;
            removeCheckNickname();
            removeCheckEmail();
            removeCheckUsername();
            this.setState({
                error_submit: "중복확인을 해주세요."
            })
        }
    }

    _checkNickname = () => {
        console.log('hi')
        const { nickname } = this.state;
        const { doCheckNickname, removeCheckNickname } = this.props;
        doCheckNickname(nickname);
        removeCheckNickname();
    }

    _checkEmail = () => {
        const { email } = this.state;
        const { doCheckEmail, removeCheckEmail } = this.props;
        doCheckEmail(email);
        removeCheckEmail();
    }

    _checkUsername = () => {
        const { username } = this.state;
        const { doCheckUsername, removeCheckUsername } = this.props;
        doCheckUsername(username);
        removeCheckUsername();
    }
}

export default Container;