import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';
import FeedPhoto from 'components/FeedPhoto';

const Category = (props) => {
    if(props.loading){
        return <LoadingFeed />
    }
    else if(props.categoryImages){
        return <RenderFeed {...props} />
    }
};

Category.propTypes = {
    categoryImages: PropTypes.array,
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
        <p className={styles.titleText}>{props.categoryImages[0].category.name}</p>
    </div>
        {props.categoryImages.map(photo => <FeedPhoto {...photo} key={photo.id} />)}
    </div>
)

export default Category;