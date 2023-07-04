import {  useFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios'
import { useContext, useState } from "react";
import { ContextProvider } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short at least type two character")
    .max(20, "Too long must be less then 20 characters")
    .required("Please type your name"),

  email: Yup.string().email("Invalid email").required("Please type your email"),

  password: Yup.string()
    .min(4, "password must be four digit")
    .max(50, "To higher numbers of characters")
    .required("Please type your password"),

  confirmPassword: Yup.string()
    .required("Type your confirm password")
    .oneOf([Yup.ref("password"), null], "password not match"),
});

const SignUp = () => {
  const { createUser} = useContext(ContextProvider)
  const [error, setError] = useState('')
    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: SignUpSchema,
      onSubmit: (values) => {
        setError('')


        createUser(values.email, values.password)
        .then(user => {
          const currentUser = user.user;
        })

       axios.post("http://localhost:5000/users", values)
       .then(res => {
        if(res.data.error){

          setError('User already sign up please sign in')
        }
       })
        
      },
    })
    
  return (
    <div className="">
      <form
        className="max-w-md w-full mx-auto bg-gray-100 p-3"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.name && (
            <small className="text-red-500">{formik.errors.name}</small>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="text"
            placeholder="email"
            className="input input-bordered"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <small className="text-red-500">{formik.errors.email}</small>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="text"
            placeholder="password"
            className="input input-bordered"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <small className="text-red-500">{formik.errors.password}</small>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            name="confirmPassword"
            type="text"
            placeholder="confirm-password"
            className="input input-bordered"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <small className="text-red-500">
              {formik.errors.confirmPassword}
            </small>
          )}

            {error && <small className="text-red-500">{error}</small>}

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
        </div>

        <small>Already an account <Link to={'/sign-in'} className="text-blue-500 underline">Sign in</Link></small>
      </form>
    </div>
  );
};

export default SignUp;
