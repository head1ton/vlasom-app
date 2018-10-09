import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import PhotoActions from 'components/PhotoActions';

const FeedPhoto = (props, context) => {
    return (
        <div className={styles.container}>
            <div className={styles.feedContainer}>
                <div className={styles.feedHeader}>
                    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                        <div className={`${styles.col1} ${styles.colSm1} ${styles.textCenter}`}>
                            <div className={styles.profileImg}>
                                <img src={props.user.profile_image || require('images/profile-red.png')} alt={props.user.username}></img>
                            </div>
                        </div>
                        <div className={`${styles.col9} ${styles.offset1} ${styles.colSm10} ${styles.offsetSm0}`}>
                            <p className={styles.feedProfileText}>{props.user.username}</p>
                            <p className={styles.feedText}>{props.location}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.feedBody}>
                    <div className={styles.row}>
                        <div className={`${styles.col12} ${styles.textCenter}`}>
                            <img src={props.image} alt={props.description}></img>
                        </div>
                    </div>
                    <div className={`${styles.row} ${styles.mt1} ${styles.px5}`}>
                        <div className={styles.col12}>
                            <PhotoActions number={props.like_count} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
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