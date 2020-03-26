import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProfileHeader from './ProfileHeader'
import ProfileAbout from './ProfileAbout'
import ProfileCreds from './ProfileCreds'
import ProfileGithub from './ProfileGithub'
import { getProfileByHandle } from '../../actions/profileAction'
import Spinner from '../../common/Spinner'
import { Link } from 'react-router-dom'

class Profile extends Component {

    componentDidMount() {
        if (this.props.match.params.handle) {
            this.props.getProfileByHandle(this.props.match.params.handle)
        }
    }

    render() {
        const { profile, loading } = this.props.profile;
        console.log(profile);
        let profileContent;
        if (profile === null || loading) {
            profileContent = <Spinner />
        } else {
            profileContent = (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/profiles" className="btn btn-light mb-3 float-left">Back to Profiles</Link>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <ProfileHeader profile={profile} />
                    <ProfileAbout profile={profile} />
                    <ProfileCreds experience={profile.experence} education={profile.education} />
                    <ProfileGithub />
                </div>
            )
        }
        return (
            <div className="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {profileContent}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

const mapDispatchToProps = {
    getProfileByHandle
}
Profile.propTypes = {
    getProfileByHandle: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
