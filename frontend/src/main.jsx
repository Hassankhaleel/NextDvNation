import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import SignIn from './pages/auth/SignIn.jsx';
import SignUp from './pages/auth/SignUp.jsx';
import Home from './pages/Home.jsx';
import UserProfile from './pages/UserProfile.jsx';




const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: 'auth/sign-in', element: <SignIn /> },
  { path: 'auth/sign-up', element: <SignUp /> },
  {path: 'home', element: <Home />},
  {path: '/user/profile', element: <UserProfile />}
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
