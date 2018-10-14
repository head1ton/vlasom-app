import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import Ionicon from 'react-ionicons';

const Menu = (props, context) => (
    <div className={styles.containerMenu}>
        <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.my5} ${styles.mx0} ${styles.textCenter} ${styles.px5}`}>
            <div className={`${styles.col8} ${styles.offset2} ${styles.borderBottom}`}>
                <p className={`${styles.title} ${styles.mb3}`}>{context.t("MENU")}</p>
            </div>
            <div className={`${styles.col2} ${styles.mb3}`}>
                <span className={`${styles.close} ${styles.closeBtn}`} onClick={props.closeMenu}>
                    <Ionicon icon="md-close" fontSize="24px" color="white" />
                </span>
            </div>
            <div onClick={props.handleProfile} className={`${styles.col8} ${styles.offset2} ${styles.mt5}`}>
                <p className={`${styles.title} ${styles.mb3}`}>NickName</p>
            </div>
            <div onClick={props.handleProfile} className={`${styles.col2} ${styles.mb3} ${styles.mt5}`}>
                <span className={`${styles.close}`}>
                    {props.show_profile ? <Ionicon icon="md-arrow-dropup" fontSize="24px" color="white" /> : <Ionicon icon="md-arrow-dropdown" fontSize="24px" color="white" />}
                </span>
            </div>
            {props.show_profile ? (
            <div className={styles.col12}>
                <p className={styles.menuItem}>{context.t("My Profile")}</p>
                <p className={styles.menuItem}>{context.t("My Interests")}</p>
                <p className={styles.menuItem}>{context.t("My Uploads")}</p>
            </div>) : null}
            <div onClick={props.handleCategory} className={`${styles.col8} ${styles.offset2} ${styles.mt5}`}>
                <p className={`${styles.title} ${styles.mb3}`}>{context.t("Categorys")}</p>
            </div>
            <div onClick={props.handleCategory} className={`${styles.col2} ${styles.mb3} ${styles.mt5}`}>
                <span className={`${styles.close}`}>
                    {props.show_category ? <Ionicon icon="md-arrow-dropup" fontSize="24px" color="white" /> : <Ionicon icon="md-arrow-dropdown" fontSize="24px" color="white" />}
                </span>
            </div>
            {props.show_category ? (
            <div className={styles.col12}>
                <Link to='/category/list/' style={{ textDecoration: 'none' }}>
                    <p className={styles.menuItem}>{context.t("category All")}</p>
                </Link>
                {props.category_name.map(category => (
                    <p className={styles.menuItem}>{context.t(category.name)}</p>
                ))}
            </div>) : null}
        </div>
        <div className={styles.menuBottom}>
            <p className={styles.title}>{context.t("Logout")}</p>
        </div>
    </div>
);

Menu.contextTypes = {
    t: PropTypes.func.isRequired
}

Menu.propTypes = {
    closeMenu: PropTypes.func.isRequired,
    show_profile: PropTypes.bool.isRequired,
    show_category: PropTypes.bool.isRequired,
    handleProfile: PropTypes.func.isRequired,
    handleCategory: PropTypes.func.isRequired,
    category_name: PropTypes.array
}

export default Menu;