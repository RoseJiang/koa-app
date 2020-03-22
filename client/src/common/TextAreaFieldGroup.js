import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const TextAreaFieldGroup = ({
    id,
    name,
    placeholder,
    value,
    error,
    info,
    onChange
}) => {
    return (
        <div className="form-label-group">
            <textarea id={id}
                name={name}
                className={classNames("form-control", { 'is-invalid': error })}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
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
TextAreaFieldGroup.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    error: PropTypes.string,
    info: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;