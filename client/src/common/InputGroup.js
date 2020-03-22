import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const InputGroup = ({
    id,
    name,
    placeholder,
    value,
    //label,
    error,
    icon,
    type,
    onChange
}) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className={icon} aria-hidden="true"></i>
                </span>
            </div>
            <input type={type}
                id={id}
                name={name}
                className={classNames("form-control", { 'is-invalid': error })}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
            {/* <label htmlFor={id}>{label}</label> */}
            {
                error && (
                    <div className="invalid-feedback">
                        {error}
                    </div>
                )
            }
        </div>
    );
};
InputGroup.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    //label: PropTypes.string,
    error: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
InputGroup.defaultProps = {
    tyoe: 'text'
}
export default InputGroup;