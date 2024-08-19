import React, {useEffect, useState} from 'react'

export default function useBuildColorMap() {
  const [colorMap, setColorMap] = useState(new Map())

  useEffect(() => {
    const buildColorMap = async () => {
      const response = await fetch('https://dummyjson.com/recipes/tags')
      const tagArray = await response.json()
      const colorArray = tagArray.map(() => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
      })
      const newMap = new Map()
      for (let i = 0; i < tagArray.length; i++) {
        newMap.set(tagArray[i], colorArray[i])
      }
      setColorMap(newMap)
    }
    buildColorMap()
  }, [])

  return colorMap
}
