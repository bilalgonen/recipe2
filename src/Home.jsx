import { useEffect, useState } from 'react'
import Card from './Card'

function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems('https://dummyjson.com/recipes?limit=6')
  }, [])

  const fetchItems = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setItems(data.recipes)
    console.log(data.recipes)
  }

  return (
    <main className='container mx-auto px-1 py-4'>
      <h1 className='text-4xl font-bold text-center p-6'>Recipes App </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12'>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}
export default Home
