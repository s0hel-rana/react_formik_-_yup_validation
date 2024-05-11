import { useFormik } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';

const SignUp = () => {
    const [submittedData, setSubmittedData] = useState([]);

    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            name: yup.string().min(4,'minimum at least four characters').required(),
            email: yup.string().email().required(),
            password: yup.string().min(6,'minimum at least six characters').required(),
        }),
        onSubmit: (values, { resetForm }) => {
            // Update submitted data state
            setSubmittedData([...submittedData, values]);
            console.log(values);
            resetForm ({ values: "" });
        },
    });

    const renderNameError = formik.touched.name && formik.errors.name && <span style={{ color:"red" }}>{formik.errors.name}</span>;
    const renderEmailError = formik.touched.email && formik.errors.email && <span style={{ color:"red" }}>{formik.errors.email}</span>;
    const renderPasswordError = formik.touched.password && formik.errors.password && <span style={{ color:"red" }}>{formik.errors.password}</span>;

    return (
        <div className="userForm">
            <h2>User Sign Up</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className='inputFiled'>
                    <label className='label' htmlFor="name">Name : </label>
                    <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
                    <br />
                    {renderNameError}
                </div>
                <div className='inputFiled'>
                    <label className='label' htmlFor="email">Email : </label>
                    <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                    <br />
                    {renderEmailError}
                </div>
                <div className='inputFiled'>
                    <label htmlFor="password">Password : </label>
                    <input type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
                    <br />
                    {renderPasswordError}
                </div>
                <button type="submit">Sign Up</button>
            </form>

            {/* Display submitted data in a table */}
            {submittedData.length > 0 && (
                <div className="submittedData">
                    <h2>User Data</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submittedData.map((data, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default SignUp;
