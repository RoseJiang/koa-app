import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const SelectListGroup = ({
    id,
    name,
    value,
    label,
    error,
    info,
    onChange,
    options
}) => {
    const selectOptions = options.map((option, index) => (<option key={option.label} value={option.value}>{option.value}</option>))
    return (
        <div className="form-label-group">
            <select id={id}
                name={name}
                className={classNames("form-control", { 'is-invalid': error })}
                value={value} onChange={onChange} >
                {selectOptions}
            </select>
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
SelectListGroup.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    error: PropTypes.string,
    info: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
};

export default SelectListGroup;