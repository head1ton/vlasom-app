import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import { Link, Redirect } from 'react-router-dom';
import styles from './styles.scss';
import formStyles from 'common/formStyles.scss';

const PasswordChange = props => (
    <div className={styles.container}>
    {props.change_complete && <Redirect to='/my/profile/' />}
        <div className={`${styles.textCenter} ${styles.mb3} ${styles.row} ${styles.alignItemsCenter}`}>
            <div className={`${styles.col8} ${styles.offset2} ${styles.colMd4} ${styles.offsetMd4}`}>
                <p className={styles.titleText}>{props.user.nickname} 님의 프로필 </p>
            </div>
            <div className={`${styles.col1} ${styles.edit}`}>
                <Link to='/my/profile/' style={{textDecoration: 'none'}} >
                    <Ionicon icon="ios-close" color="black" fontSize="30px" />
                </Link>
            </div>
        </div>
        <form action="" method="put" className={styles.container}> 
            <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                <div className={`${styles.col12} ${styles.colMd4} ${styles.profileImage} ${styles.mt3}`}>
                    <img src={props.user.profile_image || require('images/profile-red.png')} alt={props.user.username}></img>
                </div>
                <div className={`${styles.col12} ${styles.colMd8} ${styles.mt3}`}>
                    <div className={`${styles.row} ${styles.mr0}`}>
                        <div className={`${styles.col4} ${styles.colSm4} ${styles.colLg3}`}>
                            <div className={formStyles.inputLabel}>
                                Before
                            </div>
                        </div>
                        <div className={`${styles.col8} ${styles.colSm8} ${styles.colLg9} ${styles.px0}`}>
                            <input type='password' name='current_password' value={props.currentPasswordValue} className={`${formStyles.inputBoxTopRightBottom}`} onChange={props.handleInputChange} />
                        </div>
                    </div>
                    <div className={`${styles.row} ${styles.mr0} ${styles.mt2}`}>
                        {props.current_password_error !== "" ?
                        <div className={`${styles.col10} ${styles.offset1}`}>
                            <p className={styles.errorText}>
                                {props.current_password_error}
                            </p>
                        </div> : null}
                    </div>
                    <div className={`${styles.row} ${styles.mr0} ${styles.mt2}`}>
                        <div className={`${styles.col4} ${styles.colSm4} ${styles.colLg3}`}>
                            <div className={formStyles.inputLabel}>
                                New 1
                            </div>
                        </div>
                        <div className={`${styles.col8} ${styles.colSm8} ${styles.colLg9} ${styles.px0}`}>
                            <input type='password' name='new_password1' value={props.newPassword1} className={`${formStyles.inputBoxTopRightBottom}`} onChange={props.handleInputChange} />
                        </div>
                    </div>
                    <div className={`${styles.row} ${styles.mr0} ${styles.mt2}`}>
                        <div className={`${styles.col4} ${styles.colSm4} ${styles.colLg3}`}>
                            <div className={formStyles.inputLabel}>
                                New 2
                            </div>
                        </div>
                        <div className={`${styles.col8} ${styles.colSm8} ${styles.colLg9} ${styles.px0}`}>
                            <input type='password' name='new_password' value={props.newPassword} className={`${formStyles.inputBoxTopRightBottom}`} onChange={props.handleInputChange} />
                        </div>
                    </div>
                    <div className={`${styles.row} ${styles.mr0} ${styles.mt2}`}>
                        {props.new_password_error !== "" ?
                        <div className={`${styles.col10} ${styles.offset1}`}>
                            <p className={styles.errorText}>
                                {props.new_password_error}
                            </p>
                        </div> : null}
                    </div>
                </div>
            </div>
            <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.mt5}`}>
                <input type="submit" className={formStyles.submitBtn} onClick={props.handleSubmit} value="Edit" />
            </div>
        </form>
    </div>
);

PasswordChange.propTypes = {
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
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    currendPasswordValue: PropTypes.string,
    newPassword1: PropTypes.string,
    newPassword: PropTypes.string,
    check_current: PropTypes.bool.isRequired,
    check_new: PropTypes.bool.isRequired,
    new_password_error: PropTypes.string.isRequired,
    current_password_error: PropTypes.string.isRequired,
    change_complete: PropTypes.bool
}

export default PasswordChange;