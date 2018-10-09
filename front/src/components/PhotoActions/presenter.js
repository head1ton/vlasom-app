import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import styles from './styles.scss';

const PhotoActions = (props, context) => (
<div>
    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
        <div className={`${styles.col1} ${styles.colSm1} ${styles.textCenter}`}>
            <Ionicon icon='ios-heart-outline' fontSize='35px' color='black' />
        </div>
        <div className={`${styles.col9} ${styles.offset1} ${styles.colSm10} ${styles.offsetSm0} ${styles.likeText}`}>
            <p>{props.number} {props.number === 1 ? context.t('like') : context.t('likes')}</p>
        </div>
    </div>
    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
        <div className={`${styles.col1} ${styles.textCenter}`}>
            <Ionicon icon='ios-text-outline' fontSize='35px' color='black' />
        </div>
    </div>
</div>
);

PhotoActions.contextTypes = {
    t: PropTypes.func.isRequired
}

PhotoActions.propTypes = {
    number: PropTypes.number.isRequired
};

export default PhotoActions;