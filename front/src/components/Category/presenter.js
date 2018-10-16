import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';
import FeedPhoto from 'components/FeedPhoto';

const Category = (props) => {
    if(props.loading){
        return <LoadingFeed />
    }
    else if(props.feed){
        return <RenderFeed {...props} />
    }
};

Category.propTypes = {
    feed: PropTypes.array,
    loading: PropTypes.bool.isRequired
}

const LoadingFeed = props => (
    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
        <div className={`${styles.col12} ${styles.row} ${styles.feed} ${styles.alignItemsCenter}`}>
            <Loading />
        </div>
    </div>
);

const RenderFeed = props => (
    <div className={styles.container}>
    <div className={`${styles.col12} ${styles.title}`}>
        <p className={styles.titleText}>{props.feed[0].category.name}</p>
    </div>
        {props.feed.map(photo => <FeedPhoto {...photo} key={photo.id} />)}
    </div>
)

export default Category;