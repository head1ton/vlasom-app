import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import styles from './styles.scss';
import UserProfile from 'components/UserProfile';

const Profile = props => (
    <div className={styles.container}>
        <div className={`${styles.textCenter} ${styles.mb3} ${styles.row} ${styles.alignItemsCenter}`}>
            <div className={`${styles.col8} ${styles.offset2} ${styles.colMd4} ${styles.offsetMd4}`}>
                <p className={styles.titleText}>{props.user.nickname} 님의 프로필 </p>
            </div>
            {props.edit ? 
            null
                :
            <div className={`${styles.col1} ${styles.edit}`} onClick={props.handleStartEdit}>
                <Ionicon icon="ios-create-outline" color="black" fontSize="30px" />
            </div>}
        </div>
        <UserProfile 
        user={props.user} 
        userInfo={true} 
        userUpload={true} 
        edit={props.edit} 
        handleEndEdit={props.handleEndEdit} 
        handleInputChange={props.handleInputChange}
        nicknameValue={props.nicknameValue} 
        emailValue={props.emailValue} 
        descriptionValue={props.descriptionValue} 
        />
    </div>
)

Profile.propTypes = {
    edit: PropTypes.bool.isRequired,
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
    }),
    handleStartEdit: PropTypes.func.isRequired,
    handleEndEdit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    nicknameValue: PropTypes.string.isRequired,
    emailValue: PropTypes.string.isRequired,
    descriptionValue: PropTypes.string.isRequired
}

export default Profile;