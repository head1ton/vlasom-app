import React from 'react';
import styles from './styles.scss';

const Loading = props => (
    <div className={styles.container}>
        <img className={styles.loadingImg} src={require('images/logo-small-red.png')} alt="loading"></img>
    </div>
);

export default Loading;