import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import styles from './styles.scss';

const PhotoComments = props => (
    <div>
        <Comment username={props.user} comment={props.description} is_mine={true} />
        {props.comments.map(comment => ( 
            <span>
                {comment === null ? null :
                    <Comment username={comment.user.username} user={comment.user} photoId={props.photoId} is_mine={false} loginUser={props.loginUser} comment={comment.message} commentId={comment.id} key={comment.id} deleteComment={props.deleteComment} />
                }
            </span>
        ))}
    </div>
);

const Comment = props => {
    if(props.is_mine){
        return(
            <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                <div className={`${styles.col12} ${styles.commentBox}`}>
                    <span className={styles.commentUsername}>{props.username}</span> <span className={styles.commentText}>{props.comment}</span>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                <div className={`${styles.col10} ${styles.colSm11} ${styles.commentBox}`}>
                    <span className={styles.commentUsername}>{props.username}</span> <span className={styles.commentText}>{props.comment}</span>
                </div>
                {props.loginUser.id === props.user.id ? 
                <div className={`${styles.col1} ${styles.colSm1} ${styles.commentBox}`}>
                    <span className={`${styles.commentText} ${styles.close}`} onClick={() => props.deleteComment(props.commentId)}><Ionicon icon='ios-close' /></span>
                </div>: null}
            </div>
        )
    }
}

PhotoComments.propTypes = {
    description: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    photoId: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            user: PropTypes.shape({
                profile_image: PropTypes.string,
                username: PropTypes.string.isRequired
            }).isRequired,
            message: PropTypes.string.isRequired
        })
    ).isRequired,
    deleteComment: PropTypes.func.isRequired,
    loginUser: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        images: PropTypes.array,
        email: PropTypes.string.isRequired,
        profile_image: PropTypes.string,
        description: PropTypes.string,
        follower_count: PropTypes.number.isRequired,
        following_count: PropTypes.number.isRequired,
        post_count: PropTypes.number.isRequired,
        birth_year: PropTypes.string.isRequired,
        birth_month: PropTypes.string.isRequired,
        birth_day: PropTypes.string.isRequired,
        notification_count: PropTypes.number.isRequired
    })
}

export default PhotoComments;