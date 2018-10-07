import React from 'react';
import Ionicons from 'react-ionicons';
import formStyles from 'common/formStyles.scss';

export const LoginForm = props => (
    <form action="" method="post" className={formStyles.col12}>
        <div className={formStyles.row}>
            <div className={`${formStyles.colLg5} ${formStyles.offsetLg3} ${formStyles.colMd6} ${formStyles.offsetMd2} ${formStyles.colSm7} ${formStyles.offsetSm1} ${formStyles.col10} ${formStyles.mt3}`}>
                <div className={formStyles.row}>
                    <div className={formStyles.col3}>
                        <div className={formStyles.inputLabel}>
                            <img className={formStyles.imgUsername} src={require('images/nav-nickname.png')} alt="username" />
                        </div>
                    </div>
                    <div className={`${formStyles.col9} ${formStyles.px0}`}>
                        <input type="text" className={`${formStyles.inputBoxTopBottom} `}></input>
                    </div>
                </div>
                <div className={`${formStyles.row} ${formStyles.mt3}`}>
                    <div className={formStyles.col3}>
                        <div className={formStyles.inputLabel}>
                        <img className={formStyles.imgPw} src={require('images/login-pw.png')} alt="username" />
                        </div>
                    </div>
                    <div className={`${formStyles.col9} ${formStyles.px0}`}>
                        <input type="password" className={formStyles.inputBoxTopBottom}></input>
                    </div>
                </div>
            </div>
            <div className={`${formStyles.colLg1} ${formStyles.colMd2} ${formStyles.col2} ${formStyles.mt3}`}>
                <input type="submit" className={formStyles.inputBtn} value="Go" />
            </div>
        </div>
        <div className={`${formStyles.row} ${formStyles.marginTop30} ${formStyles.justifyContentCenter}`}>
            <div className={`${formStyles.borderTopBottom} ${formStyles.mt5}`}>
            Login with<br/><br/>
            <Ionicons icon="logo-facebook" fontSize="50px" color="#4267b2" />
            </div>
        </div>
    </form>
);

export default LoginForm;