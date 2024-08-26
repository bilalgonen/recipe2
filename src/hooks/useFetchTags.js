import { useState, useEffect } from 'react'

export default function useFetchTags() {
  const [tags, setTags] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // const skip = (page - 1) * itemsPerPage
  // const url = `https://dummyjson.com/recipes/search?limit=${itemsPerPage}&skip=${skip}&q=${q}`

  useEffect(() => {
    const fetchData = async () => {
      //   console.log('useFetch fetchData [url]:', url)
      try {
        const response = await fetch('https://dummyjson.com/recipes/tags')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        setTags(result)
        console.log('fetchData result:', result)
        console.log('fetchData tags:', tags)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { tags, loading, error }
}
