import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';
import Ionicon from 'react-ionicons';

const UserList = props => (
    <div className={styles.userlistBox}>
        <div className={`${styles.title} ${styles.textCenter} ${styles.row} ${styles.alignItemsCenter} ${styles.mx0}`}>
            <div className={`${styles.col8} ${styles.offset2} ${styles.colSm10} ${styles.offsetSm1}`}>
                <p className={styles.titleText}>{props.title}</p>
            </div>
            <div className={`${styles.col2} ${styles.colSm1}`}>
                <span onClick={props.closeLikes} className={styles.close}><Ionicon icon="md-close" fontSize="20px" color="black" /></span>
            </div>
        </div>
        <div className={`${styles.content}`}>
            {props.loading ? <div className={styles.loading}><Loading /></div> : null}
        </div>
    </div>
);

UserList.propTypes = {
    closeLikes: PropTypes.func.isRequired
};

export default UserList;