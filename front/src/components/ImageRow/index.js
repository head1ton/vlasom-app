import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import styles from './styles.scss';

const ImageRow = props => (
    <div className={`${styles.col12} ${styles.colSm6} ${styles.colMd4} ${styles.imageBox} ${styles.px0} ${styles.mb3}`}>
        <img src={props.image.image} className={styles.image} alt={props.image.description}></img>
        <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.alignItemsCenter}`}>
            <div className={`${styles.overlay} ${styles.col12} `}>
                <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.alignItemsCenter} ${styles.overlayBox}`}>
                    <div className={`${styles.col12} ${styles.overlayText}`}>
                        <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.alignItemsCenter}`}>
                            <Ionicon icon="ios-heart" fontSize="22px" color="white" />
                            <span className={styles.ml2}>{props.image.like_count}</span>
                        </div>
                        <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.alignItemsCenter}`}>
                            <Ionicon icon="ios-text" fontSize="22px" color="white" />
                            <span className={styles.ml2}>{props.image.comment_count}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ImageRow.propTypes = {
    image: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        comment_count: PropTypes.number.isRequired,
        like_count: PropTypes.number.isRequired
    }).isRequired
}

export default ImageRow;