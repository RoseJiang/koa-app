import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import isEmpty from '../../validation/is-empty'

class ProfileItem extends Component {

    render() {
        const profile = this.props.profile;
        //console.log(profile);
        return (
            <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-2">
                        <img className="rounded-circle" src={profile.user.avatar} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                        <h3>{profile.user.name}</h3>
                        <p>{profile.status}</p>
                        <p>{isEmpty(profile.location) ? null : (<span>{profile.location}</span>)}</p>
                        <Link to={`/profile/${profile.handle}`} className="btn btn-info">More Info</Link>
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                        <h4>Skills</h4>
                        <ul className="list-group">
                            {profile.skills.slice(0, 4).map((skill, index) => (
                                <li key={index} className="list-group-item">
                                    <i className="fa fa-check pr-1" />{skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}
ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileItem)
