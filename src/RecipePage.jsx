import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCacheContext } from './context/cache-context'

export default function RecipePage() {
  const { put } = useCacheContext()

  const { id } = useParams()
  const [item, setItem] = useState()

  const getRecipe = async (id) => {
    console.log('getRecipe id:', id)
    const response = await fetch(`https://dummyjson.com/recipes/${id}`)
    const data = await response.json()
    setItem(data)
    if (data) put(item)
    console.log('getRecipe data:', data)
  }

  useEffect(() => {
    getRecipe(id)
  }, [id])

  return (
    <>
      {!item ? (
        <p>Loading...</p>
      ) : (
        <section>
          <h1 className='text-4xl py-3 font-merriweather1 hover:text-red-600 transition duration-300 '>
            {item.name}
          </h1>
          <div className='max-w-screen-xl mx-auto justify-center gap-2 sm:gap-8 py-2 px-1 sm:px-2'>
            <img
              className=' h-96  object-cover rounded-lg mx-auto'
              src={item?.image}
              alt='img'
            />
          </div>
          <div className='flex flex-col justify-between p-1 gap-y-0'>
            <div className='text-red-900 font-semibold text-lg'>
              Instructions
            </div>
            <ul className='flex flex-col items-left gap-2 list-disc list-inside'>
              {item.instructions.map((instruction, index) => (
                <li key={index} className='text-sm'>
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
