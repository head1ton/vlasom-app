import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PhotoComments = props => (
    <div>
        <ul>
            <Comment username={props.user} comment={props.description} />
            {props.comments.map(comment => (
                <Comment username={comment.user.username} comment={comment.message} key={comment.id} />
            ))}
        </ul>
    </div>
);

const Comment = props => (
    <li>
        <span>{props.username}</span> <span>{props.comment}</span>
    </li>
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