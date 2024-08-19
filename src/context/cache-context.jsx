import { createContext, useContext, useState } from 'react'

export const CacheContext = createContext()

export default function CacheContextProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const [cache, setCache] = useState([
    { id: 1, name: 'Mango Salsa Chicken' },
    { id: 2, name: 'Chicken Alfredo Pasta' },
    { id: 3, name: 'Vegetarian Stir-Fry' },
  ])
  return (
    <CacheContext.Provider value={{ theme, setTheme, cache, setCache }}>
      {children}
    </CacheContext.Provider>
  )
}

export function useCacheContext() {
  const context = useContext(CacheContext)
  if (!context) {
    throw new Error(
      'useCacheContext must be used within a CacheContextProvider'
    )
  }
  return context
}
