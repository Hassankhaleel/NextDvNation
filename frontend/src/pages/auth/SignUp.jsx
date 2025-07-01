import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '../../assets/logo2.png'
import api from '../../../utils/axios'

// Yup validation schema
const SignUpSchema = Yup.object().shape({
  username: Yup.string().min(3, "Too Short").required("Username is required"),
  email: Yup.string().email('Invalid Email').required("Email is required"),
  password: Yup.string().min(6, "Minimum 6 Characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords must match")
    .required("Confirm your password"),
});

const SignUp = () => {

  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      await api.post('/auth/sign-up', values); 
      actions.resetForm();
  
      navigate('/auth/sign-in');
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="w-full h-[100%] flex flex-col md:flex-row  overflow-hidden">
      {/* Left Side - Image */}
      <div className="w-full h-full md:w-1/2 hidden md:block">
        <img
          src={logo} // Replace with your actual image path
          alt="Signup Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Create an Account</h2>
          <Formik
            initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4 w-full">
                <div>
                  <label htmlFor="username" className="block text-left w-full mb-1 font-medium">Username</label>
                  <Field name="username" className="w-full border p-2 rounded" />
                  <ErrorMessage name="username" component="div" className="text-red-500 text-sm text-left" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-left w-full mb-1 font-medium">Email</label>
                  <Field name="email" type="email" className="w-full border p-2 rounded" />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm text-left" />
                </div>

                <div>
                  <label htmlFor="password" className="block text-left w-full mb-1 font-medium">Password</label>
                  <Field name="password" type="password" className="w-full border p-2 rounded" />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm text-left" />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-left w-full mb-1 font-medium">Confirm Password</label>
                  <Field name="confirmPassword" type="password" className="w-full border p-2 rounded" />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm text-left" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#10F493] text-black font-bold px-4 py-2 rounded hover:bg-[#7bebba] w-full cursor-pointer"
                >
                  {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </button>

                <p className="text-sm text-center mt-4">
                  Already have an account?{' '}
                  <Link to="/auth/sign-in" className="text-blue-600 hover:underline">
                    Sign In
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
