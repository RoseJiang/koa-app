import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEmpty from '../../validation/is-empty'

class ProfileCreds extends Component {

    render() {
        const { experience, education } = this.props;
        const expContent = experience.map(exp => (
            <li key={exp._id} className="list-group-item">
                <h4>{exp.company}</h4>
                <p>
                    {exp.from} - {exp.to === '' ? 'Now' : exp.to}
                </p>
                <p>
                    <strong>Title: </strong>{exp.title}
                </p>
                <p>
                    {isEmpty(exp.location) ? null : (
                        <span>
                            <strong> Location</strong>{exp.location}
                        </span>
                    )}
                </p>
                <p>
                    {isEmpty(exp.description) ? null : (
                        <span>
                            <strong> Description:</strong>{exp.description}
                        </span>
                    )}
                </p>
            </li>
        ))
        const eduContent = education.map(edu => (
            <li key={edu._id} className="list-group-item">
                <h4>{edu.school}</h4>
                <p>
                    {edu.from} - {edu.to === '' ? 'Now' : edu.to}
                </p>
                <p>
                    <strong>Degree: </strong>{edu.degree}
                </p>
                <p>
                    <strong>Field of Study: </strong>{edu.fieldofstudy}
                </p>
                <p>
                    {isEmpty(edu.description) ? null : (
                        <span>
                            <strong> Description: </strong>{edu.description}
                        </span>
                    )}
                </p>
            </li>
        ))
        return (
            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-center text-info">Experience</h3>
                    {
                        experience.length > 0 ? (<ul className="list-group">{expContent}</ul>) : (
                            <p className="text-center"> There is no experience.</p>
                        )
                    }
                </div>
                <div className="col-md-6">
                    <h3 className="text-center text-info">Education</h3>
                    {
                        education.length > 0 ? (<ul className="list-group">{eduContent}</ul>) : (
                            <p className="text-center"> There is no education.</p>
                        )
                    }
                </div>
            </div>
        )
    }
}
ProfileCreds.propTypes = {
    experience: PropTypes.array.isRequired,
    education: PropTypes.array.isRequired,
}
export default ProfileCreds