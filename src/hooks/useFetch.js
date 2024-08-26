import { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // const skip = (page - 1) * itemsPerPage
  // const url = `https://dummyjson.com/recipes/search?limit=${itemsPerPage}&skip=${skip}&q=${q}`

  
  const fetchData = async () => {
    console.log('useFetch fetchData [url]:', url)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const result = await response.json()
      setItems(result)
      console.log('fetchData result:', result)
      console.log('fetchData items:', items)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { items, loading, error, fetchData }
}
