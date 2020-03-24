import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteEducationById } from '../../actions/profileAction'
class Education extends Component {

    onDelete(id, event) {
        event.preventDefault();
        this.props.deleteEducationById(id);
    }

    render() {
        const eduContent = this.props.education.map(edu => (
            <tr key={edu._id}>
                <td>{edu.school}</td>
                <td>{edu.degree}</td>
                <td>{edu.fieldofstudy}</td>
                <td>{edu.from} - {edu.to ? edu.to : 'Now'}</td>
                <td>
                    <button className="btn btn-danger" onClick={this.onDelete.bind(this, edu._id)}>
                        Delete
                    </button>
                </td>
            </tr>
        ))
        return (
            <div>
                <h4 className="mb-4">Education</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>School</th>
                            <th>Degree</th>
                            <th>Field of Study</th>
                            <th>Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {eduContent}
                    </tbody>
                </table>
            </div>
        )
    }
}
Education.propTypes = {
    deleteEducationById: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    deleteEducationById
}

export default connect(mapStateToProps, mapDispatchToProps)(Education)