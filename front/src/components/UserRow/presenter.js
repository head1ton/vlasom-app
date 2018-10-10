import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const UserRow = (props, context) => (
    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
        <div className={`${styles.col1} ${styles.colSm1} ${styles.colMd1}${styles.colLg1}`}>
            <div className={styles.profileImg}>
                <img src={props.user.profile_image || require('images/profile-red.png')} alt={props.user.username}></img>
            </div>
        </div>
        <div className={`${styles.col3} ${styles.offset2} ${styles.colSm4} ${styles.offsetSm1} ${styles.colMd4} ${styles.offsetMd1} ${styles.colLg5} ${styles.offsetLg0}`}>
            <p className={styles.profileTextBold}>{props.user.nickname}</p>
            <p className={styles.profileText}>{props.user.name}</p>
        </div>
        <div className={`${styles.col5} ${styles.offset0} ${styles.colSm4} ${styles.offsetSm2} ${styles.colMd3} ${styles.offsetMd3} ${styles.colLg2} ${styles.offsetLg4}`}>
            <p className={styles.btn}>{context.t("follow")}</p>
        </div>
    </div>

);

UserRow.contextTypes = {
    t: PropTypes.func.isRequired
};

UserRow.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
    }).isRequired,
    big: PropTypes.bool
};

UserRow.defaultProps = {
    big: false
};

export default UserRow;