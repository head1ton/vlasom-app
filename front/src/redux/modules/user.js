 const SAVE_TOKEN = 'SAVE_TOKEN';
 const LOGOUT = 'LOGOUT';
 const SET_USER_LIST = 'SET_USER_LIST';
 const FOLLOW_USER = 'FOLLOW_USER';
 const UNFOLLOW_USER = 'UNFOLLOW_USER';
 const SET_IMAGE_LIST = 'SET_IMAGE_LIST';
 const USER_PROFILE = 'USER_PROFILE';
 const NOTIFICATIONS = 'NOTIFICATIONS';
 const PASSWORD_CHANGE = 'PASSWORD_CHANGE';
 const REMOVE_PASSWORD_CHECK = 'REMOVE_PASSWORD_CHECK';

function saveToken(token) {
    return {
        type: SAVE_TOKEN,
        token
    }
}

function logout(){
    return {
        type: LOGOUT
    }
};

function setUserList(userList){
    return {
        type: SET_USER_LIST,
        userList
    }
}

function setImageList(imageList){
    return {
        type: SET_IMAGE_LIST,
        imageList
    }
}

function setFollowUser(userId){
    return {
        type: FOLLOW_USER,
        userId
    }
}

function setUnfollowUser(userId){
    return {
        type: UNFOLLOW_USER,
        userId
    }
}

function setUserProfile(user){
    return {
        type: USER_PROFILE,
        user
    }
}

function setNotifications(notifications){
    return {
        type: NOTIFICATIONS,
        notifications
    }
}

function setPasswordChange(current_error){
    return {
        type: PASSWORD_CHANGE,
        current_error
    }
}

function setRemovePasswordCheck(){
    return {
        type: REMOVE_PASSWORD_CHECK
    }
}

function facebookLogin(access_token){
     return dispatch => {
         fetch('/users/login/facebook/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                access_token
            })
        })
        .then(response => response.json())
        .then(json => {
            if(json.token){
                dispatch(saveToken(json.token))
            }
        })
        .catch(err => console.log(err));
    };
 }

 function usernameLogin(username, password){
     return function(dispatch){
         fetch('/rest-auth/login/', {
             method: 'POST',
             headers: {
                "Content-Type": "application/json"
             },
             body: JSON.stringify({
                 username,
                 password
             })
         })
         .then(response => response.json())
         .then(json => {
             if(json.token){
                 dispatch(saveToken(json.token))
             }
         })
         .catch(err => console.log(err));
     }
 }

 function createAccount(username, password, email, name, nickname, birthYear, birthMonth, birthDay){
     return function(dispatch){
         fetch('/rest-auth/registration/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password1: password,
                password2: password,
                email,
                name,
                nickname,
                birthYear,
                birthMonth,
                birthDay
            })
         })
         .then(response => response.json())
         .then(json => {
             if(json.token){
                 dispatch(saveToken(json.token))
             }
         })
         .catch(err => console.log(err));
     }
 }

 function getLogout(){
     return (dispatch) => {
         dispatch(logout());
     }
 }

 function getPhotoLikes(photoId){
     return (dispatch, getState) => {
         const { user : { token } } = getState();
         fetch(`/images/${photoId}/like/`, {
             method: 'GET',
             headers: {
                 "Authorization": `JWT ${token}`
             }
         })
         .then(response => {
             if(response.status === 401){
                 dispatch(logout());
             }
             return response.json();
         })
         .then(json => {
             dispatch(setUserList(json));
         })
     }
 }

 function followUser(userId){
     return (dispatch, getState) =>{
         dispatch(setFollowUser(userId));
         const { user : { token } } = getState();
         fetch(`/users/${userId}/follow/`, {
             method: 'POST',
             headers: {
                 "Authorization": `JWT ${token}`,
                 "Content-Type": 'application/json'
             }
         })
         .then(response => {
             if(response.status === 401){
                 dispatch(logout());
             }
             else if(!response.ok){
                 dispatch(setUnfollowUser(userId));
             }
         })
     }
 }

 function unfollowUser(userId){
     return (dispatch, getState) => {
         dispatch(setUnfollowUser(userId));
         const { user : { token } } = getState();
         fetch(`/users/${userId}/unfollow/`, {
             method: 'POST',
             headers: {
                 "Authorization": `JWT ${token}`,
                 "Content-Type": 'application/json'
             }
         })
         .then(response => {
             if(response.status === 401){
                 dispatch(logout());
             }
             else if(!response.ok){
                 dispatch(setFollowUser(userId));
             }
         })
     }
 }

 function getExplore(){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch(`/users/explore/`, {
            method: 'GET',
            headers: {
                "Authorization": `JWT ${token}`,
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(logout());
            }
            return response.json()
        })
        .then(json => dispatch(setUserList(json)))
    }
 }

 function searchByTerm(searchTerm){
     return async(dispatch, getState) => {
         const { user : { token } } = getState();
         const userList = await searchUsers(token, searchTerm);
         const imageList = await searchImages(token, searchTerm);
         if(userList === 401 || imageList === 401){
             dispatch(logout());
         }
         dispatch(setUserList(userList));
         dispatch(setImageList(imageList));
     }
 }

 function searchUsers(token, searchTerm){
     return fetch(`/users/search/?username=${searchTerm}`, {
         headers: {
             "Authorization": `JWT ${token}`
         }
     })
     .then(response => {
         if(response.status === 401){
             return 401
         }
         return response.json()
     })
     .then(json => json);
 }

 function searchImages(token, searchTerm){
    return fetch(`/images/search/?tags=${searchTerm}`, {
        headers: {
            "Authorization": `JWT ${token}`
        }
    })
    .then(response => {
        if(response.status === 401){
            return 401
        }
        return response.json()
    })
    .then(json => json);
}

function getUserProfile(username){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch(`/users/${username}/`,{
            method: 'GET',
            headers: {
                'Authorization': `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(logout());
            }
            return response.json()
        })
        .then(json => {
            dispatch(setUserProfile(json));
        })
    }
}

function getNotifications(){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch('/notifications/', {
            headers: {
                'Authorization': `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(logout());
            }
            return response.json()
        })
        .then(json => {
            dispatch(setNotifications(json))
        })
        .then(
            fetch('/notifications/update/', {
                method: 'PUT',
                headers: {
                    'Authorization': `JWT ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if(response.status === 401){
                    dispatch(logout());
                }
            })
        )
    }
}

function changePassword(username,current_password,new_password){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch(`/users/${username}/password/`, {
            method: 'PUT',
            headers: {
                "Authorization": `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                current_password,
                new_password
            })
        })
        .then(response => {
            if(response.status === 401){
                dispatch(logout());
            }
            else if(response.status === 203){
                dispatch(setPasswordChange(false))
            }
            else if(response.status === 200){
                dispatch(setPasswordChange(true))
            }
        })
    }
}

function removePasswordCheck(){
    return (dispatch) => {
        dispatch(setRemovePasswordCheck());
    }
}
 
 const initialState = {
     isLoggedIn: localStorage.getItem('jwt') ? true : false,
     token: localStorage.getItem('jwt'),
 };

 function reducer(state = initialState, action){
    switch(action.type){
        case SAVE_TOKEN:
            return applySetToken(state, action);
        case LOGOUT:
            return applyLogout(state, action);
        case SET_USER_LIST:
            return applySetUserList(state, action);
        case FOLLOW_USER:
            return applyFollowUser(state, action);
        case UNFOLLOW_USER:
            return applyUnfollowUser(state, action);
        case SET_IMAGE_LIST:
            return applySetImageList(state, action);
        case USER_PROFILE:
            return applySetUserProfile(state, action);
        case NOTIFICATIONS:
            return applySetNotifications(state, action);
        case PASSWORD_CHANGE:
            return applyPasswordChange(state, action);
        case REMOVE_PASSWORD_CHECK:
            return applyRemovePasswordCheck(state, action);
        default:
            return state;
     }
 }

 function applySetToken(state, action){
     const { token } = action;
     localStorage.setItem("jwt", token);
     return {
         ...state,
         isLoggedIn: true,
         token
     };
 };

 function applyLogout(state, action){
     localStorage.removeItem("jwt");
     return {
         isLoggedIn: false
     };
 };

 function applySetUserList(state, action){
     const { userList } = action;
     return {
         ...state,
         userList
     };
 };

 function applySetImageList(state, action){
     const { imageList } = action;
     return {
         ...state,
         imageList
     }
 }

 function applyFollowUser(state, action){
    const { userId } = action;
    const { userList } = state;
    const updatedUserList = userList.map(user => {
        if(user.id === userId){
            return {
                ...user,
                following: true
            };
        }
        return user
    });
    return {
        ...state,
        userList: updatedUserList
    }
 };

 function applyUnfollowUser(state, action){
    const { userId } = action;
    const { userList } = state;
    const updatedUserList = userList.map(user => {
        if(user.id === userId){
            return {
                ...user,
                following: false
            };
        }
        return user
    });
    return {
        ...state,
        userList: updatedUserList
    }
 };

 function applySetUserProfile(state, action){
     const { user } = action;
     return {
         ...state,
         user
     }
 };

 function applySetNotifications(state, action){
     const { notifications } = action;
     return {
         ...state,
         notifications
     }
 };

function applyPasswordChange(state, action){
    const { current_error } = action;
    return {
        ...state,
        current_error
    }
}

function applyRemovePasswordCheck(state, action){
    return {
        ...state,
        current_error: undefined
    }
}

 const actionCreators = {
     facebookLogin,
     usernameLogin,
     createAccount,
     logout,
     getPhotoLikes,
     followUser,
     unfollowUser,
     getExplore,
     searchByTerm,
     getUserProfile,
     getNotifications,
     getLogout,
     changePassword,
     removePasswordCheck
 }

 export { actionCreators };

 export default reducer;