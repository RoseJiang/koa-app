import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
class Landing extends Component {

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashbord');
        }
    }

    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Rose's App</h1>
                                <p className="lead">Work harder, harder and harder!</p>
                                <hr />
                                <Link to="/register" className="btn btn-lg btn-info mr-2">Register</Link>
                                <Link to="/login" className="btn btn-lg btn-light">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Landing.propTypes = {
    auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({ auth: state.auth }) // state.auth 在rootReducers 中与 reducers 同名
export default connect(mapStateToProps, { Landing })(Landing);