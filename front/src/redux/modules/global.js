const CLOSE_MENU = 'CLOSE_MENU';
const OPEN_MENU = 'OPEN_MENU';
const HANDLE_PROFILE = 'HANDLE_PROFILE';
const HANDLE_CATEGORY = 'HANDLE_CATEGORY';

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
}

const initialState = {
    show_menu: false,
    show_profile: false,
    show_category: false
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
        default:
            return state;
    };
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
}

const actionCreators = {
    closeMenu,
    openMenu,
    handleProfile,
    handleCategory
};

export { actionCreators };

export default reducer;