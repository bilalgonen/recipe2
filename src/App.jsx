import { useEffect, useState } from 'react'
// import './App.css'
import Card from './Card'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems('https://dummyjson.com/recipes')
  }, [])

  const fetchItems = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setItems(data.recipes)
    console.log(data.recipes)
  }

  return (
    <div className='grid grid-cols-3 space-y-20'>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}
export default App
