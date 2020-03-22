import React, { Component } from 'react'
import { loginAction } from '../../actions/authAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TextFieldGroup from '../../common/TextFieldGroup'
class Login extends Component {

    constructor() {
        super();
        this.state = {
            inputEmail: '',
            inputPassword: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.inputEmail,
            password: this.state.inputPassword
        };

        this.props.loginAction(user);

    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashbord');
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <form className="form-signin" onSubmit={this.onSubmit}>
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                    <p>Use your registed email to login.</p>
                </div>

                <TextFieldGroup
                    type="email"
                    id="inputEmail"
                    name="inputEmail"
                    error={errors.email}
                    placeholder="Email address"
                    value={this.state.inputEmail}
                    onChange={this.onChange}
                    label="Email address"
                />
                <TextFieldGroup
                    type="password"
                    id="inputPassword"
                    name="inputPassword"
                    error={errors.password}
                    placeholder="Password"
                    value={this.state.inputPassword}
                    onChange={this.onChange}
                    label="Password"
                />

                {/* <div className="form-label-group">
                    <input type="email" id="inputEmail" name="inputEmail"
                        className={classNames("form-control", { 'is-invalid': errors.email })}
                        //className="form-control"
                        placeholder="Email address" value={this.state.inputEmail} onChange={this.onChange} />
                    <label htmlFor="inputEmail">Email address</label>
                    {
                        errors.email && (
                            <div className="invalid-feedback">
                                {errors.email}
                            </div>
                        )
                    }
                </div>

                <div className="form-label-group">
                    <input type="password" id="inputPassword" name="inputPassword"
                        className={classNames("form-control", { 'is-invalid': errors.password })}
                        //className="form-control"
                        placeholder="Password" value={this.state.inputPassword} onChange={this.onChange} />
                    <label htmlFor="inputPassword">Password</label>
                    {
                        errors.password && (
                            <div className="invalid-feedback">
                                {errors.password}
                            </div>
                        )
                    }
                </div> */}
                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            </form>
        )
    }
}
Login.propTypes = {
    loginAction: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, { loginAction })(Login);
