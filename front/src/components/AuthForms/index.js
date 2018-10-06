import React from 'react';
import styles from './styles.scss';

export const LoginForm = props => (
    <form action="" method="post">
        <div className={styles.row}>
            <div className={styles.column}>
                <div className={styles.row}>
                    <div className={styles.inputLabel}>
                        <img className={styles.imgUsername} src={require('images/nav-nickname.png')} alt="username" />
                    </div>
                    <input type="text" className={styles.inputBoxTopBottom}></input>
                </div>
                <div className={`${styles.row} ${styles.marginTop10}`}>
                    <div className={styles.inputLabel}>
                        <img className={styles.imgPw} src={require('images/login-pw.png')} alt="username" />
                    </div>
                    <input type="password" className={styles.inputBoxTopBottom}></input>
                </div>
            </div>
            <div className={styles.column}>
                <input type="submit" className={styles.inputBtn} value="Login" />
            </div>
        </div>
        <div className={`${styles.row} ${styles.marginTop30}`}>
            <div className={`${styles.borderTopBottom} ${styles.marginTop10}`}>
            Login with<br/>
            <img src={require('images/facebook.png')} />
            </div>
        </div>
    </form>
);

export const SignupForm = props => (
    <form action="" method="post">
        <div className={styles.row}>
            <div className={styles.inputLabelText}>
                ID
            </div>
            <input type="text" name="username" className={styles.inputBoxTopRightBottom}></input>
            <div className={styles.inputBoxAllSm}>
                <img src={require('images/male-before.png')} alt="male" />
                <img src={require('images/female-before.png')} alt="female" />
            </div>
        </div>
        <div className={`${styles.row} ${styles.marginTop10}`}>
            <div className={styles.inputLabelText}>
                PW1
            </div>
            <input type="password" name="password1" className={styles.inputBoxTopRightBottomLg}></input>
        </div>
        <div className={`${styles.row} ${styles.marginTop10}`}>
            <div className={styles.inputLabelText}>
                PW2
            </div>
            <input type="password" name="password2" className={styles.inputBoxTopRightBottomLg}></input>
        </div>
        <div className={`${styles.row} ${styles.marginTop10}`}>
            <div className={styles.inputLabelText}>
                NAME
            </div>
            <input type="text" name="name" className={styles.inputBoxTopRightBottomLg}></input>
        </div>
        <div className={`${styles.row} ${styles.marginTop10}`}>
            <div className={styles.inputLabelText}>
                NICK
            </div>
            <input type="text" name="nickname" className={styles.inputBoxTopRightBottomLg}></input>
        </div>
        <div className={`${styles.row} ${styles.marginTop10}`}>
            <div className={styles.inputLabelText}>
                EMAIL
            </div>
            <input type="email" name="email" className={styles.inputBoxTopRightBottomLg}></input>
        </div>
        <div className={`${styles.row} ${styles.marginTop10}`}>
            <div className={styles.inputLabelText}>
                BIRTH
            </div>
            <select className={styles.selectBox} name="birth_year">
                <option>4165</option>
            </select>
            <select className={styles.selectBox} name="birth_month">
                <option>4165</option>
            </select>
            <select className={styles.selectBox} name="birth_day">
                <option>4165</option>
            </select>
        </div>
        <input type="submit" className={`${styles.marginTop20} ${styles.submitBtn}`} value="Join"></input>
    </form>
);