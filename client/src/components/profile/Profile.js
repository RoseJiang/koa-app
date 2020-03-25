import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProfileHeader from './ProfileHeader'
import ProfileAbout from './ProfileAbout'
import ProfileCreds from './ProfileCreds'
import ProfileGithub from './ProfileGithub'
import { getProfileByHandle } from '../../actions/profileAction'
class Profile extends Component {

    componentDidMount() {
        if (this.props.match.params.handle) {
            this.props.getProfileByHandle(this.props.match.params.handle)
        }
    }

    render() {
        return (
            <div>
                <ProfileHeader />
                <ProfileAbout />
                <ProfileCreds />
                <ProfileGithub />
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
