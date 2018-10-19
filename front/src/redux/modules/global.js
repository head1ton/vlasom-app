import { actionCreators as userActions } from 'redux/modules/user';

const CLOSE_MENU = 'CLOSE_MENU';
const OPEN_MENU = 'OPEN_MENU';
const HANDLE_PROFILE = 'HANDLE_PROFILE';
const HANDLE_CATEGORY = 'HANDLE_CATEGORY';
const GET_CATEGORY_ALL_NAME = 'GET_CATEGORY_ALL_NAME';
const GET_USER = 'GET_USER';
const HANDLE_NAV_BTM = 'HANDLE_NAV_BTM';
const EDIT_PROFILE = 'EDIT_PROFILE';
const CHECK_NICKNAME = 'CHECK_NICKNAME';
const CHECK_EMAIL = 'CHECK_EMAIL';
const REMOVE_CHECK_NICKNAME = 'REMOVE_CHECK_NICKNAME';
const REMOVE_CHECK_EMAIL = 'REMOVE_CHECK_EMAIL';

function setCloseMenu(show_menu){
    return {
        type: CLOSE_MENU,
        show_menu
    }
}

function setOpenMenu(show_menu){
    return {
        type: OPEN_MENU,
        show_menu
    }
}

function setHandleProfile(show_profile){
    return {
        type: HANDLE_PROFILE,
        show_profile
    }
}

function setHandleCategory(show_category){
    return {
        type: HANDLE_CATEGORY,
        show_category
    }
}

function setHandleNavBtm(show_nav_btm){
    return {
        type: HANDLE_NAV_BTM,
        show_nav_btm
    }
}

function getAllCategoryName(category_name){
    return {
        type: GET_CATEGORY_ALL_NAME,
        category_name
    }
}

function getUser(loginUser){
    return {
        type: GET_USER,
        loginUser
    }
}

function doEditProfile(loginUser){
    return {
        type: EDIT_PROFILE,
        loginUser
    }
}

function setCheckNickname(checkNickname){
    return {
        type: CHECK_NICKNAME,
        checkNickname
    }
}

function setCheckEmail(checkEmail){
    return {
        type: CHECK_EMAIL,
        checkEmail
    }
}

function setRemoveCheckNickname(){
    return {
        type: REMOVE_CHECK_NICKNAME
    }
}

function setRemoveCheckEmail(){
    return {
        type: REMOVE_CHECK_EMAIL
    }
}

function closeMenu(){
    return (dispatch, getState) => {
        const { global : { show_menu } } = getState();
        dispatch(setCloseMenu(show_menu));
    }
}

function openMenu(){
    return (dispatch, getState) => {
        const { global : { show_menu } } = getState();
        dispatch(setOpenMenu(show_menu));
    }
}

function handleProfile(){
    return (dispatch, getState) => {
        const { global : { show_profile } } = getState();
        dispatch(setHandleProfile(show_profile));
    }
}

function handleCategory(){
    return (dispatch, getState) => {
        const { global : { show_category } } = getState();
        dispatch(setHandleCategory(show_category));
    }
};

function handleNavBtm(show_nav_btm){
    return (dispatch) => {
        dispatch(setHandleNavBtm(show_nav_btm));
    }
}

function allCategoryName(){
    return (dispatch, getState) => {
        const { user : {token} } = getState();
        fetch('/images/category/all/name/', {
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            return response.json();
        })
        .then(json => dispatch(getAllCategoryName(json)));
    }
};

function getMyProfile(){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch('/users/my/profile/', {
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            return response.json();
        })
        .then(json => dispatch(getUser(json)));
    }
}

function editProfile(nickname, email, description){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        const { global : { loginUser } } = getState();
        fetch(`/users/${loginUser.username}/`, {
            method: 'PUT',
            headers: {
                "Authorization": `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nickname,
                email,
                description
            })
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            return response.json()
        })
        .then(json => {
            dispatch(doEditProfile(json))
        })
        .catch(err => console.log(err));
    }
}

function doCheckNickname(nickname){
    return (dispatch, getState) =>{
        const { user : { token } } = getState();
        fetch('/users/check/nickname/', {
            method: 'POST',
            headers: {
                "Authorization": `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nickname
            })
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            else if(response.status === 202){
                dispatch(setCheckNickname(true))
            }
            else if(response.status === 203){
                dispatch(setCheckNickname(false))
            }
        })
    }
}

function doCheckEmail(email){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch('/users/check/email/', {
            method: 'POST',
            headers: {
                "Authorization": `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            else if(response.status === 202){
                dispatch(setCheckEmail(true))
            }
            else if(response.status === 203){
                dispatch(setCheckEmail(false))
            }
        })
    }
}

function removeCheckNickname(){
    return (dispatch) => {
        dispatch(setRemoveCheckNickname())
    }
}

function removeCheckEmail(){
    return (dispatch) => {
        dispatch(setRemoveCheckEmail())
    }
}

const initialState = {
    show_menu: false,
    show_profile: false,
    show_category: false,
    show_nav_btm: true,
};

function reducer(state = initialState, action){
    switch(action.type){
        case CLOSE_MENU:
            return applyCloseMenu(state, action);
        case OPEN_MENU:
            return applyOpenMenu(state, action);
        case HANDLE_PROFILE:
            return applyHandleProfile(state, action);
        case HANDLE_CATEGORY:
            return applyHandleCategory(state, action);
        case HANDLE_NAV_BTM:
            return applyHandleNavBtm(state, action);
        case GET_CATEGORY_ALL_NAME:
            return applyGetAllCategoryName(state, action);
        case GET_USER:
            return applyGetUser(state, action);
        case EDIT_PROFILE:
            return applyEditProfile(state, action);
        case CHECK_NICKNAME:
            return applyCheckNickname(state, action);
        case CHECK_EMAIL:
            return applyCheckEmail(state, action);
        case REMOVE_CHECK_NICKNAME:
            return applyRemoveCheckNickname(state, action);
        case REMOVE_CHECK_EMAIL:
            return applyRemoveCheckEmail(state, action);
        default:
            return state;
    }
};

function applyCloseMenu(state, action){
    const { show_menu } = action;
    if(show_menu){
        return {
            ...state,
            show_menu: false
        }
    }
    return state
}

function applyOpenMenu(state, action){
    const { show_menu } = action;
    if(!show_menu){
        return {
            ...state,
            show_menu: true
        }
    }
    return state
}

function applyHandleProfile(state, action){
    const { show_profile } = action;
    return {
        ...state,
        show_profile: !show_profile
    }
}

function applyHandleCategory(state, action){
    const { show_category } = action;
    return {
        ...state,
        show_category: !show_category
    }
};

function applyHandleNavBtm(state, action){
    const { show_nav_btm } = action;
    return {
        ...state,
        show_nav_btm: !show_nav_btm
    }
}

function applyGetAllCategoryName(state, action){
    const { category_name } = action;
    return {
        ...state,
        category_name
    }
};

function applyGetUser(state, action){
    const { loginUser } = action;
    return {
        ...state,
        loginUser
    }
}

function applyEditProfile(state, action){
    const { loginUser } = action;
    return {
        ...state,
        loginUser,
        editComplete: true
    }
}

function applyCheckNickname(state, action){
    const { checkNickname } = action;
    return {
        ...state,
        checkNickname
    }
}

function applyCheckEmail(state, action){
    const { checkEmail } = action;
    return {
        ...state,
        checkEmail
    }
}

function applyRemoveCheckNickname(state, action){
    return {
        ...state,
        checkNickname: undefined
    }
}

function applyRemoveCheckEmail(state, action){
    return {
        ...state,
        checkEmail: undefined
    }
}

const actionCreators = {
    closeMenu,
    openMenu,
    handleProfile,
    handleCategory,
    allCategoryName,
    getMyProfile,
    handleNavBtm,
    editProfile,
    doCheckNickname,
    doCheckEmail,
    removeCheckNickname,
    removeCheckEmail
};

export { actionCreators };

export default reducer;