import React from 'react';
import Ionicons from 'react-ionicons';
import styles from './styles.scss';

export const LoginForm = props => (
    <form action="" method="post" className={styles.col12}>
        <div className={styles.row}>
            <div className={`${styles.colLg5} ${styles.offsetLg3} ${styles.colMd6} ${styles.offsetMd2} ${styles.colSm7} ${styles.offsetSm1} ${styles.col10} ${styles.mt3}`}>
                <div className={styles.row}>
                    <div className={styles.col3}>
                        <div className={styles.inputLabel}>
                            <img className={styles.imgUsername} src={require('images/nav-nickname.png')} alt="username" />
                        </div>
                    </div>
                    <div className={`${styles.col9} ${styles.px0}`}>
                        <input type="text" className={`${styles.inputBoxTopBottom} `}></input>
                    </div>
                </div>
                <div className={`${styles.row} ${styles.mt3}`}>
                    <div className={styles.col3}>
                        <div className={styles.inputLabel}>
                        <img className={styles.imgPw} src={require('images/login-pw.png')} alt="username" />
                        </div>
                    </div>
                    <div className={`${styles.col9} ${styles.px0}`}>
                        <input type="password" className={styles.inputBoxTopBottom}></input>
                    </div>
                </div>
            </div>
            <div className={`${styles.colLg1} ${styles.colMd2} ${styles.col2} ${styles.mt3}`}>
                <input type="submit" className={styles.inputBtn} value="Go" />
            </div>
        </div>
        <div className={`${styles.row} ${styles.marginTop30} ${styles.justifyContentCenter}`}>
            <div className={`${styles.borderTopBottom} ${styles.mt5}`}>
            Login with<br/><br/>
            <Ionicons icon="logo-facebook" fontSize="50px" color="#4267b2" />
            </div>
        </div>
    </form>
);

export const SignupForm = props => (
    <form action="" method="post" className={styles.col12}>
        <div className={styles.row}>
            <div className={`${styles.colMd8} ${styles.offsetMd2} ${styles.col12} ${styles.mt3}`}>
                <div className={styles.row} >
                    <div className={`${styles.colSm2} ${styles.col3}`}>
                        <div className={styles.inputLabel}>
                            ID
                        </div>
                    </div>
                    <div className={`${styles.colSm7} ${styles.col8} ${styles.px0}`}>
                        <input type="text" name="username" className={styles.inputBoxTopRightBottom}></input>
                    </div>
                    <div className={`${styles.colSm3} ${styles.offsetSm0} ${styles.col10} ${styles.offset1} ${styles.pr0}`}>
                        <div className={styles.inputBoxAll}>
                            <img src={require('images/male-before.png')} alt="male" />
                            <img src={require('images/female-before.png')} alt="female" />
                        </div>
                    </div>
                </div>
                <div className={`${styles.row} ${styles.mt2}`}>
                    <div className={`${styles.colSm2} ${styles.col3}`}>
                        <div className={styles.inputLabel}>
                            PW1
                        </div>
                    </div>
                    <div className={`${styles.colSm10} ${styles.col8} ${styles.px0}`}>
                        <input type="password" name="password1" className={styles.inputBoxTopRightBottom}></input>
                    </div>
                </div>
                <div className={`${styles.row} ${styles.mt2}`}>
                    <div className={`${styles.colSm2} ${styles.col3}`}>
                        <div className={styles.inputLabel}>
                            PW2
                        </div>
                    </div>
                    <div className={`${styles.colSm10} ${styles.col8} ${styles.px0}`}>
                        <input type="password" name="password2" className={styles.inputBoxTopRightBottom}></input>
                    </div>
                </div>
                <div className={`${styles.row} ${styles.mt2}`}>
                    <div className={`${styles.colSm2} ${styles.col3}`}>
                        <div className={styles.inputLabel}>
                            NAME
                        </div>
                    </div>
                    <div className={`${styles.colSm10} ${styles.col8} ${styles.px0}`}>
                        <input type="text" name="name" className={styles.inputBoxTopRightBottom}></input>
                    </div>
                </div>
                <div className={`${styles.row} ${styles.mt2}`}>
                    <div className={`${styles.colSm2} ${styles.col3}`}>
                        <div className={styles.inputLabel}>
                            NICK
                        </div>
                    </div>
                    <div className={`${styles.colSm10} ${styles.col8} ${styles.px0}`}>
                        <input type="text" name="nickname" className={styles.inputBoxTopRightBottom}></input>
                    </div>
                </div>
                <div className={`${styles.row} ${styles.mt2}`}>
                    <div className={`${styles.colSm2} ${styles.col3}`}>
                        <div className={styles.inputLabel}>
                            EMAIL
                        </div>
                    </div>
                    <div className={`${styles.colSm10} ${styles.col8} ${styles.px0}`}>
                        <input type="email" name="email" className={styles.inputBoxTopRightBottom}></input>
                    </div>
                </div>
                <div className={`${styles.row} ${styles.mt2}`}>
                    <div className={`${styles.colSm2} ${styles.col3}`}>
                        <div className={styles.inputLabel}>
                            BIRTH
                        </div>
                    </div>
                    <div className={`${styles.colSm10} ${styles.col8} ${styles.px0}`}>
                        <div className={`${styles.row} ${styles.mx0} ${styles.px0}`}>
                            <div className={`${styles.col4} ${styles.px0}`}>
                                <select className={styles.inputBoxTopRightBottom} name="birth_year">
                                    <option>4165</option>
                                </select>
                            </div>
                            <div className={`${styles.col4} ${styles.px0}`}>
                                <select className={styles.inputBoxTopRightBottom} name="birth_month">
                                    <option>4165</option>
                                </select>
                            </div>
                            <div className={`${styles.col4} ${styles.px0}`}>
                                <select className={styles.inputBoxTopRightBottom} name="birth_day">
                                    <option>4165</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.mt5}`}>
            <input type="submit" className={`${styles.marginTop20} ${styles.submitBtn}`} value="Join"></input>
        </div>
    </form>
);