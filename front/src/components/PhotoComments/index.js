import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PhotoComments = props => (
    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
        <Comment username={props.user} comment={props.description} />
        {props.comments.map(comment => (
            <Comment username={comment.user.username} comment={comment.message} key={comment.id} />
        ))}
    </div>
);

const Comment = props => (
    <div className={`${styles.col12} ${styles.commentBox}`}>
        <span className={styles.commentUsername}>{props.username}</span> <span className={styles.commentText}>{props.comment}</span>
    </div>
)

PhotoComments.propTypes = {
    description: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            user: PropTypes.shape({
                profile_image: PropTypes.string,
                username: PropTypes.string.isRequired
            }).isRequired,
            message: PropTypes.string.isRequired
        })
    ).isRequired,
}

export default PhotoComments;