import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';
import FeedPhoto from 'components/FeedPhoto';

const Feed = props => {
    if(props.loading){
        return <LoadingFeed />
    }
    else if(props.feed){
        return <RenderFeed {...props} />
    }
};

const LoadingFeed = props => (
    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
        <div className={`${styles.col12} ${styles.row} ${styles.feed} ${styles.alignItemsCenter}`}>
            <Loading />
        </div>
    </div>
);

const RenderFeed = props => (
    <div className={styles.container}>
        {props.feed.map(photo => <FeedPhoto {...photo} key={photo.id} />)}
    </div>
)

Feed.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Feed;