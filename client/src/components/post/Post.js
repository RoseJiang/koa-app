import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPost } from '../../actions/postAction'
import { Link } from 'react-router-dom'
import Spinner from '../../common/Spinner'
import PostItem from '../posts/PostItem'

export class Post extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            //console.log(this.props.match.params.id);
            this.props.getPost(this.props.match.params.id);
        }
    }
    render() {
        const { post, loading } = this.props.post;
        //console.log(post, loading);
        let postContent;
        if (post === null || loading || Object.keys(post).length === 0) {
            postContent = <Spinner />
        } else {
            postContent = <PostItem post={post} showActions={false} />
        }
        return (
            <div className="post">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <Link to="/feed" className="btn btn-light mb-3 float-left">Back to Posts</Link>
                                </div>
                                <div className="col-md-6"></div>
                                {postContent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    post: state.post
})

const mapDispatchToProps = {
    getPost
}
Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)
