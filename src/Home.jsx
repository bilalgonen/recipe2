import useFetch from './hooks/useFetch'
import SearchNameCard from './components/SearchNameCard'
import Recipes from './components/Recipes'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Pagination from './Pagination'

export default function Home() {
  const [url, setUrl] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(searchParams.get('page') || 1)
  // const [currentPage, setCurrentPage] = useState(1)
  const { items, loading, Error } = useFetch(url)
  const postsPerPage = 6

  useEffect(() => {
    // if (!searchParams.get('page')) {
    //   console.log('first if')
    //   setCurrentPage(1)
    // } else {
    //   setCurrentPage(searchParams.get('page'))
    // }

    // console.log('currentPage:', currentPage)
    setSearchParams((searchParams) => {
      searchParams.set('page', currentPage)
      return searchParams
    })
    // console.log('useEff[currPage] searchParams page:', searchParams.get('page'))
    // console.log('url1:', url)
    // setUrl('https://dummyjson.com/recipes')
    setUrl(
      `https://dummyjson.com/recipes?limit=${postsPerPage}&skip=${
        (currentPage - 1) * postsPerPage
      }`
    )
    // console.log('url:', url)
  }, [currentPage])

  // useEffect(() => {
  //   console.log('useEffect[] searchParams page:', searchParams.get('page'))
  //   setCurrentPage(searchParams.get('page') || 1)
  //   console.log('currentPage:', currentPage)
  //   console.log('url1:', url)
  //   setUrl(
  //     `https://dummyjson.com/recipes?limit=${postsPerPage}&skip=${
  //       (currentPage - 1) * postsPerPage
  //     }`
  //   )
  //   console.log('url2:', url)
  // }, [])

  return (
    <div>
      <SearchNameCard setUrl={setUrl} />
      {loading && <div>Loading...</div>}
      {items && (
        <>
          <Recipes items={items} />
          <Pagination
            totalPosts={items.total}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
      {Error && <div>Error</div>}
    </div>
  )
}
