import useFetch from './hooks/useFetch'
import SearchNameCard from './components/SearchNameCard'
import Recipes from './components/Recipes'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Pagination from './Pagination'

export default function Home2() {
  const [url, setUrl] = useState('https://dummyjson.com/recipes')
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(searchParams.get('page') || 1)
  const [postsPerPage, setPostsPerPage] = useState(6)
  const [totalPosts, setTotalPosts] = useState(0)

  // const colorMap = useBuildColorMap()

  // 'https://dummyjson.com/recipes?limit=10&skip=10'

  const BASE_URL = 'https://dummyjson.com/recipes'
  // let url = BASE_URL
  const { items, loading, Error } = useFetch(url)

  function handleClick() {
    // url = `${BASE_URL}?limit=4&skip=10`
    setUrl('https://dummyjson.com/recipes?limit=4&skip=10')
    console.log('url:', url)
  }

  useEffect(() => {
    setSearchParams((searchParams) => {
      searchParams.set('page', currentPage)
      return searchParams
    })
    console.log('url1:', url)
    setUrl(
      `${BASE_URL}?limit=${postsPerPage}&skip=${
        (currentPage - 1) * postsPerPage
      }`
    )
    console.log('url2:', url)
  }, [currentPage])

  // useEffect(() => {
  //   console.log('useEffect url:', url)
  //   const { items, loading, Error } = useFetch(url)
  //   console.log('Home2 items:', items)
  // }, [url])

  return (
    <div>
      <SearchNameCard setUrl={setUrl} />
      <button onClick={handleClick}>items</button>
      {/* <Recipes /> */}
      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6  py-12   px-1 sm:px-4'> */}
      {loading && <div>Loading...</div>}
      {items && <Recipes items={items} />}
      {/* {items &&
          items.recipes.map((item, index) => (
            <Card key={item.id} item={item} colorMap={colorMap} />
          ))} */}
      {Error && <div>Error</div>}
      {/* </div> */}
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}
