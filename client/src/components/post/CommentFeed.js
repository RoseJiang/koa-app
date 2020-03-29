import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEmpty from '../../validation/is-empty'
import CommentItem from './CommentItem'
class CommentFeed extends Component {


    render() {
        const { comments, postId } = this.props;
        console.log(comments)
        return (
            <div>
                {isEmpty(comments) ? null : comments.map(comment =>
                    <CommentItem key={comment._id} comment={comment} postId={postId} />
                )}
            </div>
        )
    }
}
CommentFeed.propTypes = {
    comments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired,
}
export default CommentFeed