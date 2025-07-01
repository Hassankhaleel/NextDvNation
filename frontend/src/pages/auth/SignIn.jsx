import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '../../assets/logo2.png';
import api from '../../../utils/axios'

// Yup validation schema for Login
const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {

  const navigate = useNavigate()

  const handleSubmit = async (values, actions) => {
    try {
      await api.post('/auth/sign-in', values); 
      actions.resetForm();

      navigate('/user/profile')
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="w-full h-[100%] flex flex-col md:flex-row overflow-hidden">
      {/* Left Side - Image */}
      <div className="w-full h-full md:w-1/2 hidden md:block">
        <img
          src={logo}
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Welcome Back</h2>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={LoginSchema}
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
                  <label htmlFor="password" className="block text-left w-full mb-1 font-medium">Password</label>
                  <Field name="password" type="password" className="w-full border p-2 rounded" />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm text-left" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#10F493] text-black font-bold px-4 py-2 rounded hover:bg-[#7bebba] w-full cursor-pointer"
                >
                  {isSubmitting ? 'Logging In...' : 'Login'}
                </button>

                <p className="text-sm text-center mt-4">
                  Don't have an account?{' '}
                  <Link to="/auth/sign-up" className="text-blue-600 hover:underline">
                    Sign Up
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

export default SignIn;
