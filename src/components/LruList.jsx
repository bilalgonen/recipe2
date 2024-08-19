import React from 'react'
import { useCacheContext } from '../context/cache-context'
import { Link } from 'react-router-dom'

export default function LruList() {
  const { cache } = useCacheContext()
  return (
    <>
      <div className='font-semibold text-red-900'>Recently Visited Recipes</div>
      <div className='flex flex-col'>
        {cache.map((item, index) => (
          <Link to={`/recipe/${item.id}`} key={index} className='text-sm'>
            {item.name}
          </Link>
        ))}
      </div>
    </>
  )
}
