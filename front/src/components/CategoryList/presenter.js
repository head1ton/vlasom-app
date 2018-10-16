import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import Loading from 'components/Loading';

const CategoryList = (props, context) => (
    <div className={styles.container}>
        {props.loading && <LoadingCategory />}
        {!props.loading && 
        <div className={`${styles.row} ${styles.alignItemsCenter}`}>
            <RenderCategory category_name={props.category_name} categoryImageList={props.categoryImageList} />
        </div>}
    </div>
);

const LoadingCategory = props => (
    <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.justifyContentCenter} ${styles.loadingSearch}`}>
        <Loading />
    </div>
)

const RenderCategory = (props, context) => props.category_name.map(category => (
    <div key={category.id} className={`${styles.col12} ${styles.mt3}`}>
        <div className={`${styles.col12} ${styles.pl5} ${styles.categoryName} ${styles.mb2}`}>
            <Link to={`/category/${category.name}/`} style={{ textDecoration: 'none' }}><p className={styles.categoryNameText}>{context.t(category.name)}</p></Link>
        </div>
        <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.mt3} ${styles.mx0}`}>
        {props.categoryImageList.map(image => (
            <div key={image.id} className={category.name === image.category.name ? `${styles.col12} ${styles.colSm6} ${styles.colMd4} ${styles.imageBox} ${styles.px0} ${styles.mb3}` : styles.none}>
                {category.name === image.category.name ? 
                <span>
                    <img src={image.image} className={styles.image} alt={image.description}></img>
                    <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.alignItemsCenter}`}>
                        <div className={`${styles.overlay} ${styles.col12} `}>
                            <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.alignItemsCenter} ${styles.overlayBox}`}>
                                <div className={`${styles.col12} ${styles.overlayText}`}>
                                    <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.alignItemsCenter}`}>
                                        <Ionicon icon="ios-heart" fontSize="22px" color="white" />
                                        <span className={styles.ml2}>{image.like_count}</span>
                                    </div>
                                    <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.alignItemsCenter}`}>
                                        <Ionicon icon="ios-text" fontSize="22px" color="white" />
                                        <span className={styles.ml2}>{image.comment_count}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </span> : null}
            </div>
        ))}
        </div>
    </div>
))

RenderCategory.contextTypes = {
    t: PropTypes.func.isRequired
}

CategoryList.contextTypes = {
    t: PropTypes.func.isRequired
}

CategoryList.propTypes = {
    loading: PropTypes.bool.isRequired,
    categoryImageList: PropTypes.array,
    category_name: PropTypes.array
}

export default CategoryList;