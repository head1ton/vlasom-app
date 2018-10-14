import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';
import ImageRow from 'components/ImageRow';

const CategoryList = (props, context) => (
    <div className={styles.container}>
        {props.loading && <LoadingCategory />}
        {!props.loading && 
        <div className={`${styles.row} ${styles.alignItemsCenter}`}>
            <RenderCategoryImage category_name={props.category_name} categoryImageList={props.categoryImageList} />
        </div>}
    </div>
);

const LoadingCategory = props => (
    <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.justifyContentCenter} ${styles.loadingSearch}`}>
        <Loading />
    </div>
)

const NotFound = props => (
    <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.justifyContentCenter} ${styles.loadingSearch}`}>
        {props.text}
    </div>
)

const RenderCategoryImage = (props, context) => props.category_name.map(category => (
    <div className={`${styles.row} ${styles.mt3}`}>
        <div className={`${styles.col12} ${styles.pl5} ${styles.categoryName} ${styles.mb2}`}>
            <p className={styles.categoryNameText}>{context.t(category.name)}</p>
        </div>
        {props.categoryImageList.map(image => (
            <span>
                {category.name === image.category.name ? <ImageRow image={image} key={image.id} /> : null}
            </span>
        ))}
    </div>
))

RenderCategoryImage.contextTypes = {
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