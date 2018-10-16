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
    loading: PropTypes.bool.isRequired,
    handleInterestClick: PropTypes.func.isRequired
}

const LoadingFeed = props => (
    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
        <div className={`${styles.col12} ${styles.row} ${styles.feed} ${styles.alignItemsCenter}`}>
            <Loading />
        </div>
    </div>
);

const RenderFeed = (props, context) => (
    <div className={styles.container}>
        <div className={`${styles.row} ${styles.title} ${styles.alignItemsCenter}`}>
            <div className={`${styles.col12} ${styles.colSm4} ${styles.offsetSm4} ${styles.colMd6} ${styles.offsetMd3} ${styles.colLg6} ${styles.offsetLg3}`}>
                <p className={styles.titleText}>{props.feed[0].category.name}</p>
            </div>
            <div className={`${styles.col6} ${styles.offset3} ${styles.mt3Mobile} ${styles.colSm3} ${styles.offsetSm1} ${styles.colMd3} ${styles.offsetMd0} ${styles.colLg2} ${styles.offsetLg1}`}>
                <p onClick={props.handleInterestClick} className={props.feed[0].category.is_interested_category ? styles.textBtnGrey : styles.textBtn}>{props.feed[0].category.is_interested_category ? context.t("Uninterest") : context.t("Interest")}</p>
            </div>
        </div>
        {props.feed.map(photo => <FeedPhoto {...photo} key={photo.id} />)}
    </div>
)

RenderFeed.contextTypes = {
    t: PropTypes.func.isRequired
}

export default Category;