import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePost, likePost, unlikePost } from '../../actions/postAction'
import classnames from 'classnames'
class PostItem extends Component {

    onDeletePost(id, e) {
        e.preventDefault();
        this.props.deletePost(id);
    }

    onLikeClick(id, e) {
        e.preventDefault();
        this.props.likePost(id);
    }

    onUnlikeClick(id, e) {
        e.preventDefault();
        this.props.unlikePost(id);
    }

    findUserLike(likes) {
        const { auth } = this.props
        const likedIndex = likes.findIndex(like => like.user === auth.user.id)
        if (likedIndex > -1) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const { user } = this.props.auth
        const { post, showActions } = this.props
        return (
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-2">
                        <a href="profile.jtml">
                            <img src={post.avatar} alt="" />
                        </a>
                        <br />
                        <p className="text-center">{post.name}</p>
                    </div>
                    <div className="col-md-10">
                        <p className="lead">{post.text}</p>
                        {showActions ? (
                            <span>
                                <button type="button" className="btn btn-light mr-1" onClick={this.onLikeClick.bind(this, post._id)}>
                                    <i className={classnames("fas fa-thumbs-up", { "text-info": this.findUserLike(post.likes) })}></i>
                                    <span className="badge badge-light">{post.likes.length}</span>
                                </button>
                                <button type="button" className="btn btn-light mr-1" onClick={this.onUnlikeClick.bind(this, post._id)}>
                                    <i className="fas fa-thumbs-down"></i>
                                    <span className="badge badge-light"></span>
                                </button>
                                <Link to={`/post/${post._id}`} className="btn btn-info mr-1">Comments </Link>
                                {user.name === post.name ? (<button type="button"
                                    className="btn btn-danger"
                                    onClick={this.onDeletePost.bind(this, post._id)}
                                >Delete</button>) : null}
                            </span>
                        ) : null}

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapDispatchToProps = {
    deletePost, likePost, unlikePost
}
PostItem.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired,
    likePost: PropTypes.func.isRequired,
    unlikePost: PropTypes.func.isRequired,
}
PostItem.defaultProps = {
    showActions: true
}
export default connect(mapStateToProps, mapDispatchToProps)(PostItem)