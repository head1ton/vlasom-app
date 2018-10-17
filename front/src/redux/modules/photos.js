import { actionCreators as userActions } from 'redux/modules/user';

const SET_FEED = 'SET_FEED';
const LIKE_PHOTO = 'LIKE_PHOTO';
const UNLIKE_PHOTO = 'UNLIKE_PHOTO';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMNET = 'DELETE_COMMENT';
const INTEREST_PHOTO = 'INTEREST_PHOTO';
const UNINTEREST_PHOTO = 'UNINTEREST_PHOTO';
const INTEREST_CATEGORY = 'INTEREST_CATEGORY';
const UNINTEREST_CATEGORY = 'UNINTEREST_CATEGORY';
const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY';
const CATEGORY_IMAGE = 'CATEGORY_IMAGE';
const INTEREST_LIST = 'INTEREST_LIST';

function setFeed(feed){
    return {
        type: SET_FEED,
        feed
    };
};

function doLikePhoto(photoId){
    return {
        type: LIKE_PHOTO,
        photoId
    };
};

function doUnlikePhoto(photoId){
    return {
        type: UNLIKE_PHOTO,
        photoId
    }
}

function addComment(photoId, comment){
    return {
        type: ADD_COMMENT,
        photoId,
        comment
    }
}

function setDeleteComment(commentId, photoId){
    return {
        type: DELETE_COMMNET,
        commentId,
        photoId
    }
}

function doInterestPhoto(photoId){
    return {
        type: INTEREST_PHOTO,
        photoId
    }
}

function doUninterestPhoto(photoId){
    return {
        type: UNINTEREST_PHOTO,
        photoId
    }
}

function doInterestCategory(categoryId){
    return {
        type: INTEREST_CATEGORY,
        categoryId
    }
}

function doUninterestCategory(categoryId){
    return {
        type: UNINTEREST_CATEGORY,
        categoryId
    }
}

function getAllCategory(categoryImageList){
    return {
        type: GET_ALL_CATEGORY,
        categoryImageList
    }
}

function getCategoryImage(categoryImages){
    return {
        type: CATEGORY_IMAGE,
        categoryImages
    }
}

function setInterestList(interestList){
    return {
        type: INTEREST_LIST,
        interestList
    }
}

function getFeed(){
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch('/images/', {
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
        .then(json => dispatch(setFeed(json)));
    }
}

function likePhoto(photoId){
    return (dispatch, getState) => {
        dispatch(doLikePhoto(photoId)); //update는 서버작업 후에 하면 안된다 -> optimistic update
        const { user: { token } } = getState();
        fetch(`/images/${photoId}/like/`,{
            method: "POST",
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            else if(!response.ok){
                dispatch(doUnlikePhoto(photoId));
            }
        })
    }
}

function unlikePhoto(photoId){
    return (dispatch, getState) => {
        dispatch(doUnlikePhoto(photoId)); //update는 서버작업 후에 하면 안된다 -> optimistic update
        const { user: { token } } = getState();
        fetch(`/images/${photoId}/unlike/`,{
            method: "DELETE",
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            else if(!response.ok){
                dispatch(doLikePhoto(photoId));
            }
        })
    }
}

function interestPhoto(photoId){
    return (dispatch, getState) => {
        dispatch(doInterestPhoto(photoId));
        const { user : { token } } = getState();
        fetch(`/images/interest/image/${photoId}/`, {
            method: 'POST',
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            else if(!response.ok){
                dispatch(doUninterestPhoto(photoId));
            }
        })
    }
}

function uninterestPhoto(photoId){
    return (dispatch, getState) => {
        dispatch(doUninterestPhoto(photoId));
        const { user : { token } } = getState();
        fetch(`/images/interest/image/${photoId}/`, {
            method: 'DELETE',
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            else if(!response.ok){
                dispatch(doInterestPhoto(photoId));
            }
        })
    }
}

function interestCategory(categoryId){
    return (dispatch, getState) => {
        dispatch(doInterestCategory(categoryId));
        const { user : { token } } = getState();
        fetch(`/images/interest/category/${categoryId}/`,{
            method: 'POST',
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            else if(!response.ok){
                dispatch(doUninterestCategory(categoryId));
            }
        })
    }
}

function uninterestCategory(categoryId){
    return (dispatch, getState) => {
        dispatch(doUninterestCategory(categoryId));
        const { user : { token } } = getState();
        fetch(`/images/interest/category/${categoryId}/`,{
            method: 'DELETE',
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            else if(!response.ok){
                dispatch(doInterestCategory(categoryId));
            }
        })
    }
}

function commentPhoto(photoId, message){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch(`/images/${photoId}/comments/`, {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message
            })
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            return response.json()
        })
        .then(json => {
            if(json.message){
                dispatch(addComment(photoId, json));
            }
        })
    }
};

function deleteComment(commentId, photoId){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch(`/images/comments/${commentId}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            dispatch(setDeleteComment(commentId, photoId))
        })
    }
}

function allCategory(){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch(`/images/category/all/`, {
            headers: {
                Authorization: `JWT ${token}`,
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            return response.json()
        })
        .then(json => {
            dispatch(getAllCategory(json));
        })
    }
};

function categoryImage(categoryName){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch(`/images/category/images/${categoryName}`, {
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            return response.json()
        })
        .then(json => {
            dispatch(getCategoryImage(json));
        })
    }
}

function getInterestList(){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch('/images/interest/list/', {
            headers: {
                'Authorization': `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            return response.json()
        })
        .then(json => {
            dispatch(setInterestList(json));
        })
    }
}

const initialState = {

};

function reducer(state = initialState, action){
    switch(action.type){
        case SET_FEED:
            return applySetFeed(state, action);
        case LIKE_PHOTO:
            return applyLikePhoto(state, action);
        case UNLIKE_PHOTO:
            return applyUnlikePhoto(state, action);
        case ADD_COMMENT:
            return applyAddComment(state, action);
        case DELETE_COMMNET:
            return applyDeleteComment(state, action);
        case INTEREST_PHOTO:
            return applyInterestPhoto(state, action);
        case UNINTEREST_PHOTO:
            return applyUninterestPhoto(state, action);
        case GET_ALL_CATEGORY:
            return applyGetAllCategory(state, action);
        case CATEGORY_IMAGE:
            return applyGetCategoryImage(state, action);
        case INTEREST_CATEGORY:
            return applyInterestCategory(state, action);
        case UNINTEREST_CATEGORY:
            return applyUninterestCategory(state, action);
        case INTEREST_LIST:
            return applyGetInterestList(state, action);
        default:
            return state;
    }
}

function applySetFeed(state, action){
    const { feed } = action;
    return {
        ...state,
        feed
    }
};

function applyLikePhoto(state, action){
    const { photoId } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        if(photo.id === photoId){
            return {...photo, is_liked: true, like_count: photo.like_count+1}
        }
        return photo;
    });
    return {...state, feed: updatedFeed};
}

function applyUnlikePhoto(state, action){
    const { photoId } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        if(photo.id === photoId){
            return {...photo, is_liked: false, like_count: photo.like_count-1}
        }
        return photo;
    });
    return {...state, feed: updatedFeed};
}

function applyAddComment(state, action){
    const { photoId, comment } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        if(photo.id === photoId){
            return {
                ...photo,
                comments: [...photo.comments, comment],
                comment_count: photo.comment_count+1
            }
        }
        return photo;
    });
    return {...state, feed: updatedFeed};
}

function applyDeleteComment(state, action){
    console.log('1')
    const { commentId, photoId } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        console.log('2')
        if(photo.id === photoId){
            console.log('3')
            const updatedComments = photo.comments.map(comment => {
                if(comment.id === commentId){
                    return null;
                }
                return comment;
            });
            return {
                ...photo,
                comments: updatedComments,
                comment_count: photo.comment_count-1
            }
        }
        return photo;
    });
    return {...state, feed: updatedFeed}
}

function applyInterestPhoto(state, action){
    const { photoId } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        if(photo.id === photoId){
            return {...photo, is_interested_image: true, interest_count_image: photo.interest_count_image +1}
        }
        return photo;
    });
    return {...state, feed: updatedFeed}
}

function applyUninterestPhoto(state, action){
    const { photoId } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        if(photo.id === photoId){
            return {...photo, is_interested_image: false, interest_count_image: photo.interest_count_image -1}
        }
        return photo;
    });
    return {...state, feed: updatedFeed}
};

function applyInterestCategory(state, action){
    const { categoryId } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        if(photo.category.id === categoryId){
            return {...photo, category: {...photo.category, is_interested_category: true, interest_count_category: photo.category.interest_count_category +1}}
        }
        return photo;
    });
    return {...state, feed: updatedFeed}
}

function applyUninterestCategory(state, action){
    const { categoryId } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        if(photo.category.id === categoryId){
            return {...photo, category: {...photo.category, is_interested_category: false, interest_count_category: photo.category.interest_count_category -1}}
        }
        return photo;
    });
    return {...state, feed: updatedFeed}
}

function applyGetAllCategory(state, action){
    const { categoryImageList } = action;
    return {
        ...state,
        categoryImageList
    }
};

function applyGetCategoryImage(state, action){
    const { categoryImages } = action;
    return {
        ...state,
        feed: categoryImages
    }
};

function applyGetInterestList(state, action){
    const { interestList } = action;
    return {
        ...state,
        interestList
    }
}

const actionCreators = {
    getFeed,
    likePhoto,
    unlikePhoto,
    commentPhoto,
    interestPhoto,
    uninterestPhoto,
    allCategory,
    categoryImage,
    interestCategory,
    uninterestCategory,
    getInterestList,
    deleteComment
};

export { actionCreators }

export default reducer;