import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PasswordChange from './presenter';

class Container extends Component{
    state = {
        current_password: "",
        new_password1: "",
        new_password: "",
        new_password_error: "",
        current_password_error: "",
        check_current: false,
        check_new: false,
        change_complete: false,
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
        changePassword: PropTypes.func.isRequired,
        current_error: PropTypes.bool,
        removePasswordCheck: PropTypes.func.isRequired
    }

    componentWillReceiveProps = (nextProps) => {
        if(!nextProps.current_error){
            const { removePasswordCheck } = this.props;
            this.setState({
                current_password_error: "현재 비밀번호가 일치하지 않습니다.",
                check_current: false
            })
            removePasswordCheck();
        }
        else if(nextProps.current_error){
            this.setState({
                current_password_error: "",
                check_current: true,
                change_complete: true
            })
            const { removePasswordCheck } = this.props;
            removePasswordCheck();
        }
    }

    render(){
        const { loginUser } = this.props;
        const { current_password, new_password1, new_password } = this.state;
        return (
            <PasswordChange {...this.props} {...this.state} user={loginUser} handleInputChange={this._handleInputChange} handleSubmit={this._handleSubmit} currentPasswordValue={current_password} newPassword1={new_password1} newPassword={new_password} />
        )
    }

    _handleInputChange = event => {
        const { target : { value, name } } = event;
        this.setState({
            [name]: value //[name]은 위에서 정의한 name 변수를 의미함
        });
    };

    _handleSubmit = (event) => {
        event.preventDefault();
        const { current_password, new_password1, new_password } = this.state;
        if(current_password === ""){
            this.setState({
                current_password_error: '현재 비밀번호를 입력해주세요.',
                check_current: false
            })
        }
        else if(current_password !== ""){
            this.setState({
                current_password_error: ""
            })
        }
        if(new_password1 !== new_password){
            this.setState({
                new_password_error: '비밀번호가 일치하지 않습니다.',
                check_new: false
            })
        }
        else if(new_password1 === "" && new_password === ""){
            this.setState({
                new_password_error: '새 비밀번호를 입력해주세요.',
                check_new: false
            })
        }
        else if((current_password !== "") && new_password1 !== "" && new_password !== "" && (new_password1 === new_password)){
            const { changePassword, loginUser, removePasswordCheck } = this.props;
            this.setState({
                current_password_error: "",
                new_password_error: "",
                check_new: true,
            })
            changePassword(loginUser.username, current_password, new_password);
            removePasswordCheck();
        }
    }
};

export default Container;