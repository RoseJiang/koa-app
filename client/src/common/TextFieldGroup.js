import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const TextFieldGroup = ({
    id,
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) => {
    return (
        <div className="form-label-group">
            <input id={id}
                name={name}
                type={type}
                className={classNames("form-control", { 'is-invalid': error })}
                placeholder={placeholder} value={value}
                onChange={onChange}
                disabled={disabled}
            />
            <label htmlFor={id}>{label}</label>
            <span className="text-muted small">{info}</span>
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
TextFieldGroup.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    error: PropTypes.string,
    info: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string
};
TextFieldGroup.defaultProps = {
    type: 'text'
}
export default TextFieldGroup;