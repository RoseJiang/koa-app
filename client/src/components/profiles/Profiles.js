import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from '../../validation/is-empty'
import Spinner from '../../common/Spinner'
import { getProfiles } from '../../actions/profileAction'

class Profiles extends Component {

    componentDidMount() {
        this.props.getProfiles();
    }

    render() {
        const { profiles, loading } = this.props.profile;
        let profilesContent;
        if (isEmpty(profiles) || loading) {
            profilesContent = <Spinner />;
        } else {
            if (Object.keys(profiles).length === 0) {
                profilesContent = <h3>There is np profile</h3>
            } else {
                profilesContent = <h3>TODO: Display</h3>
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
