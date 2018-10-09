import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';

const Feed = props => {
    if(props.loading){
        return <LoadingFeed />
    }
};

const LoadingFeed = props => (
    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
        <div className={`${styles.col12} ${styles.row} ${styles.feed} ${styles.alignItemsCenter}`}>
            <Loading />
        </div>
    </div>
);

Feed.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Feed;