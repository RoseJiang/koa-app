import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import TextFieldGroup from '../../common/TextFieldGroup'
/*
react-redux 的两个最主要的功能      
connect : 用于从 UI 组件生成容器组件， 将两种组件连接起来
Provider: 可以让组件及自组件拿到 state
*/
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authAction'
class Register extends Component {

    constructor() {
        super();
        this.state = {
            inputUserName: '',
            inputEmail: '',
            inputPassword: '',
            inputPassword2: '',
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
        const newUser = {
            name: this.state.inputUserName,
            email: this.state.inputEmail,
            password: this.state.inputPassword,
            password2: this.state.inputPassword2,
        };
        //调用 action
        this.props.registerUser(newUser, this.props.history);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashbord');
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
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
                    <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                    <p>Create your account for the app.</p>
                </div>
                <TextFieldGroup
                    id="inputUserName"
                    name="inputUserName"
                    error={errors.name}
                    placeholder="User Name"
                    value={this.state.inputUserName}
                    onChange={this.onChange}
                    label="User Name"
                    info="Please use the email which you register in gavatar."
                />
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

                <TextFieldGroup
                    type="password"
                    id="inputPassword2"
                    name="inputPassword2"
                    error={errors.password2}
                    placeholder="Confirm Password"
                    value={this.state.inputPassword2}
                    onChange={this.onChange}
                    label="Confirm Password"
                />

                {/*  <div className="form-label-group">
                    <input type="text" id="inputUserName" name="inputUserName"
                        className={classnames('form-control', { 'is-invalid': errors.name })}
                        //className="form-control is-valid"
                        placeholder="User Name" value={this.state.inputUserName} onChange={this.onChange} />
                    <label htmlFor="inputUserName">User Name</label>
                    <span className="text-muted small">Please use the email which you register in gavtar.</span>
                    {
                        errors.name && (
                            <div className="invalid-feedback">
                                {errors.name}
                            </div>
                        )
                    }
                </div> 

                <div className="form-label-group">
                    <input type="email" id="inputEmail" name="inputEmail"
                        className={classNames('form-control', { 'is-invalid': errors.email })}
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
                        className={classNames('form-control', { 'is-invalid': errors.password })}
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
                </div>

                <div className="form-label-group">
                    <input type="password" id="inputPassword2" name="inputPassword2"
                        className={classNames('form-control', { 'is-invalid': errors.password2 })}
                        //className="form-control"
                        placeholder="Confirm Password" value={this.state.inputPassword2} onChange={this.onChange} />
                    <label htmlFor="inputPassword2">Confirm Password</label>
                    {
                        errors.password2 && (
                            <div className="invalid-feedback">
                                {errors.password2}
                            </div>
                        )
                    }
                </div>*/}
                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </form>
        )
    }
}
Register.propTypes = {
    auth: PropTypes.object.isRequired,
    registerUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors }) // state.auth 在rootReducers 中与 reducers 同名
export default connect(mapStateToProps, { registerUser })(withRouter(Register));