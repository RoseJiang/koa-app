import React, { Component } from 'react'
import { getCurrentProfile, deleteCurrentAccount } from '../../actions/profileAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Spinner from '../../common/Spinner'
import ProfileActives from './ProfileActives'
import PropTypes from 'prop-types'

class Dashboard extends Component {

    constructor() {
        super();
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    onDeleteClick(e) {
        e.preventDefault();
        console.log('onDeleteClick');
        this.props.deleteCurrentAccount();
    }

    render() {
        console.log(`-----Dashboard----render-----`);
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;
        let dashboardContent;
        if (profile === null || loading) {
            dashboardContent = <Spinner />;
        } else {
            if (Object.keys(profile).length === 0) {
                dashboardContent = (
                    <div>
                        <p className="lead text-muted">Welcome, {user.name}</p>
                        <p>There is no data for current user.</p>
                        <Link className="btn btn-lg btn-info" to="/create-profile">Create Profile</Link>
                    </div>
                )
            } else {
                dashboardContent = (
                    <div>
                        <p className="lead text-muted">
                            Welcome, <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
                        </p>
                        <ProfileActives />
                        <div style={{ marginBottom: '60px' }}>
                            <button className="btn btn-danger" onClick={this.onDeleteClick}>Delete Account</button>
                        </div>
                    </div>
                )
            }
        }
        return (
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4">Dashboard</h1>
                            {dashboardContent}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    deleteCurrentAccount: PropTypes.func.isRequired,
}

const mapStateToProfile = (state) => ({
    auth: state.auth,
    profile: state.profile
})
export default connect(mapStateToProfile, { getCurrentProfile, deleteCurrentAccount })(Dashboard);