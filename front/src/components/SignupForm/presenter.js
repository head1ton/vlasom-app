import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import formStyles from 'common/formStyles.scss';
import styles from './styles.scss';

const SignupForm = props => (
    <form action="" method="post" className={formStyles.col12} onSubmit={props.handleSubmit}>
        <div className={formStyles.row}>
            <div className={`${formStyles.colMd8} ${formStyles.offsetMd2} ${formStyles.col12} ${formStyles.mt3}`}>
                <div className={formStyles.row} >
                    <div className={`${formStyles.colSm2} ${formStyles.colLg2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            ID
                        </div>
                    </div>
                    <div className={`${formStyles.colSm4} ${formStyles.colLg5} ${formStyles.col5} ${formStyles.px0}`}>
                        <input type="text" name="username" value={props.usernameValue} className={formStyles.inputBoxTopRightBottom} placeholder='ID' onChange={props.handleInputChange}></input>
                    </div>
                    <div className={`${styles.col3} ${styles.colSm3} ${styles.colLg2} ${styles.pr0} ${styles.textCenter}`} onClick={props.checkUsername}>
                        {props.is_duplicated_nickname ? 
                        <div className={formStyles.submitBtn}>
                            <Ionicon icon='ios-checkmark' color="white" />
                        </div> : 
                        <div className={styles.checkComplete}>
                            <Ionicon icon='ios-checkmark-circle-outline' color='white' />
                        </div>
                        }
                    </div>
                    <div className={`${formStyles.colSm3} ${formStyles.offsetSm0} ${formStyles.col10} ${formStyles.offset1} ${formStyles.pr0}`}>
                        <div className={formStyles.inputBoxAll}>
                            <label htmlFor="gender_male"><img src={props.genderValue === 'male' ? require('images/male.png') : require('images/male-before.png')} alt="male" /></label>
                            <input type='radio' name='gender' id="gender_male" value='male' onChange={props.handleInputChange} />
                            <label htmlFor='gender_female'><img src={props.genderValue === 'female' ? require('images/female.png') : require('images/female-before.png')} alt="female" /></label>
                            <input type='radio' name='gender' id='gender_female' value='female' onChange={props.handleInputChange} />
                        </div>
                    </div>
                    {props.error_username !== "" ? 
                    <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.textCenter}`}>
                        <div className={`${styles.col10}`}>
                            <p className={styles.errorText}>{props.error_username}</p>
                        </div>
                    </div>
                    : null}
                </div>
                <div className={`${formStyles.row} ${formStyles.mt2}`}>
                    <div className={`${formStyles.colSm2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            PW1
                        </div>
                    </div>
                    <div className={`${formStyles.colSm10} ${formStyles.col8} ${formStyles.px0}`}>
                        <input type="password" name="password1" value={props.password1Value} className={formStyles.inputBoxTopRightBottom} placeholder='password' onChange={props.handleInputChange}></input>
                    </div>
                </div>
                <div className={`${formStyles.row} ${formStyles.mt2}`}>
                    <div className={`${formStyles.colSm2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            PW2
                        </div>
                    </div>
                    <div className={`${formStyles.colSm10} ${formStyles.col8} ${formStyles.px0}`}>
                        <input type="password" name="password2" value={props.password2Value} className={formStyles.inputBoxTopRightBottom} placeholder='password confirm' onChange={props.handleInputChange}></input>
                    </div>
                </div>
                <div className={`${formStyles.row} ${formStyles.mt2}`}>
                    <div className={`${formStyles.colSm2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            NAME
                        </div>
                    </div>
                    <div className={`${formStyles.colSm10} ${formStyles.col8} ${formStyles.px0}`}>
                        <input type="text" name="name" value={props.nameValue} className={formStyles.inputBoxTopRightBottom} placeholder='name' onChange={props.handleInputChange}></input>
                    </div>
                </div>
                <div className={`${formStyles.row} ${formStyles.mt2}`}>
                    <div className={`${formStyles.colSm2} ${formStyles.colLg2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            NICK
                        </div>
                    </div>
                    <div className={`${formStyles.colSm7} ${formStyles.colLg8} ${formStyles.col5} ${formStyles.px0}`}>
                        <input type="text" name="nickname" value={props.nicknameValue} className={formStyles.inputBoxTopRightBottom} placeholder='nickname' onChange={props.handleInputChange}></input>
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
                    <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.textCenter}`}>
                        <div className={`${styles.col10}`}>
                            <p className={styles.errorText}>{props.error_nickname}</p>
                        </div>
                    </div>
                    : null}
                </div>
                <div className={`${formStyles.row} ${formStyles.mt2}`}>
                    <div className={`${formStyles.colSm2} ${formStyles.colLg2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            EMAIL
                        </div>
                    </div>
                    <div className={`${formStyles.colSm7} ${formStyles.colLg8} ${formStyles.col5} ${formStyles.px0}`}>
                        <input type="email" name="email" value={props.emailValue} className={formStyles.inputBoxTopRightBottom} placeholder="email" onChange={props.handleInputChange}></input>
                    </div>
                    <div className={`${styles.col3} ${styles.colSm3} ${styles.colLg2} ${styles.pr0} ${styles.textCenter}`} onClick={props.checkEmail}>
                        {props.is_duplicated_nickname ? 
                        <div className={formStyles.submitBtn}>
                            <Ionicon icon='ios-checkmark' color="white" />
                        </div> : 
                        <div className={styles.checkComplete}>
                            <Ionicon icon='ios-checkmark-circle-outline' color='white' />
                        </div>
                        }
                    </div>
                    {props.error_email !== "" ? 
                    <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.textCenter}`}>
                        <div className={`${styles.col10}`}>
                            <p className={styles.errorText}>{props.error_email}</p>
                        </div>
                    </div>
                    : null}
                </div>
                <div className={`${formStyles.row} ${formStyles.mt2}`}>
                    <div className={`${formStyles.colSm2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            BIRTH
                        </div>
                    </div>
                    <div className={`${formStyles.colSm10} ${formStyles.col8} ${formStyles.px0}`}>
                        <div className={`${formStyles.row} ${formStyles.mx0} ${formStyles.px0}`}>
                            <div className={`${formStyles.col4} ${formStyles.px0}`}>
                                <select className={formStyles.inputBoxTopRightBottom} name="birthYear" value={props.birthYearValue} onChange={props.handleInputChange}>
                                    <option>2018</option>
                                    <option>2017</option>
                                    <option>2016</option>
                                </select>
                            </div>
                            <div className={`${formStyles.col4} ${formStyles.px0}`}>
                                <select className={formStyles.inputBoxTopRightBottom} name="birthMonth" value={props.birthMonthValue} onChange={props.handleInputChange}>
                                    <option>01</option>
                                    <option>02</option>
                                </select>
                            </div>
                            <div className={`${formStyles.col4} ${formStyles.px0}`}>
                                <select className={formStyles.inputBoxTopRightBottom} name="birthDay" value={props.birthDayValue} onChange={props.handleInputChange}>
                                    <option>01</option>
                                    <option>02</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${formStyles.row} ${formStyles.justifyContentCenter} ${formStyles.mt5}`}>
            <input type="submit" className={`${formStyles.marginTop20} ${formStyles.submitBtn}`} value="Join"></input>
        </div>
        {props.error_submit !== "" ? 
        <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.mt3}`}>
            <div className={`${styles.col10} ${styles.textCenter}`}>
                <p className={styles.errorText}>{props.error_submit}</p>
            </div>
        </div>
        : null}
    </form>
);

SignupForm.propTyeps = {
    usernameValue: PropTypes.string.isRequired,
    password1Value: PropTypes.string.isRequired,
    password2Value: PropTypes.string.isRequired,
    nameValue: PropTypes.string.isRequired,
    nicknameValue: PropTypes.string.isRequired,
    emailValue: PropTypes.string.isRequired,
    birthYearValue: PropTypes.string.isRequired,
    birthMonthValue: PropTypes.string.isRequired,
    birthDayValue: PropTypes.string.isRequired,
    genderValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    checkNickname: PropTypes.func.isRequired,
    checkEmail: PropTypes.func.isRequired,
    checkUsername: PropTypes.func.isRequired,
    error_nickname: PropTypes.string.isRequired,
    error_email: PropTypes.string.isRequired,
    error_username: PropTypes.string.isRequired,
    error_submit: PropTypes.string.isRequired
}

export default SignupForm;