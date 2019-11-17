import React from "react";
import {placeholder} from "@babel/types";
import {Field} from "redux-form";

const FormControl  = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div>
            {children}
        </div>
    )
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               className="filter-main-input -name form-control"
               {...props}
        /> {text}
    </div>
);