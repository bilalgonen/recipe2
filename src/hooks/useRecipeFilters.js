import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

export function useRecipeFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const q = searchParams.get('q') || ''
  const page = searchParams.get('page') || 1

  const setFilters = useCallback((filters) => {
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
  }, [])

  return {
    q,
    page,
    setFilters,
  }
}
