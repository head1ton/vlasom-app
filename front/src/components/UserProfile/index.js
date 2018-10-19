import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import styles from './styles.scss';
import formStyles from 'common/formStyles.scss';
import ImageRow from 'components/ImageRow';

const UserProfile = props => {
    if(props.edit){
        return (
            <form action="" method="put" className={styles.container}> 
                <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                    <div className={`${styles.col12} ${styles.colMd4} ${styles.profileImage} ${styles.mt3}`}>
                        <img src={props.user.profile_image || require('images/profile-red.png')} alt={props.user.username}></img>
                    </div>
                    <div className={`${styles.col12} ${styles.colMd8} ${styles.mt3}`}>
                        <div className={`${styles.row} ${styles.mr0}`}>
                            <div className={`${styles.col3} ${styles.colSm3} ${styles.colLg2}`}>
                                <div className={formStyles.inputLabel}>
                                    ID
                                </div>
                            </div>
                            <div className={`${styles.col9} ${styles.colSm9} ${styles.colLg10} ${styles.px0}`}>
                                <div className={`${formStyles.inputBoxTopRightBottom} ${styles.readonly}`}>
                                    {props.user.username}
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.row} ${styles.mt2} ${styles.mr0}`}>
                            <div className={`${styles.col3} ${styles.colSm3} ${styles.colLg2}`}>
                                <div className={formStyles.inputLabel}>
                                    NAME
                                </div>
                            </div>
                            <div className={`${styles.col9} ${styles.colSm9} ${styles.colLg10} ${styles.px0}`}>
                                <div className={`${formStyles.inputBoxTopRightBottom} ${styles.readonly}`}>
                                    {props.user.name}
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.row} ${styles.mt2} ${styles.mr0}`}>
                            <div className={`${styles.col3} ${styles.colSm3} ${styles.colLg2}`}>
                                <div className={formStyles.inputLabel}>
                                    NICK
                                </div>
                            </div>
                            <div className={`${styles.col6} ${styles.colSm6} ${styles.colLg8} ${styles.px0}`}>
                                <input type='text' name='nickname' placeholder={props.user.nickname} value={props.nicknameValue} className={formStyles.inputBoxTopRightBottom} onChange={props.handleInputChange} />
                            </div>
                            <div className={`${styles.col3} ${styles.colSm3} ${styles.colLg2} ${styles.pr0} ${styles.textCenter}`} onClick={props.checkNickname}>
                                {props.is_duplicated_nickname ? 
                                <div className={formStyles.submitBtn}>
                                    <Ionicon icon='ios-checkmark' color="white" />
                                </div> : 
                                <div className={styles.checkComplete}>
                                    <Ionicon icon='ios-checkmark-circle-outline' color='white' />
                                </div>
                                }
                            </div>
                            {props.error_nickname !== "" ? 
                            <div className={`${styles.col10} ${styles.offset1}`}>
                                <p className={styles.errorText}>{props.error_nickname}</p>
                            </div>
                            : null}
                        </div>
                        <div className={`${styles.row} ${styles.mt2} ${styles.mr0}`}>
                            <div className={`${styles.col3} ${styles.colSm3} ${styles.colLg2}`}>
                                <div className={formStyles.inputLabel}>
                                    EMAIL
                                </div>
                            </div>
                            <div className={`${styles.col6} ${styles.colSm6} ${styles.colLg8} ${styles.px0}`}>
                                <input type='email' name='email' placeholder={props.user.email} value={props.emailValue} className={formStyles.inputBoxTopRightBottom} onChange={props.handleInputChange} />
                            </div>
                            <div className={`${styles.col3} ${styles.colSm3} ${styles.colLg2} ${styles.pr0} ${styles.textCenter}`} onClick={props.checkEmail}>
                                {props.is_duplicated_email ? 
                                <div className={formStyles.submitBtn}>
                                    <Ionicon icon='ios-checkmark' color="white" />
                                </div> : 
                                <div className={styles.checkComplete}>
                                    <Ionicon icon='ios-checkmark-circle-outline' color='white' />
                                </div>
                                }
                            </div>
                            {props.error_email !== "" ? 
                            <div className={`${styles.col10} ${styles.offset1}`}>
                                <p className={styles.errorText}>{props.error_email}</p>
                            </div>
                            : null}
                        </div>
                        <div className={`${styles.row} ${styles.mt2} ${styles.mr0}`}>
                            <div className={`${styles.col3} ${styles.colSm3} ${styles.colLg2}`}>
                                <div className={formStyles.inputLabel}>
                                    BIRTH
                                </div>
                            </div>
                            <div className={`${styles.col9} ${styles.colSm9} ${styles.colLg10} ${styles.px0}`}>
                                <div className={`${formStyles.inputBoxTopRightBottom} ${styles.readonly}`}>
                                    {props.user.birth_year} 년 {props.user.birth_month} 월 {props.user.birth_day} 일
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.col12} ${styles.mt3}`}>
                        <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.justifyContentCenter} ${styles.textCenter}`}>
                        <div className={`${styles.col4} ${styles.colSm2}`}>
                            <p className={styles.count}>{props.user.post_count}</p>
                            <p className={styles.countText}>게시글</p>
                        </div>
                        <div className={`${styles.col4} ${styles.colSm2}`}>
                            <p className={styles.count}>{props.user.follower_count}</p>
                            <p className={styles.countText}>follower</p>
                        </div>
                        <div className={`${styles.col4} ${styles.colSm2}`}>
                            <p className={styles.count}>{props.user.following_count}</p>
                            <p className={styles.countText}>following</p>
                        </div>
                        </div>
                    </div>
                    <div className={`${styles.col12} ${styles.mt3}`}>
                        <textarea className={styles.textBox} name="description" placeholder={props.user.description} value={props.descriptionValue} onChange={props.handleInputChange} />
                    </div>
                </div>
                <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.mt5}`}>
                    <input type="submit" className={formStyles.submitBtn} onClick={props.handleEndEdit} value="Edit" />
                </div>
            </form>
        )
    }
    else{
        return(
            <div className={styles.container}>
            {props.userInfo ? 
                <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                    <div className={`${styles.col12} ${styles.colMd4} ${styles.profileImage} ${styles.mt3}`}>
                        <img src={props.user.profile_image || require('images/profile-red.png')} alt={props.user.username}></img>
                    </div>
                    <div className={`${styles.col12} ${styles.colMd8} ${styles.mt3}`}>
                        <div className={`${styles.row} ${styles.mr0}`}>
                            <div className={`${styles.col3} ${styles.colSm3} ${styles.colLg2}`}>
                                <div className={formStyles.inputLabel}>
                                    ID
                                </div>
                            </div>
                            <div className={`${styles.col9} ${styles.colSm9} ${styles.colLg10} ${styles.px0}`}>
                                <div className={formStyles.inputBoxTopRightBottom}>
                                    {props.user.username}
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.row} ${styles.mt2} ${styles.mr0}`}>
                            <div className={`${styles.col3} ${styles.colSm3} ${styles.colLg2}`}>
                                <div className={formStyles.inputLabel}>
                                    NAME
                                </div>
                            </div>
                            <div className={`${styles.col9} ${styles.colSm9} ${styles.colLg10} ${styles.px0}`}>
                                <div className={formStyles.inputBoxTopRightBottom}>
                                    {props.user.name}
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.row} ${styles.mt2} ${styles.mr0}`}>
                            <div className={`${styles.col3} ${styles.colSm3} ${styles.colLg2}`}>
                                <div className={formStyles.inputLabel}>
                                    NICK
                                </div>
                            </div>
                            <div className={`${styles.col9} ${styles.colSm9} ${styles.colLg10} ${styles.px0}`}>
                                <div className={formStyles.inputBoxTopRightBottom}>
                                    {props.user.nickname}
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.row} ${styles.mt2} ${styles.mr0}`}>
                            <div className={`${styles.col3} ${styles.colSm3} ${styles.colLg2}`}>
                                <div className={formStyles.inputLabel}>
                                    EMAIL
                                </div>
                            </div>
                            <div className={`${styles.col9} ${styles.colSm9} ${styles.colLg10} ${styles.px0}`}>
                                <div className={formStyles.inputBoxTopRightBottom}>
                                    {props.user.email}
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.row} ${styles.mt2} ${styles.mr0}`}>
                            <div className={`${styles.col3} ${styles.colSm3} ${styles.colLg2}`}>
                                <div className={formStyles.inputLabel}>
                                    BIRTH
                                </div>
                            </div>
                            <div className={`${styles.col9} ${styles.colSm9} ${styles.colLg10} ${styles.px0}`}>
                                <div className={formStyles.inputBoxTopRightBottom}>
                                    {props.user.birth_year} 년 {props.user.birth_month} 월 {props.user.birth_day} 일
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.col12} ${styles.mt3}`}>
                        <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.justifyContentCenter} ${styles.textCenter}`}>
                        <div className={`${styles.col4} ${styles.colSm2}`}>
                            <p className={styles.count}>{props.user.post_count}</p>
                            <p className={styles.countText}>게시글</p>
                        </div>
                        <div className={`${styles.col4} ${styles.colSm2}`}>
                            <p className={styles.count}>{props.user.follower_count}</p>
                            <p className={styles.countText}>follower</p>
                        </div>
                        <div className={`${styles.col4} ${styles.colSm2}`}>
                            <p className={styles.count}>{props.user.following_count}</p>
                            <p className={styles.countText}>following</p>
                        </div>
                        </div>
                    </div>
                    <div className={`${styles.col12} ${styles.mt3}`}>
                        <div className={styles.textBox}>
                            {props.user.description ? props.user.description : <p className={styles.textCenter}>아직 소개글이 없습니다.</p> }
                        </div>
                    </div>
                </div> : null }
                {props.userUpload ? 
                <div className={`${styles.col12}`}>
                <p className={styles.titleText}>{props.user.username} 님이 업로드한 게시물</p>
                    {props.user.images.length > 0 ? 
                    <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.mt3}`}>
                    {props.user.images.map(image => <ImageRow image={image} key={image.id} />)}
                    </div> : 
                    <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.mt3} ${styles.textCenter}`}>
                        <div className={styles.col12}>
                            <p>업로드한 게시물이 없습니다.</p>
                        </div>
                    </div>}
                </div> : null }
            </div>
        )
    }
};

UserProfile.propTypes = {
    edit: PropTypes.bool,
    user: PropTypes.shape({
        description: PropTypes.string,
        follower_count: PropTypes.number.isRequired,
        following_count: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        images: PropTypes.array,
        name: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        post_count: PropTypes.number.isRequired,
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired,
        birth_year: PropTypes.string.isRequired,
        birth_month: PropTypes.string.isRequired,
        birth_day: PropTypes.string.isRequired
    }).isRequired,
    userInfo: PropTypes.bool.isRequired,
    userUpload: PropTypes.bool.isRequired,
    handleEndEdit: PropTypes.func,
    handleInputChange: PropTypes.func,
    nicknameValue: PropTypes.string,
    emailValue: PropTypes.string,
    descriptionValue: PropTypes.string,
    is_duplicated_nickname: PropTypes.bool,
    is_duplicated_email: PropTypes.bool,
    checkNickname: PropTypes.func,
    checkEmail: PropTypes.func,
    error_nickname: PropTypes.string,
    error_email: PropTypes.string
}

export default UserProfile;