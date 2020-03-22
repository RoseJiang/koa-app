import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../../common/TextFieldGroup'
import InputGroup from '../../common/InputGroup'
import SelectListGroup from '../../common/SelectListGroup'
import TextAreaFieldGroup from '../../common/TextAreaFieldGroup'
import { addProfile } from '../../actions/profileAction'
class CreateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displaySocialInputs: false,
            handle: '', //required
            status: '',//required
            company: '',
            website: '',
            location: '',
            skills: '',//required
            githubusername: '',
            bio: '',
            wechat: '',
            QQ: '',
            tengxunkt: '',
            wangyiyunkt: '',
            errors: {}
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const profileData = {
            handle: this.state.handle, //required
            status: this.state.status,//required
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            skills: this.state.skills,//required
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            wechat: this.state.wechat,
            QQ: this.state.QQ,
            tengxunkt: this.state.tengxunkt,
            wangyiyunkt: this.state.wangyiyunkt,
        };
        this.props.addProfile(profileData, this.props.history);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const { displaySocialInputs, errors } = this.state;
        const options = [
            { label: '* Please select your job!', value: '* Please select your job!' },
            { label: 'Front-End Enginnering', value: 'Front-End Enginnering' },
            { label: 'Java Enginnering', value: 'Java Enginnering' },
            { label: 'Senior Java Enginnering', value: 'Senior Java Enginnering' },
            { label: 'Others', value: 'Others' }
        ]
        let socialInputs;
        if (displaySocialInputs) {
            socialInputs = (
                <div>
                    <InputGroup
                        type="wechat"
                        id="wechat"
                        name="wechat"
                        error={errors.wechat}
                        placeholder="Wechat"
                        value={this.state.wechat}
                        onChange={this.onChange}
                        icon="fab fa-weixin" />
                    <InputGroup
                        type="QQ"
                        id="QQ"
                        name="QQ"
                        error={errors.QQ}
                        placeholder="QQ"
                        value={this.state.QQ}
                        onChange={this.onChange}
                        icon="fab fa-qq"
                    />
                    <InputGroup
                        type="tengxunkt"
                        id="tengxunkt"
                        name="tengxunkt"
                        error={errors.tengxunkt}
                        placeholder="Tencent url"
                        value={this.state.tengxunkt}
                        onChange={this.onChange}
                        icon="fas fa-video"
                    />
                    <InputGroup
                        type="wangyiyunkt"
                        id="wangyiyunkt"
                        name="wangyiyunkt"
                        error={errors.wangyiyunkt}
                        placeholder="Netease url"
                        value={this.state.wangyiyunkt}
                        onChange={this.onChange}
                        icon="fas fa-video"
                    />
                </div>
            );
        }
        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">
                                Create User Profile
                            </h1>
                            <p className="lead text-center">Please fill in the form with your personal particulars.</p>
                            <small className="d-block pb-3">* Required</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    type="handle"
                                    id="handle"
                                    name="handle"
                                    error={errors.handle}
                                    placeholder="* Profile Handle"
                                    value={this.state.handle}
                                    onChange={this.onChange}
                                    label="* Profile Handle"
                                    info="It's usually email and be used for checking data in the bankend."
                                />
                                <SelectListGroup
                                    id="status"
                                    name="status"
                                    error={errors.status}
                                    value={this.state.status}
                                    onChange={this.onChange}
                                    options={options}
                                    info="Position what you are working on."
                                />
                                <TextFieldGroup
                                    id="company"
                                    name="company"
                                    error={errors.company}
                                    placeholder="Company Name"
                                    value={this.state.company}
                                    onChange={this.onChange}
                                    label="Company Name"
                                    info="Your own company or the one which you are working "
                                />
                                <TextFieldGroup
                                    id="website"
                                    name="website"
                                    error={errors.website}
                                    placeholder="Website"
                                    value={this.state.website}
                                    onChange={this.onChange}
                                    label="Website"
                                    info="The Website of your own company or the one which you are working"
                                />
                                <TextFieldGroup
                                    id="location"
                                    name="location"
                                    error={errors.location}
                                    placeholder="Location"
                                    value={this.state.location}
                                    onChange={this.onChange}
                                    label="Location"
                                    info="Street, city, state and country"
                                />
                                <TextFieldGroup
                                    id="skills"
                                    name="skills"
                                    error={errors.skills}
                                    placeholder="* Skills"
                                    value={this.state.skills}
                                    onChange={this.onChange}
                                    label="* Skills"
                                    info="Computer language (eg. HTML, CSS, JavaScript)"
                                />
                                <TextFieldGroup
                                    id="githubusername"
                                    name="githubusername"
                                    error={errors.githubusername}
                                    placeholder="Github Username"
                                    value={this.state.githubusername}
                                    onChange={this.onChange}
                                    label="Github Username"
                                    info="Fill in the field if you want to share your projects"
                                />
                                <TextAreaFieldGroup
                                    id="bio"
                                    name="bio"
                                    error={errors.bio}
                                    placeholder="Introduce youself"
                                    value={this.state.bio}
                                    onChange={this.onChange}
                                    label="Introduce youself"
                                    info="Simply introduce youself here"
                                />
                                <div className="mb-3">
                                    <small className="mr-3 pb-3">Optional</small>
                                    <button className="btn btn-light" type="button" onClick={() => {
                                        this.setState((prevState) => ({
                                            displaySocialInputs: !prevState.displaySocialInputs
                                        })
                                        )
                                    }}>Add Social Accounts</button>
                                </div>
                                {socialInputs}
                                <button type="submit" className="btn btn-info btn-block mt-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object,
    addProfile: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    profile: state.profile,
    errors: state.errors
})
export default connect(mapStateToProps, { addProfile })(withRouter(CreateProfile));