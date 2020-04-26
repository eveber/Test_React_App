import React from "react";
import css from './FormsControls.module.scss'

export const ValidateFormControl = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    let ControlTag = props.validatetag;
    return (
        <div className={css.validateControlWrapper + ' ' + (hasError ? css.error : '')}>
            {hasError && <span>{meta.error}</span>}
            <ControlTag {...input} {...props} />
        </div>
    )
}

