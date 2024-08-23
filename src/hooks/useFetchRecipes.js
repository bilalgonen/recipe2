import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export function useFetchRecipes() {
  const [url, setUrl] = useState()
  const [searchParams, setSearchParams] = useSearchParams()

  const q = searchParams.get('q') || ''
  const page = searchParams.get('page') || 1
  const limit = 3
  const skip = (page - 1) * limit
  // console.log('skip:', skip)

  useEffect(() => {
    setUrl(
      `https://dummyjson.com/recipes/search?limit=${limit}&skip=${skip}&q=${q}`
    )
    // console.log('first url:', url)
  }, [page, q])

  const setFilters = useCallback((filters) => {
    console.log('first filters:', filters)
    setSearchParams((params) => {
      if (filters.q !== undefined) {
        params.set('q', filters.q)
        // params.set('page', '1')
      }

      if (filters.page) {
        params.set('page', filters.page)
      }

      return params
    })
    setUrl(
      `https://dummyjson.com/recipes/search?limit=${limit}&skip=${skip}&q=${q}`
    )
  }, [])

  return {
    q,
    page,
    limit,
    url,
    setFilters,
  }
}
