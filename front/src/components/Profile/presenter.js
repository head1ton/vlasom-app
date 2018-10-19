import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import UserProfile from 'components/UserProfile';

const Profile = props => (
    <div className={styles.container}>
        <div className={`${styles.textCenter} ${styles.mb3} ${styles.row} ${styles.alignItemsCenter}`}>
            <div className={`${styles.col8} ${styles.offset2} ${styles.colMd4} ${styles.offsetMd4}`}>
                <p className={styles.titleText}>{props.user.nickname} 님의 프로필 </p>
            </div>
            <div className={`${styles.col1} ${styles.edit}`}>
                <Link to='/my/profile/change/' style={{textDecoration: 'none'}} >
                    <Ionicon icon="ios-create-outline" color="black" fontSize="30px" />
                </Link>
            </div>
        </div>
        <UserProfile 
        user={props.user} 
        userInfo={true} 
        userUpload={true} 
        edit={false} 
        handleEndEdit={props.handleEndEdit} 
        handleInputChange={props.handleInputChange}
        nicknameValue={props.nicknameValue} 
        emailValue={props.emailValue} 
        descriptionValue={props.descriptionValue} 
        is_duplicated_nickname={props.is_duplicated_nickname} 
        is_duplicated_email={props.is_duplicated_email} 
        checkNickname={props.checkNickname} 
        checkEmail={props.checkEmail} 
        />
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