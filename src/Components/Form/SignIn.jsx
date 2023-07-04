import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useContext, useState } from "react";
import { ContextProvider } from "../../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Please type your email"),

  password: Yup.string()
    .min(4, "password must be four digit")
    .max(50, "To higher numbers of characters")
    .required("Please type your password"),
});

const SignIn = () => {
  const { userSignIn } = useContext(ContextProvider);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      setError("");

      userSignIn(values.email, values.password)
      .then( ()=> {
        navigate('/')
      })
      .catch(err =>{
        setError(err.message);
      })
    },
  });

  return (
    <div className="">
      <form
        className="max-w-md w-full mx-auto bg-gray-100 p-3"
        onSubmit={formik.handleSubmit}
      >
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
            {error && <small>{error}</small>}
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Sign in
          </button>
        </div>
        <small>
          Don't have an account?{" "}
          <Link to={"/sign-up"} className="text-blue-500 underline">
            Sign up
          </Link>
        </small>
      </form>
    </div>
  );
};

export default SignIn;
