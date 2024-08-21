import React, { useRef } from 'react'
import useFetch from '../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'

export default function SearchNameCard({ setUrl }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchTextRef = useRef()
  const BASE_URL = 'https://dummyjson.com/recipes/search'

  function handleSubmit(e) {
    e.preventDefault()
    const qvalue = searchTextRef.current.value
    // console.log(searchTextRef.current.value)
    // setQ(searchTextRef.current.value)
    console.log('handleSubmit qvalue: ', qvalue)
    setSearchParams({ q: searchTextRef.current.value })
    let url2 = `${BASE_URL}?q=${qvalue}`
    setUrl(url2)
    // console.log('url:', url)

    // fetchItems()
  }

  return (
    <div>
      {' '}
      <form
        onSubmit={handleSubmit}
        className='flex flex-row gap-2 px-1 lg:px-10'
      >
        <label>
          Search in Recipe Title:
          <input
            type='text'
            ref={searchTextRef}
            placeholder='recipe title...'
          />
        </label>
        <input type='submit' value='Search' className='cursor-pointer' />
      </form>
    </div>
  )
}
