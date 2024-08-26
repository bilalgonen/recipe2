import { createContext, useContext, useEffect, useState } from 'react'

export const TagContext = createContext()

export default function TagContextProvider({ children }) {
  const [tags, setTags] = useState([])
  const [loading, setLoading] = useState(true)
  const [colorMap, setColorMap] = useState(new Map())

  function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  useEffect(() => {
    fetch('https://dummyjson.com/recipes/tags')
      .then((response) => response.json())
      .then((data) => {
        setTags(data)
        // console.log('data:', data)
        // console.log('tags:', tags)
        const colorArray = data.map(() => {
          return getRandomColor()
        })
        // console.log('colorArray:', colorArray)
        const newMap = new Map()
        for (let i = 0; i < data.length; i++) {
          newMap.set(data[i], colorArray[i])
        }
        // console.log('newMap:', newMap)
        setColorMap(newMap)
        // console.log('colorMap:', colorMap)
      })
      .catch((error) => {
        console.log('Error fetching data', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <TagContext.Provider value={{ tags, loading, colorMap }}>
      {children}
    </TagContext.Provider>
  )
}

export function useTagContext() {
  const context = useContext(TagContext)
  if (!context) {
    throw new Error('useTagContext must be used within a TagContextProvider')
  }
  return context
}
