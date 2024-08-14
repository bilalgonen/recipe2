import { useEffect, useState } from 'react'
import Card from './Card'

function Home() {
  const [items, setItems] = useState([])
  const [colorMap, setColorMap] = useState(new Map())

  //   const buildMap = (keys, values) => {
  //     const map = new Map()
  //     for (let i = 0; i < keys.length; i++) {
  //       map.set(keys[i], values[i])
  //     }
  //     return map
  //   }

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
    console.log(colorMap)
  }

  const fetchItems = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setItems(data.recipes)
    // console.log(data.recipes)
  }

  useEffect(() => {
    fetchItems('https://dummyjson.com/recipes?limit=6')
    buildColorMap()
  }, [])

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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12'>
        {items.map((item) => (
          <Card key={item.id} item={item} colorMap={colorMap} />
        ))}
      </div>
    </main>
  )
}
export default Home
