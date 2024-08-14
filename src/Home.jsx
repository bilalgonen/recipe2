import { useEffect, useState } from 'react'
import Card from './Card'
import Pagination from './Pagination'

function Home() {
  const [colorMap, setColorMap] = useState(new Map())
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(6)
  const [totalPosts, setTotalPosts] = useState(0)

  const buildColorMap = async () => {
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

  const fetchItems = async (url) => {
    let url2 = `${url}?limit=${postsPerPage}&skip=${
      (currentPage - 1) * postsPerPage
    }`
    // console.log('url2:', url2)
    const response = await fetch(url2)
    const data = await response.json()
    // console.log('total:', data.total)
    setTotalPosts(data.total)
    setItems(data.recipes)
  }

  useEffect(() => {
    // console.log('In use effect, currPage:', currentPage)
    fetchItems('https://dummyjson.com/recipes')
    buildColorMap()
    // console.log('items:', items)
  }, [currentPage])

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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 mb-8'>
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
