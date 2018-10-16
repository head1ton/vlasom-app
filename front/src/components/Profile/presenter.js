import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import UserProfile from 'components/UserProfile';

const Profile = props => (
    <div className={styles.container}>
    profile from profile
    <UserProfile user={props.user} />
    </div>
)

Profile.propTypes = {
    user: PropTypes.shape({
        description: PropTypes.string,
        follower_count: PropTypes.number.isRequired,
        following_count: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        images: PropTypes.array,
        name: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        post_count: PropTypes.number.isRequired,
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
    })
}

export default Profile;