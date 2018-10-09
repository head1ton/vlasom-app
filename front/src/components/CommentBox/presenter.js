import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import styles from './styles.scss';

const CommentBox = (props, context) => (
    <form className={`${styles.row} ${styles.mt3} ${styles.addCommentBox}`}>
        <Textarea className={`${styles.col12} ${styles.addComment}`} placeholder={context.t("Add a comment")}></Textarea>
    </form>
)

CommentBox.contextTypes = {
    t: PropTypes.func.isRequired
}

export default CommentBox;