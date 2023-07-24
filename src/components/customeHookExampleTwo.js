
import React from 'react';
import useFormValidation from '../hooks/useFormValidation';
import "./style.css"
const ExampleTwo = () => {
    const initialState = {
        name: '',
        email: '',
        password: '',
    };

    const validate = (values) => {
        let errors = {};

        // Add your validation logic here
        if (!values.name) {
            errors.name = 'Name is required';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        return errors;
    };

    const {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
    } = useFormValidation(initialState, validate);


    return (
        <div className='App'>
            <div className='block'>
                <h1>Form Validation Demo</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />

                    </div>
                    {errors.name &&
                        <span className="error block">{errors.name}</span>

                    }
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.email && <span className="error">{errors.email}</span>}
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.password && <span className="error">{errors.password}</span>}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ExampleTwo;
