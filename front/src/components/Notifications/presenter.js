import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';

const Notifications = props => {
    if(props.loading){
        return <LoadingNotifications />
    }
    else if(props.notifications){
        return <RenderNotifications notifications={props.notifications} />
    }
};

const LoadingNotifications = props => (
    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
        <div className={`${styles.col12} ${styles.row} ${styles.feed} ${styles.alignItemsCenter}`}>
            <Loading />
        </div>
    </div>
);

const RenderNotifications = props => (
    <div className={styles.container}>
        <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.justifyContentCenter}`}>
            {props.notifications.map(notification => (
                <div className={notification.is_viewed ? `${styles.col12} ${styles.notificationBox}` : `${styles.col12} ${styles.notificationBoxGrey}`}>
                    <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.mx0}`}>
                        <div className={`${styles.col2} ${styles.colSm2} ${styles.colMd2}${styles.colLg2}`}>
                            <div className={styles.profileImg}>
                                <img src={notification.from_user.profile_image || require('images/profile-red.png')} alt={notification.from_user.username}></img>
                            </div>
                        </div>
                        <div className={`${styles.col8}`}>
                        {notification.notification_type === 'like' ?
                            <span className={styles.notificationText}>
                                <span className={styles.textBold}>{notification.from_user.nickname}</span> 님이 회원님의 사진을 좋아합니다.
                            </span>
                        : null}
                        {notification.notification_type === 'comment' ? 
                            <span className={styles.notificationText}>
                                <span className={styles.textBold}>{notification.from_user.nickname}</span> 님의 회원님의 사진에 댓글을 남겼습니다.<br/>
                                <span className={styles.message}>"{notification.comment}"</span>
                            </span>
                        : null}
                        {notification.notification_type === 'follow' ?
                            <span className={styles.notificationText}>
                                <span className={styles.textBold}>{notification.from_user.nickname}</span> 님이 회원님을 팔로우 합니다.
                            </span>
                        : null}
                        {notification.notification_type === 'interest' ? 
                            <span className={styles.notificationText}>
                                {notification.category ? 
                                <span>회원님이 <span className={styles.textBold}>{notification.category.name}</span>을 관심등록 하였습니다.</span>
                                 :<span><span className={styles.textBold}>{notification.from_user.nickname}</span> 님이 회원님의 사진을 관심등록 하였습니다. </span> }
                            </span>
                        : null}
                        </div>
                        <div className={`${styles.col2}`}>
                        {notification.notification_type === 'like' ?
                            <img className={`${styles.notificationImg}`} src={notification.image.image} alt={notification.from_user.username}></img>
                        : null }
                        {notification.notification_type === 'comment' ? 
                            <img className={`${styles.notificationImg}`} src={notification.image.image} alt={notification.from_user.username}></img>
                        :null}
                        {notification.notification_type === 'interest' ? 
                            <span className={styles.notificationText}>
                                {notification.category ? 
                                null
                                 :<img className={`${styles.notificationImg}`} src={notification.image.image} alt={notification.from_user.username}></img> }
                            </span>
                        : null}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

Notifications.propTypes = {
    notifications: PropTypes.array,
    loading: PropTypes.bool.isRequired
}

RenderNotifications.propTypes = {
    notifications: PropTypes.array
}

export default Notifications;