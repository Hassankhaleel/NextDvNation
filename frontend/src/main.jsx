import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './00_Main/App'
import { RouterProvider } from 'react-router'
import routing from './03_Paginations/Routers/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routing} />
  </StrictMode>,
)
