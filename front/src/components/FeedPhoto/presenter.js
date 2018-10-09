import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const FeedPhoto = (props, context) => {
    return <div className={styles.container}>hello!</div>
}

FeedPhoto.propTypes = {
    user: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            user: PropTypes.shape({
                profile_image: PropTypes.string,
                username: PropTypes.string.isRequired
            }).isRequired,
            message: PropTypes.string.isRequired
        })
    ).isRequired,
    created_at: PropTypes.string.isRequired
}

export default FeedPhoto;