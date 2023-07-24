// hooks/useFormValidation.js
import { useEffect } from 'react';
import { useState } from 'react';

const useFormValidation = (initialState, validate) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(values));
        setSubmitting(true);
    };
    useEffect(() => {
        setSubmitting(false);
        setErrors({})
    }, [values.name, values.email, values.password])
    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
    };
};

export default useFormValidation;
