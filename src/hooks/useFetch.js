import { useState, useEffect } from 'react'

export default function useFetch(q, page = 1, itemsPerPage = 6) {
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const skip = (page - 1) * itemsPerPage
  const url = `https://dummyjson.com/recipes/search?limit=${itemsPerPage}&skip=${skip}&q=${q}`

  useEffect(() => {
    async function fetchData() {
      //   console.log('useFetch useEffect [url]:', url)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        setItems(result)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { items, loading, error }
}
