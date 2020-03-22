import React from 'react'
import { Link } from 'react-router-dom'

const ProfileActives = () => (
    <div className="btn-group mb-4">
        <Link className="btn btn-light" to="/edit-profile">
            <i className="fa fa-user-circle text-info mr-1" aria-hidden="true"></i>
            Edit Profile
    </Link>
        <Link className="btn btn-light" to="/edit-experience">
            <i className="fab fa-black-tie text-info mr-1" aria-hidden="true"></i>
            Add Experience
    </Link>
        <Link className="btn btn-light" to="/edit-education">
            <i className="fas fa-graduation-cap text-info mr-1" aria-hidden="true"></i>
            Add Education
    </Link>
    </div>)

export default ProfileActives
