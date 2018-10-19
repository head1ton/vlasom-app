import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './presenter';

class Container extends Component{
    state = {
        edit: false,
        nickname: "",
        email: "",
        description: ""
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
        getMyProfile: PropTypes.func.isRequired,
        editComplete: PropTypes.bool
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.editComplete){
            this.setState({
                edit: false
            })
        }
    }

    render(){
        const { loginUser } = this.props;
        const { nickname, email, description } = this.state;
        return (
            <Profile 
            {...this.props} 
            {...this.state} 
            user={loginUser} 
            handleStartEdit={this._handleStartEdit} 
            handleEndEdit={this._handleEndEdit} 
            handleInputChange={this._handleInputChange} 
            nicknameValue={nickname} 
            emailValue={email} 
            descriptionValue={description}
            />
        )
    }

    _handleStartEdit = () =>{
        this.setState({
            edit: true
        })
    }

    _handleEndEdit = () => {
        const { nickname, email, description } = this.state;
        const { editProfile } = this.props;
        editProfile(nickname, email, description);
    }

    _handleInputChange = event => {
        const { target : { value, name } } = event;
        this.setState({
            [name]: value //[name]은 위에서 정의한 name 변수를 의미함
        });
    };
}

export default Container;