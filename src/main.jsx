import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataProvider } from './Component/Context/Context.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
    <HelmetProvider>
    <App />
    </HelmetProvider>
    </DataProvider>
    <ToastContainer />
  </StrictMode>,
)
