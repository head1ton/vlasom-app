import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileChange from './presenter';

class Container extends Component{
    state = {
        nickname: "",
        email: "",
        description: "",
        is_duplicated_nickname: true,
        is_duplicated_email: true,
        error_nickname: "",
        error_email: "",
    }
    static propTypes = {
        loginUser: PropTypes.shape({
            description: PropTypes.string,
            follower_count: PropTypes.number.isRequired,
            following_count: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
            images: PropTypes.array,
            email: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            nickname: PropTypes.string.isRequired,
            post_count: PropTypes.number.isRequired,
            profile_image: PropTypes.string,
            username: PropTypes.string.isRequired,
            birth_year: PropTypes.string.isRequired,
            birth_month: PropTypes.string.isRequired,
            birth_day: PropTypes.string.isRequired,
            notification_count: PropTypes.number.isRequired
        }),
        editProfile: PropTypes.func.isRequired,
        doCheckNickname: PropTypes.func.isRequired,
        doCheckEmail: PropTypes.func.isRequired,
        editComplete: PropTypes.bool,
        checkNickname: PropTypes.bool,
        checkEmail: PropTypes.bool,
        removeCheckNickname: PropTypes.func.isRequired,
        removeCheckEmail: PropTypes.func.isRequired,
        finishEditProfile: PropTypes.func.isRequired
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
    }

    render(){
        const { loginUser } = this.props;
        const { nickname, email, description } = this.state;
        return (
            <ProfileChange
            {...this.props} 
            {...this.state} 
            user={loginUser} 
            handleStartEdit={this._handleStartEdit} 
            handleEndEdit={this._handleEndEdit} 
            handleCancelEdit={this._handleCancelEdit} 
            handleInputChange={this._handleInputChange} 
            nicknameValue={nickname} 
            emailValue={email} 
            descriptionValue={description} 
            checkNickname={this._checkNickname} 
            checkEmail={this._checkEmail} 
            />
        )
    }

    _checkNickname = () => {
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

    _handleEndEdit = (event) => {
        if((!this.state.is_duplicated_nickname) && (!this.state.is_duplicated_email)){
            const { nickname, email, description } = this.state;
            const { editProfile, removeCheckNickname, removeCheckEmail } = this.props;
            event.preventDefault();
            editProfile(nickname, email, description);
            removeCheckNickname();
            removeCheckEmail();
        }
        else{
            event.preventDefault();
            alert('중복확인을 해주세요.')
        }
    }

    _handleInputChange = event => {
        const { target : { value, name } } = event;
        this.setState({
            [name]: value //[name]은 위에서 정의한 name 변수를 의미함
        });
    };
}

export default Container;