import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteExpericenceById } from '../../actions/profileAction'
class Experience extends Component {

    onDelete(id, event) {
        event.preventDefault();
        this.props.deleteExpericenceById(id);
    }

    render() {
        const expContent = this.props.experience.map(exp => (
            <tr key={exp._id}>
                <td>{exp.company}</td>
                <td>{exp.title}</td>
                <td>{exp.from} - {exp.to ? exp.to : 'Now'}</td>
                <td>
                    <button className="btn btn-danger" onClick={this.onDelete.bind(this, exp._id)}>
                        Delete
                    </button>
                </td>
            </tr>
        ))
        return (
            <div>
                <h4 className="mb-4">Expericence</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Job</th>
                            <th>Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {expContent}
                    </tbody>
                </table>
            </div>
        )
    }
}
Experience.propTypes = {
    deleteExpericenceById: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    deleteExpericenceById
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience)