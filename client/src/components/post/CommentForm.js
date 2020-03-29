import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addComment } from '../../actions/postAction'
import TextAreaFieldGroup from '../../common/TextAreaFieldGroup'

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const { user } = this.props.auth;
        const { postId } = this.props
        const newComment = {
            text: this.state.text,
            name: user.name,
            avatar: user.avatar
        };
        console.log(postId);
        this.props.addComment(newComment, postId);
        this.setState({
            text: ''
        });
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="comment-form mb-3">
                <div className="card card-info">
                    <div className="card-header bg-info text-white">Say something ...</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <TextAreaFieldGroup
                                    id="comments"
                                    name="text"
                                    error={errors.text}
                                    placeholder="Say something ..."
                                    value={this.state.text}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

const mapDispatchToProps = {
    addComment
}
CommentForm.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object,
    addComment: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)