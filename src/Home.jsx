import { useEffect, useRef, useState } from 'react'
import Card from './Card'
import Pagination from './Pagination'
import { useNavigate, useSearchParams } from 'react-router-dom'
import HomeHeader from './components/HomeHeader'
import useBuildColorMap from './hooks/useBuildColorMap'

function Home() {
  const colorMap = useBuildColorMap()
  const [items, setItems] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(searchParams.get('page') || 1)
  const [postsPerPage, setPostsPerPage] = useState(6)
  const [totalPosts, setTotalPosts] = useState(0)
  const searchTextRef = useRef()
  const BASE_URL = 'https://dummyjson.com/recipes'
  const navigate = useNavigate()
  const [q, setQ] = useState(searchParams.get('q') || '')
  // const { get, put, lruCache } = useLRUCache(3)

  const fetchItems = async () => {
    let url = ''
    if (q !== '') {
      url = `${BASE_URL}/search?q=${q}&limit=${postsPerPage}&skip=${
        (currentPage - 1) * postsPerPage
      }`
    } else {
      url = `${BASE_URL}?limit=${postsPerPage}&skip=${
        (currentPage - 1) * postsPerPage
      }`
    }
    // console.log('url:', url)
    const response = await fetch(url)
    const data = await response.json()
    setTotalPosts(data.total)
    setItems(data.recipes)
    // console.log('fetchItems items:', items)
  }

  useEffect(() => {
    setSearchParams((searchParams) => {
      searchParams.set('page', currentPage)
      return searchParams
    })
  }, [])

  useEffect(() => {
    // console.log('uE [currentPage], currPage:', currentPage)
    setSearchParams((searchParams) => {
      searchParams.set('page', currentPage)
      return searchParams
    })
    fetchItems()
  }, [currentPage])

  useEffect(() => {
    fetchItems()
  }, [searchParams])

  function handleSubmit(e) {
    e.preventDefault()
    // console.log(searchTextRef.current.value)
    setQ(searchTextRef.current.value)
    // console.log('handleSubmit: ', q)
    setSearchParams({ q: searchTextRef.current.value })
    fetchItems()
  }

  return (
    <>
      {/* <HomeHeader /> */}
      <div>
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6  py-12   px-1 sm:px-4'>
        {items.map((item) => (
          <Card key={item.id} item={item} colorMap={colorMap} />
        ))}
      </div>
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  )
}
export default Home
