import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const Navigation = (props, context) => (
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
                    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                        <div className={`${styles.searchBoxLabel} ${styles.colLg3} ${styles.col3}`}>
                            <img src={require('images/search.png')} alt="search"></img>
                        </div>
                        <div className={`${styles.colLg9} ${styles.col9} ${styles.pl1}`}>
                            <input type="text" name="q" className={styles.searchBox} ></input>
                        </div>
                    </div>
                </div>
                <div className={`${styles.colLg7} ${styles.offsetLg0} ${styles.col1} ${styles.offset1} ${styles.textRight}`}>
                    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                        <div className={`${styles.offset2} ${styles.colLg3} ${styles.nickname} ${styles.mobileNone}`}>
                            <Link to='/profile' style={{ textDecoration: 'none' }}>
                                <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                                    <img src={require('images/nav-nickname.png')} alt="nickname"></img>
                                    <p className={styles.nicknameText}>nickname</p>
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
                            <Link to='/history'>
                                <img src={require('images/history.png')} alt="history"></img>
                            </Link>
                        </div>
                        <div className={`${styles.colLg1} ${styles.navItem} ${styles.mobileNone}`}>
                            <Link to='/like/list'>
                                <img src={require('images/like-list.png')} alt="like-list"></img>
                            </Link>
                        </div>
                        <div className={`${styles.offset1} ${styles.colLg1} ${styles.navItem}`}>
                            <Link to='/menu'>
                                <img src={require('images/menu-white.png')} alt="menu"></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

Navigation.contextTypes = {
    t: PropTypes.func.isRequired
}

export default Navigation;