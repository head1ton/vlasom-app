import React from 'react';
import styles from './styles.scss';

const Auth = (props, context) => (
    <div className={styles.container}>
        <div className={styles.row}>
            <img src={require('images/logo-xlarge-red.png')} alt='vlasom' />
        </div>
        <div className={styles.row}>
            <h1 className={styles.title}>VLASOM</h1>
        </div>
        <div className={styles.row}>
            <div className={styles.authBox}>
            {props.action === 'login' && (
                <div className={styles.changeBox}>
                    <div className={styles.changeLink}>
                        <div onClick={props.changeAction} className={styles.textRight}>
                            <p>회원가입</p>
                        </div>
                        <div className={styles.textLeft}>
                            <p>아이디 / 비밀번호 찾기</p>
                        </div>
                    </div>
                </div>
            )}
            {props.action === 'signup' && (
                <div className={styles.changeBox}>
                    <div className={styles.changeLink}>
                        <div onClick={props.changeAction} className={styles.textRight}>
                            <p>회원가입화면</p>
                        </div>
                        <div className={styles.textLeft}>
                            <p>아이디 / 비밀번호 찾기</p>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    </div>
);

export default Auth;