import { useState, useEffect } from 'react'

export default function useFetchRecipes() {
  const [recipes, setRecipes] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // const skip = (page - 1) * itemsPerPage
  // const url = `https://dummyjson.com/recipes/search?limit=${itemsPerPage}&skip=${skip}&q=${q}`
  //https://dummyjson.com/recipes?limit=2&skip=0

  useEffect(() => {
    const fetchData = async () => {
      //   console.log('useFetch fetchData [url]:', url)
      try {
        const response = await fetch(
          'https://dummyjson.com/recipes?limit=2&skip=0'
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        setRecipes(result)
        console.log('fetchData result:', result)
        console.log('fetchData recipes:', recipes)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { recipes, loading, error }
}
