import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CacheContextProvider from './context/cache-context.jsx'
import TagContextProvider from './context/tag-context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CacheContextProvider>
      <TagContextProvider>
        <App />
      </TagContextProvider>
    </CacheContextProvider>
  </BrowserRouter>
)
