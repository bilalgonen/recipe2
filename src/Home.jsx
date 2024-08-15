import { useEffect, useRef, useState } from 'react'
import Card from './Card'
import Pagination from './Pagination'
import { useNavigate, useSearchParams } from 'react-router-dom'

function Home() {
  const [colorMap, setColorMap] = useState(new Map())
  const [items, setItems] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(searchParams.get('page') || 1)
  const [postsPerPage, setPostsPerPage] = useState(6)
  const [totalPosts, setTotalPosts] = useState(0)
  const searchTextRef = useRef()
  const BASE_URL = 'https://dummyjson.com/recipes'
  const navigate = useNavigate()
  const [q, setQ] = useState(searchParams.get('q') || '')

  const fetchItems = async () => {
    // const searchPar = searchParams.get('search') || ''
    // console.log('searchParams:', searchParams)
    // console.log('fetchItems q:', q)
    // if (q !== '') {
    //   console.log('fetchItems q is :', q)
    // }
    // setSearchParams((searchParams) => {
    //   searchParams.set('page', currentPage)
    //   return searchParams
    // })

    let url = ''
    // let url = `${BASE_URL}?limit=${postsPerPage}&skip=${
    //   (currentPage - 1) * postsPerPage
    // }`
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
    // console.log('fetchItems data:', data)
    // console.log('total:', data.total)
    setTotalPosts(data.total)
    setItems(data.recipes)
    // console.log('fetchItems items:', items)
  }

  useEffect(() => {
    // console.log('useEffect []')
    const buildColorMap = async () => {
      //   console.log('In buildColorMap')
      const response = await fetch('https://dummyjson.com/recipes/tags')
      const tagArray = await response.json()
      const colorArray = tagArray.map(() => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
      })
      const newMap = new Map()
      for (let i = 0; i < tagArray.length; i++) {
        newMap.set(tagArray[i], colorArray[i])
      }
      setColorMap(newMap)
    }
    buildColorMap()
    setSearchParams((searchParams) => {
      searchParams.set('page', currentPage)
      return searchParams
    })
    // console.log('useEffect [] DONE')
  }, [])

  useEffect(() => {
    // console.log('uE [currentPage], currPage:', currentPage)
    fetchItems()
    // buildColorMap()
    // console.log('items:', items)
  }, [currentPage])

  useEffect(() => {
    // console.log('uE [searchParams], currPage:', currentPage)

    fetchItems()
    // console.log('items:', items)
  }, [searchParams])

  function handleSubmit(e) {
    e.preventDefault()
    // console.log(searchTextRef.current.value)
    setQ(searchTextRef.current.value)
    // console.log('handleSubmit: ', q)
    setSearchParams({ q: searchTextRef.current.value })
    // navigate(`/?search=${encodeURIComponent(searchPar)}`)
    // navigate(`/?search=${searchTextRef.current.value}`)
    // navigate(`/?search=Margherita`)
    fetchItems()
    // fetchItems(
    //   `https://dummyjson.com/recipes?search=${searchTextRef.current.value}`
    // )
  }

  return (
    <main className='container mx-auto px-1 py-4'>
      <div className='text-4xl font-bold text-center pt-6'>Recipes App</div>
      <a
        href='https://bilalgonen.com/'
        target='_blank'
        className='text-sm italic text-center pb-6 block'
      >
        by Bilal Gonen
      </a>
      <div>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col sm:flex-row gap-2'
        >
          <label>
            Search in Recipe Title :
            <input
              type='text'
              ref={searchTextRef}
              placeholder='recipe title...'
            />
          </label>
          <input type='submit' value='Search' />
        </form>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 py-12'>
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
    </main>
  )
}
export default Home
