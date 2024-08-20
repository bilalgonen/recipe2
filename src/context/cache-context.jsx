import { createContext, useContext, useEffect, useState } from 'react'
import { LRUCache } from '../utils/LRUCache'

export const CacheContext = createContext()

export default function CacheContextProvider({ children }) {
  const lru = new LRUCache(3)

  const [cache, setCache] = useState([])
  // { id: 1, name: 'Mango Salsa Chicken' },
  // { id: 2, name: 'Chicken Alfredo Pasta' },
  // { id: 3, name: 'Vegetarian Stir-Fry' },
  //   ])

  const put = (id, name) => {
    // console.log('in put, id-name:', id, name)
    lru.put(id, name)
    setCache(Array.from(lru.map, ([id, name]) => ({ id, name })))
    // console.log('in put:', cache)
  }

  //   useEffect(() => {
  // console.log('in CacheContextProvider:', cache)
  // setCache(Array.from(lru.map, ([id, name]) => ({ id, name })))
  //   }, [])

  //   lru.put(2, 'Chicken Alfredo Pasta')
  //   const lruArray = Array.from(lru.map.keys()).map((key) => lru.map.get(key))

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
