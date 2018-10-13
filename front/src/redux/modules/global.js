const CLOSE_MENU = 'CLOSE_MENU';
const OPEN_MENU = 'OPEN_MENU';

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

const initialState = {
    show_menu: false
};

function reducer(state = initialState, action){
    switch(action.type){
        case CLOSE_MENU:
            return applyCloseMenu(state, action);
        case OPEN_MENU:
            return applyOpenMenu(state, action);
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

const actionCreators = {
    closeMenu,
    openMenu
};

export { actionCreators };

export default reducer;