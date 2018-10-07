import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import formStyles from 'common/formStyles.scss';

const LoginForm = (props, context)=> (
    <form action="" method="post" className={formStyles.col12} onSubmit={props.handleSubmit}>
        <div className={formStyles.row}>
            <div className={`${formStyles.colLg5} ${formStyles.offsetLg3} ${formStyles.colMd6} ${formStyles.offsetMd2} ${formStyles.colSm7} ${formStyles.offsetSm1} ${formStyles.col10} ${formStyles.mt3}`}>
                <div className={formStyles.row}>
                    <div className={formStyles.col3}>
                        <div className={formStyles.inputLabel}>
                            <img className={formStyles.imgUsername} src={require('images/nav-nickname.png')} alt="username" />
                        </div>
                    </div>
                    <div className={`${formStyles.col9} ${formStyles.px0}`}>
                        <input type="text" name="username" value={props.usernameValue} className={`${formStyles.inputBoxTopBottom}`} placeholder='ID' onChange={props.handleInputChange}></input>
                    </div>
                </div>
                <div className={`${formStyles.row} ${formStyles.mt3}`}>
                    <div className={formStyles.col3}>
                        <div className={formStyles.inputLabel}>
                        <img className={formStyles.imgPw} src={require('images/login-pw.png')} alt="username" />
                        </div>
                    </div>
                    <div className={`${formStyles.col9} ${formStyles.px0}`}>
                        <input type="password" name="password" value={props.passwordValue} className={formStyles.inputBoxTopBottom} placeholder='password' onChange={props.handleInputChange}></input>
                    </div>
                </div>
            </div>
            <div className={`${formStyles.colLg1} ${formStyles.colMd2} ${formStyles.col2} ${formStyles.mt3}`}>
                <input type="submit" className={formStyles.inputBtn} value="Go" />
            </div>
        </div>
        <div className={`${formStyles.row} ${formStyles.marginTop30} ${formStyles.justifyContentCenter}`}>
            <div className={formStyles.mt5}>
            <FacebookLogin 
            appId="172295880327582" 
            autoLoad={false} 
            fields="name,email,picture" 
            callback={props.handleFacebookLogin} 
            cssClass={`${formStyles.borderTopBottom} ${formStyles.fbLogin}`} 
            icon="fa-facebook-official" 
            textButton={context.t("Login with Facebook")}
            />
            </div>
        </div>
    </form>
);

LoginForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired,
}

LoginForm.contextTypes = {
    t: PropTypes.func.isRequired
}

export default LoginForm;