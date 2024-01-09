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
        image: Yup.mixed().required('Image is required'),
    });

    const formik = useFormik({
        initialValues: {
        name: '',
        email: '',
        password: '',
        image: null,
        },
        validationSchema,
        onSubmit: async (values, { resetForm, setStatus }) => {
            try {
                const reader = new FileReader();
        
                reader.onloadend = async () => {
                    const base64data = reader.result.split(',')[1];
        
                    const requestData = {
                        name: values.name,
                        email: values.email,
                        password: values.password,
                        image: values.image,
                    };
                    console.log(requestData);
                    try {
                        const response = await axios.post('http://localhost:5000/notes', requestData,
                        {headers: {
                            'Content-Type': 'multipart/form-data',
                        }});
                        console.log('Response:', response.data);
                        setMessage(response.data.message);
                        resetForm();
                    } catch (error) {
                        console.error('Error:', error);
                    }
                };
        
                // Read the file as a data URL
                if (values.image) {
                    reader.readAsDataURL(values.image);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        },
        
    });

    return (
        <div>
            <h1>Register</h1>
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
            <div className="new_subscription_control">
                <label htmlFor="">Image</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
                />
                {formik.touched.image && formik.errors.image && <p className="error">{formik.errors.image}</p>}
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
