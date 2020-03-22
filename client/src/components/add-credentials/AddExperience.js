import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import TextAreaFieldGroup from '../../common/TextAreaFieldGroup'
import TextFieldGroup from '../../common/TextFieldGroup'
import { addExperience } from '../../actions/profileAction'
export class AddExperience extends Component {

    constructor() {
        super();
        this.state = {
            company: '',//required
            title: '',//required
            location: '',
            from: '',//required
            to: '',
            current: '',
            description: '',
            errors: {},
            disabled: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    onCheck(e) {
        console.log('onCheck current before: ', this.state.current);
        console.log('onCheck disabled after: ', this.state.disabled);
        e.preventDefault();
        this.setState({
            disabled: !this.state.disabled,
            current: !this.state.current,
        })
    }

    onChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const experienceData = {
            company: this.state.company,//required
            title: this.state.title,//required
            location: this.location,
            from: this.state.from,//required
            to: this.state.to,
            current: this.current,
            description: this.description,
        }

        this.props.addExperience(experienceData, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="add-experience">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">
                                Add Experience
                            </h1>
                            <p className="lead text-center">Please fill in the form with your personal working experience.</p>
                            <small className="d-block pb-3">* Required</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    id="company"
                                    name="company"
                                    error={errors.company}
                                    placeholder="* Company"
                                    value={this.state.company}
                                    onChange={this.onChange}
                                    label="* Company"
                                />
                                <TextFieldGroup
                                    id="title"
                                    name="title"
                                    error={errors.title}
                                    placeholder="* Title"
                                    value={this.state.title}
                                    onChange={this.onChange}
                                    label="* Title"
                                />
                                <TextFieldGroup
                                    id="location"
                                    name="location"
                                    error={errors.location}
                                    placeholder="Location"
                                    value={this.state.location}
                                    onChange={this.onChange}
                                    label="Location"
                                />
                                <h6 className="text-muted">Start Date</h6>
                                <TextFieldGroup
                                    id="from"
                                    name="from"
                                    type="date"
                                    error={errors.from}
                                    value={this.state.from}
                                    onChange={this.onChange}
                                />
                                <h6 className="text-muted">End Date</h6>
                                <TextFieldGroup
                                    id="to"
                                    name="to"
                                    type="date"
                                    error={errors.to}
                                    value={this.state.to}
                                    onChange={this.onChange}
                                    disabled={this.state.disabled ? 'disabled' : ''}
                                />
                                <div className="form-check mb-4">
                                    <input type="checkbox" className="form-check-input"
                                        name="current"
                                        value={this.state.current}
                                        checked={this.state.current}
                                        onChange={this.onCheck}
                                        id="current"
                                    />
                                    <label htmlFor="current" className="form-check-label">in-service staff</label>
                                </div>

                                <TextAreaFieldGroup
                                    id="description"
                                    name="description"
                                    error={errors.description}
                                    placeholder="Description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                    label="Description"
                                    info="Say something what you're working on"
                                />
                                <button type="submit" className="btn btn-info btn-block mt-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

const mapDispatchToProps = {
    addExperience
}

AddExperience.propTypes = {
    errors: PropTypes.object,
    addExperience: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddExperience))
