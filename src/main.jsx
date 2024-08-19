import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CacheContextProvider from './context/cache-context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CacheContextProvider>
      <App />
    </CacheContextProvider>
  </BrowserRouter>
)
