import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import Loading from 'components/Loading';

const InterestList = (props) => {
    if(props.loading){
        return <LoadingFeed />
    }
    else if(props.interestList){
        return (<div className={styles.container}>
            <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                <div className={`${styles.col12} ${styles.title}`}>
                    <p className={styles.titleText}>{props.username}{" "}님의 관심목록</p>
                </div>
                <div className={`${styles.col12} ${styles.mt3} ${styles.textCenter} ${styles.borderBtm}`}>
                    {props.interestList.map(interest => (
                    <span>
                        {interest.category ? <RenderCategoryName category={interest.category} /> : null}
                    </span>
                    )
                    )}
                </div>
                <div className={`${styles.col12} ${styles.mt3}`}>
                    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                        {props.interestList.map(interest => 
                        <div className={`${styles.col12} ${styles.colSm6} ${styles.colMd4} ${styles.imageBox} ${styles.px0} ${styles.mb3}`}>
                            {interest.category ? null : <RenderInterestImage image={interest.image} />}
                        </div>)}
                    </div>
                </div>
            </div>
        </div>)
    }
};

const LoadingFeed = props => (
    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
        <div className={`${styles.col12} ${styles.row} ${styles.feed} ${styles.alignItemsCenter}`}>
            <Loading />
        </div>
    </div>
);

const RenderCategoryName = props => (
    <Link to={`/category/${props.category.name}/`} style={{ textDecoration: 'none' }}><span className={`${styles.categoryName} ${styles.mx3}`}># {props.category.name}</span></Link>
);

const RenderInterestImage = props => (
    <span>
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
    </span>
)
InterestList.propTypes = {
    loading: PropTypes.bool.isRequired,
    interestList: PropTypes.array,
    username: PropTypes.string.isRequired
}

RenderCategoryName.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        interest_count_category: PropTypes.number.isRequired,
        is_interested_category: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
    })
}

RenderInterestImage.propTypes = {
    image: PropTypes.shape({
        category: PropTypes.shape({
            id: PropTypes.number.isRequired,
        interest_count_category: PropTypes.number.isRequired,
        is_interested_category: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
        }).isRequired,
        comment_count: PropTypes.number.isRequired,
        comments: PropTypes.array,
        description: PropTypes.string,
        interest_count_image: PropTypes.number.isRequired,
        is_interested_image: PropTypes.bool.isRequired,
        is_liked: PropTypes.bool.isRequired,
        like_count: PropTypes.number.isRequired,
        location: PropTypes.string,
        natural_time: PropTypes.string,
        tags: PropTypes.array,
        user: PropTypes.shape({
            profile_image: PropTypes.string,
            username: PropTypes.string.isRequired
        })
    })
}

export default InterestList;