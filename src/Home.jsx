import useFetch from './hooks/useFetch'
import SearchNameCard from './components/SearchNameCard'
import Recipes from './components/Recipes'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Pagination from './Pagination'

export default function Home() {
  const [url, setUrl] = useState('https://dummyjson.com/recipes?page=1')
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(searchParams.get('page') || 1)
  const [postsPerPage, setPostsPerPage] = useState(6)
  const { items, loading, Error } = useFetch(url)

  useEffect(() => {
    setSearchParams((searchParams) => {
      searchParams.set('page', currentPage)

      return searchParams
    })
    // console.log('url1:', url)
    setUrl(
      `https://dummyjson.com/recipes?limit=${postsPerPage}&skip=${
        (currentPage - 1) * postsPerPage
      }`
    )
    // console.log('url2:', url)
  }, [currentPage])

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
