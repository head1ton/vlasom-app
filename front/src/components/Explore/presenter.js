import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';
import UserRow from 'components/UserRow';

const Explore = props => {
    if(props.loading){
        return <LoadingExplore />
    }
    else if(props.userList){
        return <RenderExplore {...props} />
    }
};

const LoadingExplore = props => (
    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
        <div className={`${styles.col12} ${styles.row} ${styles.userList} ${styles.alignItemsCenter}`}>
            <Loading />
        </div>
    </div>
);

const RenderExplore = props => (
    <div className={`${styles.container}`}>
        <div className={`${styles.containerExplore}`}>
            {props.userList.map(user => <UserRow big={true} user={user} key={user.id} />)}
        </div>
    </div>
)

Explore.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Explore;