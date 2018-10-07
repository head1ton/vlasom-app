import React from 'react';
import styles from './styles.scss';
import { LoginForm, SignupForm } from 'components/AuthForms';

const Auth = (props, context) => (
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={`${styles.col12} ${styles.textCenter}`}>
                <img className={styles.logo} src={require('images/logo-xlarge-red.png')} alt='vlasom' />
            </div>
            <h1 className={`${styles.title} ${styles.col12} ${styles.textCenter} ${styles.mt3}`}>VLASOM</h1>
        </div>
        <div className={styles.row}>
            {props.action === 'login' && <LoginForm />}
            {props.action === 'signup' && <SignupForm />}
        </div>
        <div className={styles.mt5}>
        {props.action === 'login' && (
            <div className={styles.row}>
                <div className={styles.col6}>
                    <div onClick={props.changeAction} className={`${styles.textRight} ${styles.changeLinkText} ${styles.mr5}`}>
                        <p>회원가입</p>
                    </div>
                </div>
                <div className={styles.col6}>
                    <div className={`${styles.textLeft} ${styles.changeLinkText} ${styles.ml5}`}>
                        <p>아이디 / 비밀번호 찾기</p>
                    </div>
                </div>
            </div>
        )}
        {props.action === 'signup' && (
            <div className={styles.row}>
                <div className={styles.col12}>
                    <div onClick={props.changeAction} className={`${styles.textCenter} ${styles.changeLinkText}`}>
                        <p>로그인</p>
                    </div>
                </div>
            </div>
        )}
        </div>
    </div>
);

export default Auth;