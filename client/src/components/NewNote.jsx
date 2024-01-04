import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './NewNote.css'


const NewNote = () => {
    const [message, setMessage] = useState('Hii');
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(4, 'Password must be at least 8 characters').required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
        name: '',
        email: '',
        password: '',
        },
        validationSchema,
        onSubmit: async (values , { resetForm, setStatus }) => {
        try {
            const response = await axios.post('http://localhost:5000/notes', values);
            console.log('Response:', values);
            setMessage(response.data.message);
            resetForm();
        } catch (error) {
            console.error('Error:', error);
        }
        },
    });

    return (
        <div>
        <form onSubmit={formik.handleSubmit}>
            <div className="new_subscription_controls">
            <div className="new_subscription_control">
                <label htmlFor="">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && <p className="error">{formik.errors.name}</p>}
            </div>
            <div className="new_subscription_control">
                <label htmlFor="">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}
            </div>
            <div className="new_subscription_control">
                <label htmlFor="">Password</label>
                <input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                <p className="error">{formik.errors.password}</p>
                )}
            </div>
            </div>
            <div className="new_subscription_actions">
            <button type="submit">Register</button>
            </div>
        </form>
        {message && <p>{message}</p>}
        </div>
    );
};

export default NewNote;
