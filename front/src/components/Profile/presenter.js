import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import UserProfile from 'components/UserProfile';

const Profile = props => (
    <div className={styles.container}>
    <div className={`${styles.textCenter} ${styles.mb3}`}>
        <p className={styles.titleText}>{props.user.nickname} 님의 프로필</p>
    </div>
    <UserProfile user={props.user} userInfo={true} userUpload={true} />
    </div>
)

Profile.propTypes = {
    user: PropTypes.shape({
        description: PropTypes.string,
        follower_count: PropTypes.number.isRequired,
        following_count: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        images: PropTypes.array,
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        post_count: PropTypes.number.isRequired,
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired,
        birth_year: PropTypes.string.isRequired,
        birth_month: PropTypes.string.isRequired,
        birth_day: PropTypes.string.isRequired,
        notification_count: PropTypes.number.isRequired
    })
}

export default Profile;