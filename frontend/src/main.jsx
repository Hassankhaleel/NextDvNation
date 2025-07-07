import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import './index.css'
import App from './App.jsx'
import SignIn from './pages/auth/SignIn.jsx'
import SignUp from './pages/auth/SignUp.jsx'
import UserProfile from './pages/UserProfile.jsx'
import store from './redux/slices/resourceSlice.js'
import Dashboard from './pages/dashboard/Dashboard.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'auth/sign-in',
    element: <SignIn />
  },
  {
    path: 'auth/sign-up',
    element: <SignUp />
  },
  {
    path: 'user/profile',
    element: <UserProfile />
  },
  {
    path: 'user/dashboard',
    element: <Dashboard />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
  </StrictMode>,
)
