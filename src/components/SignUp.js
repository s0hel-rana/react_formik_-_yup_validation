import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react'

const SignUp = () => {

    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            name:yup.string().min(4,'minimum at least four characters').required(),
            email:yup.string().email().required(),
            password:yup.string().min(6,'minimum at least six characters').required(),
        }),
        onSubmit: (values,{resetForm}) =>{
            console.log(values);
            resetForm ({values:""})
        },
    });

    const renderNameError = formik.touched.name && formik.errors.name && <span style={{ color:"red" }}>{formik.errors.name}</span>
    const renderEmailError = formik.touched.email && formik.errors.email && <span style={{ color:"red" }}>{formik.errors.email}</span>
    const renderPasswordError = formik.touched.password && formik.errors.password && <span style={{ color:"red" }}>{formik.errors.password}</span>


    // console.error(formik.errors);

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
    </div>
  )
}

export default SignUp