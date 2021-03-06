import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const Navigation = (props, context) => (
    <div>
        <div className={styles.containerNav}>
            <div className={styles.container}>
                <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                    <div className={`${styles.colLg2} ${styles.offsetLg0} ${styles.col1} ${styles.offset2} ${styles.textCenter} ${styles.logo}`}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                                <img src={require('images/logo-small-white.png')} alt="VLASOM"></img>
                                <span className={`${styles.logoText} ${styles.mobileNone}`}>VLASOM</span>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.colLg3} ${styles.offsetLg0} ${styles.col4} ${styles.offset1}`}>
                        <form onSubmit={props.onSubmit} className={`${styles.row} ${styles.alignItemsCenter}`}>
                            <div className={`${styles.col12} ${styles.pl1}`}>
                                <input type="text" placeholder={context.t("Search")} value={props.value} onChange={props.onInputChange} className={styles.searchBox} ></input>
                            </div>
                        </form>
                    </div>
                    <div className={`${styles.colLg7} ${styles.offsetLg0} ${styles.col1} ${styles.offset1} ${styles.textRight}`}>
                        <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                            <div className={`${styles.offset2} ${styles.colLg3} ${styles.nickname} ${styles.mobileNone}`}>
                                <Link to='/my/profile/' style={{ textDecoration: 'none' }}>
                                    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                                        <img src={require('images/nav-nickname.png')} alt="nickname"></img>
                                        <p className={styles.nicknameText}>{props.loginUser.nickname}</p>
                                    </div>
                                </Link>
                            </div>
                            <div className={`${styles.offset1} ${styles.colLg1} ${styles.navItem} ${styles.mobileNone}`}>
                                <Link to='/'>
                                    <img src={require('images/home.png')} alt="home"></img>
                                </Link>
                            </div>
                            <div className={`${styles.colLg1} ${styles.navItem} ${styles.mobileNone}`}>
                                <Link to='/explore'>
                                    <img src={require('images/more.png')} alt="more"></img>
                                </Link>
                            </div>
                            <div className={`${styles.colLg1} ${styles.navItem} ${styles.mobileNone}`}>
                                <Link to='/notifications/' style={{textDecoration: 'none'}}>
                                    <img src={require('images/history.png')} alt="history"></img>
                                    {props.loginUser.notification_count > 0 ? 
                                        <p className={styles.notificationCount}>{props.loginUser.notification_count}</p>
                                        : null}
                                </Link>
                            </div>
                            <div className={`${styles.colLg1} ${styles.navItem} ${styles.mobileNone}`}>
                                <Link to='/interest/list/'>
                                    <img src={require('images/like-list.png')} alt="like-list"></img>
                                </Link>
                            </div>
                            <div className={`${styles.offset1} ${styles.colLg1} ${styles.navItem} ${styles.menuBtn}`}>
                                <img onClick={props.openMenu} src={require('images/menu-white.png')} alt="menu"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {props.show_nav_btm ? 
        <div className={`${styles.containerNavBtm} ${styles.mobileOnly}`}>
            <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.justifyContentCenter}`}>
                <div className={`${styles.col3} ${styles.navItem}`}>
                    <Link to='/'>
                        <img src={require('images/home-red.png')} alt="home"></img>
                    </Link>
                </div>
                <div className={`${styles.col3} ${styles.navItem}`}>
                    <Link to='/explore'>
                        <img src={require('images/more-red.png')} alt="more"></img>
                    </Link>
                </div>
                <div className={`${styles.col3} ${styles.navItem}`}>
                    <Link to='/notifications/' style={{textDecoration: 'none'}}>
                        <img src={require('images/history-red.png')} alt="history"></img>
                        {props.loginUser.notification_count > 0 ? 
                            <p className={styles.notificationCountBtm}>{props.loginUser.notification_count}</p>
                            : null}
                    </Link>
                </div>
                <div className={`${styles.col3} ${styles.navItem}`}>
                    <Link to='/interest/list/'>
                        <img src={require('images/like-list-red.png')} alt="like-list"></img>
                    </Link>
                </div>
            </div>
        </div> : null }
    </div>
)

Navigation.contextTypes = {
    t: PropTypes.func.isRequired
}

Navigation.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    openMenu: PropTypes.func.isRequired,
    show_nav_btm: PropTypes.bool.isRequired,
    loginUser: PropTypes.shape({
        name: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        images: PropTypes.array,
        profile_image: PropTypes.string,
        email: PropTypes.string.isRequired,
        description: PropTypes.string,
        follower_count: PropTypes.number.isRequired,
        following_count: PropTypes.number.isRequired,
        post_count: PropTypes.number.isRequired,
        birth_year: PropTypes.string.isRequired,
        birth_month: PropTypes.string.isRequired,
        birth_day: PropTypes.string.isRequired,
        notification_count: PropTypes.number.isRequired
    })
}

export default Navigation;