import { createContext, useContext, useEffect, useState } from 'react'
import LRU from '../utils/LRUCache'

export const CacheContext = createContext()

export default function CacheContextProvider({ children }) {

  const [cache, setCache] = useState([])

  const put = (id, name) => {
    LRU.put(id, name)
    setCache(Array.from(LRU.map, ([id, name]) => ({ id, name })))
    // console.log('in put:', cache)
  }

  return (
    <CacheContext.Provider value={{ cache, put }}>
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
