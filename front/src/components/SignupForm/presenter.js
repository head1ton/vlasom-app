import React from 'react';
import PropTypes from 'prop-types';
import formStyles from 'common/formStyles.scss';

const SignupForm = props => (
    <form action="" method="post" className={formStyles.col12} onSubmit={props.handleSubmit}>
        <div className={formStyles.row}>
            <div className={`${formStyles.colMd8} ${formStyles.offsetMd2} ${formStyles.col12} ${formStyles.mt3}`}>
                <div className={formStyles.row} >
                    <div className={`${formStyles.colSm2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            ID
                        </div>
                    </div>
                    <div className={`${formStyles.colSm7} ${formStyles.col8} ${formStyles.px0}`}>
                        <input type="text" name="username" value={props.usernameValue} className={formStyles.inputBoxTopRightBottom} placeholder='ID' onChange={props.handleInputChange}></input>
                    </div>
                    <div className={`${formStyles.colSm3} ${formStyles.offsetSm0} ${formStyles.col10} ${formStyles.offset1} ${formStyles.pr0}`}>
                        <div className={formStyles.inputBoxAll}>
                            <img src={require('images/male-before.png')} alt="male" />
                            <img src={require('images/female-before.png')} alt="female" />
                        </div>
                    </div>
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
                    <div className={`${formStyles.colSm2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            NICK
                        </div>
                    </div>
                    <div className={`${formStyles.colSm10} ${formStyles.col8} ${formStyles.px0}`}>
                        <input type="text" name="nickname" value={props.nicknameValue} className={formStyles.inputBoxTopRightBottom} placeholder='nickname' onChange={props.handleInputChange}></input>
                    </div>
                </div>
                <div className={`${formStyles.row} ${formStyles.mt2}`}>
                    <div className={`${formStyles.colSm2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            EMAIL
                        </div>
                    </div>
                    <div className={`${formStyles.colSm10} ${formStyles.col8} ${formStyles.px0}`}>
                        <input type="email" name="email" value={props.emailValue} className={formStyles.inputBoxTopRightBottom} placeholder="email" onChange={props.handleInputChange}></input>
                    </div>
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
                                    <option>4165</option>
                                    <option>646564</option>
                                    <option>125436</option>
                                </select>
                            </div>
                            <div className={`${formStyles.col4} ${formStyles.px0}`}>
                                <select className={formStyles.inputBoxTopRightBottom} name="birthMonth" value={props.birthMonthValue} onChange={props.handleInputChange}>
                                    <option>4165</option>
                                    <option>f51</option>
                                </select>
                            </div>
                            <div className={`${formStyles.col4} ${formStyles.px0}`}>
                                <select className={formStyles.inputBoxTopRightBottom} name="birthDay" value={props.birthDayValue} onChange={props.handleInputChange}>
                                    <option>4165</option>
                                    <option>12</option>
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
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default SignupForm;