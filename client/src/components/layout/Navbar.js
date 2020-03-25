import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropsTypes from 'prop-types'
import { logoutUser } from '../../actions/authAction'
import { clearCurrentProfile } from '../../actions/profileAction'
class Navbar extends Component {

    onClick(e) {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLink = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" onClick={this.onClick.bind(this)}>
                        <img alt="avatar" src={user.avatar} name={user.name} className="rounded - circle" style={{ width: '25px', marginRight: '5px' }} />
                        Logout</a>
                </li>
            </ul>
        );
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>);
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark  mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">Rose's App</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profiles"> Developers</Link>
                            </li>
                        </ul>
                        {isAuthenticated ? authLink : guestLinks}
                    </div>
                </div>
            </nav>
        )
    }
}
Navbar.propsTypes = {
    mapStateToProps: PropsTypes.func.isRequired,
    logoutUser: PropsTypes.func.isRequired,
    Navbar: PropsTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Navbar);