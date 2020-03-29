import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteComment } from '../../actions/postAction'

class CommentItem extends Component {

    onDeleteComment(postId, commentId, e) {
        e.preventDefault();
        console.log(commentId, postId);
        this.props.deleteComment(postId, commentId);
    }

    render() {
        const { comment, postId, auth } = this.props;
        const { user } = this.props.auth
        console.log(comment)
        return (
            <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-2">
                        <img className="rounded-circle" src={user.avatar} alt="" />
                        <br />
                        <p className="text-center">{user.name}</p>
                    </div>
                    <div className="col-md-10">
                        <p className="lead">
                            {comment.text}
                        </p>
                        {auth.user.id === comment.user ? (
                            <button type="button"
                                className="btn btn-danger"
                                onClick={this.onDeleteComment.bind(this, postId, comment._id)}
                            >Delete</button>
                        ) : null}
                    </div>
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {
    deleteComment
}
CommentItem.propTypes = {
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired,
    deleteComment: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem)