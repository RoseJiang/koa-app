import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from '../../validation/is-empty'
import Spinner from '../../common/Spinner'
import { getProfiles } from '../../actions/profileAction'
import ProfileItem from './ProfileItem'

class Profiles extends Component {

    componentDidMount() {
        this.props.getProfiles();
    }

    render() {
        const { profiles, loading } = this.props.profile;
        let profilesContent;
        if (profiles === null || loading) {
            profilesContent = <Spinner />;
        } else {
            if (Object.keys(profiles).length === 0) {
                profilesContent = <h3>There is no profile</h3>
            } else {
                profilesContent = (
                    profiles.map(
                        profile => <ProfileItem key={profile._id} profile={profile} />
                    ))
            }
        }
        return (
            <div className="profiles">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">
                                Developers
                            </h1>
                            <p className="lead text-center">
                                Check Details
                            </p>
                            {profilesContent}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile,
})

const mapDispatchToProps = {
    getProfiles
}
Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles)
