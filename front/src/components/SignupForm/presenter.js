import React from 'react';
import formStyles from 'common/formStyles.scss';

export const SignupForm = props => (
    <form action="" method="post" className={formStyles.col12}>
        <div className={formStyles.row}>
            <div className={`${formStyles.colMd8} ${formStyles.offsetMd2} ${formStyles.col12} ${formStyles.mt3}`}>
                <div className={formStyles.row} >
                    <div className={`${formStyles.colSm2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            ID
                        </div>
                    </div>
                    <div className={`${formStyles.colSm7} ${formStyles.col8} ${formStyles.px0}`}>
                        <input type="text" name="username" className={formStyles.inputBoxTopRightBottom} placeholder='ID'></input>
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
                        <input type="password" name="password1" className={formStyles.inputBoxTopRightBottom} placeholder='password'></input>
                    </div>
                </div>
                <div className={`${formStyles.row} ${formStyles.mt2}`}>
                    <div className={`${formStyles.colSm2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            PW2
                        </div>
                    </div>
                    <div className={`${formStyles.colSm10} ${formStyles.col8} ${formStyles.px0}`}>
                        <input type="password" name="password2" className={formStyles.inputBoxTopRightBottom} placeholder='password confirm'></input>
                    </div>
                </div>
                <div className={`${formStyles.row} ${formStyles.mt2}`}>
                    <div className={`${formStyles.colSm2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            NAME
                        </div>
                    </div>
                    <div className={`${formStyles.colSm10} ${formStyles.col8} ${formStyles.px0}`}>
                        <input type="text" name="name" className={formStyles.inputBoxTopRightBottom} placeholder='name'></input>
                    </div>
                </div>
                <div className={`${formStyles.row} ${formStyles.mt2}`}>
                    <div className={`${formStyles.colSm2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            NICK
                        </div>
                    </div>
                    <div className={`${formStyles.colSm10} ${formStyles.col8} ${formStyles.px0}`}>
                        <input type="text" name="nickname" className={formStyles.inputBoxTopRightBottom} placeholder='nickname'></input>
                    </div>
                </div>
                <div className={`${formStyles.row} ${formStyles.mt2}`}>
                    <div className={`${formStyles.colSm2} ${formStyles.col3}`}>
                        <div className={formStyles.inputLabel}>
                            EMAIL
                        </div>
                    </div>
                    <div className={`${formStyles.colSm10} ${formStyles.col8} ${formStyles.px0}`}>
                        <input type="email" name="email" className={formStyles.inputBoxTopRightBottom} placeholder='email'></input>
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
                                <select className={formStyles.inputBoxTopRightBottom} name="birth_year">
                                    <option>4165</option>
                                </select>
                            </div>
                            <div className={`${formStyles.col4} ${formStyles.px0}`}>
                                <select className={formStyles.inputBoxTopRightBottom} name="birth_month">
                                    <option>4165</option>
                                </select>
                            </div>
                            <div className={`${formStyles.col4} ${formStyles.px0}`}>
                                <select className={formStyles.inputBoxTopRightBottom} name="birth_day">
                                    <option>4165</option>
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

export default SignupForm;