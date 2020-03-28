import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostItem extends Component {

    render() {
        const { user } = this.props.auth
        const post = this.props.post
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
                        <button type="button" className="btn btn-light mr-1">
                            <i className="text-info fas fa-thumbs-up"></i>
                            <span className="badge badge-light">{post.likes.length}</span>
                        </button>
                        <button type="button" className="btn btn-light mr-1">
                            <i className="text-info fas fa-thumbs-down"></i>
                            <span className="badge badge-light">4</span>
                        </button>
                        <Link to={`/post/${post._id}`} className="btn btn-info mr-1">Comments </Link>
                        {user.name === post.name ? (<button type="button" className="btn btn-danger">Delete</button>) : null}

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

}
PostItem.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(PostItem)