import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';
import UserRow from 'components/UserRow';

const Search = (props, context) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.row}`}>
                <div className={`${styles.col12} ${styles.pl5} ${styles.searchTitle}`}>
                    <p className={styles.searchTitleText}>{context.t("Users")}</p>
                </div>
                <div className={styles.col12}>
                    {props.loading && <LoadingSearch />}
                    {!props.loading && props.userList.length < 1 && (
                        <NotFound text={context.t('Nothing was found.')} />
                    )}
                    {!props.loading && props.userList.length > 0 && (
                        <div className={`${styles.row} ${styles.alignItemsCenter}`}>
                            <RenderUserSearch userList={props.userList} />
                        </div>
                    )}
                </div>
            </div>
            <div className={`${styles.row} ${styles.mt3}`}>
                <div className={`${styles.col12} ${styles.pl5} ${styles.searchTitle}`}>
                    <p className={styles.searchTitleText}>{context.t("Images")}</p>
                </div>
                <div className={styles.col12}>
                    {props.loading && <LoadingSearch />}
                    {!props.loading && props.imageList.length < 1 && (
                        <NotFound text={context.t('Nothing was found.')} />
                    )}
                    {!props.loading && props.imageList.length > 0 && (
                        <RenderImageSearch imageList={props.imageList} />
                    )}
                </div>   
            </div>
        </div>
    )
};

const LoadingSearch = props => (
    <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.justifyContentCenter} ${styles.loadingSearch}`}>
        <Loading />
    </div>
)

const NotFound = props => (
    <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.justifyContentCenter} ${styles.loadingSearch}`}>
        {props.text}
    </div>
)

const RenderUserSearch = props => props.userList.map(user => (
    <UserRow vertical={true} user={user} key={user.id} />
));

const RenderImageSearch = props => props.imageList.map(image => image.description)

Search.contextTypes = {
    t: PropTypes.func.isRequired
}

Search.propTypes = {
    loading: PropTypes.bool.isRequired,
    userList: PropTypes.array,
    imageList: PropTypes.array
};

export default Search;