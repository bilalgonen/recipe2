import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export function useFetchRecipes() {
  const [url, setUrl] = useState()
  const [searchParams, setSearchParams] = useSearchParams()

  const tag = searchParams.get('tag') || undefined
  const q = searchParams.get('q') || undefined
  const page = searchParams.get('page') || 1
  const limit = 3
  const skip = (page - 1) * limit

  useEffect(() => {
    if (searchParams.get('tag')) {
      setUrl(
        `https://dummyjson.com/recipes/tag/${tag}?limit=${limit}&skip=${skip}`
      )
      console.log('tag url:', url)
      return
    } else if (searchParams.get('q')) {
      setUrl(
        `https://dummyjson.com/recipes/search?limit=${limit}&skip=${skip}&q=${q}`
      )
      console.log('q url:', url)
    } else {
      setUrl(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
      console.log('else url:', url)
    }
  }, [])

  // setUrl(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
  // console.log('url:', url)
  // console.log('skip:', skip)

  // useEffect(() => {
  //   if (searchParams.get('tag')) {
  //     setUrl(
  //       `https://dummyjson.com/recipes/tag/${tag}?limit=${limit}&skip=${skip}`
  //     )
  //     console.log('tag url:', url)
  //     return
  //   } else if (searchParams.get('q')) {
  //     setUrl(
  //       `https://dummyjson.com/recipes/search?limit=${limit}&skip=${skip}&q=${q}`
  //     )
  //     console.log('q url:', url)
  //   } else {
  //     setUrl(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
  //     console.log('else url:', url)
  //   }
  // }, [page, q, tag])

  const setFilters = useCallback((filters) => {
    console.log('setFilters filters:', filters)
    setSearchParams((params) => {
      console.log('setFilters params:', params)
      console.log('setFilters params q:', params.get('q'))
      console.log('setFilters params page:', params.get('page'))
      console.log('setFilters params tag:', params.get('tag'))

      if (filters.tag !== undefined) {
        console.log(' if (filters.tag !== undefined)')
        params.set('tag', filters.tag)
        // params.delete('q')
      } else if (filters.q !== undefined) {
        console.log('filters.q !== undefined)')
        params.set('q', filters.q)
        // params.delete('tag')
      }
      params.set('page', filters.page)

      return params
    })
  }, [])

  return {
    q,
    page,
    tag,
    limit,
    url,
    setFilters,
  }
}
