import React from 'react';
import PropTypes from 'prop-types';
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
            <div className={`${styles.col8} ${styles.offset2} ${styles.mt5}`}>
                <p className={`${styles.title} ${styles.mb3}`}>NickName</p>
            </div>
            <div className={`${styles.col2} ${styles.mb3} ${styles.mt5}`}>
                <span className={`${styles.close}`}>
                    <Ionicon icon="md-arrow-dropdown" fontSize="24px" color="white" />
                </span>
            </div>
            <div className={styles.col12}>
                <p className={styles.menuItem}>{context.t("My Profile")}</p>
                <p className={styles.menuItem}>{context.t("My Interests")}</p>
                <p className={styles.menuItem}>{context.t("My Uploads")}</p>
            </div>
            <div className={`${styles.col8} ${styles.offset2} ${styles.mt5}`}>
                <p className={`${styles.title} ${styles.mb3}`}>{context.t("Categorys")}</p>
            </div>
            <div className={`${styles.col2} ${styles.mb3} ${styles.mt5}`}>
                <span className={`${styles.close}`}>
                    <Ionicon icon="md-arrow-dropdown" fontSize="24px" color="white" />
                </span>
            </div>
            <div className={styles.col12}>
                <p className={styles.menuItem}>{context.t("category 1")}</p>
                <p className={styles.menuItem}>{context.t("category 2")}</p>
                <p className={styles.menuItem}>{context.t("category 3")}</p>
            </div>
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
    closeMenu: PropTypes.func.isRequired
}

export default Menu;