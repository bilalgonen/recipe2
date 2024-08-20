import React from 'react'
import { useCacheContext } from '../context/cache-context'
import { Link } from 'react-router-dom'

export default function LruList() {
  const { cache } = useCacheContext()
  //   console.log('in LruList:', cache)
  return (
    <div className='flex-none bg-stone-300 border border-gray-800 w-full sm:w-[240px] lg:w-[340px] h-fit p-1 gap-2'>
      <div className='font-semibold text-red-900'>
        Recently Visited 3 Recipes
      </div>
      <div className='flex flex-col'>
        {cache.map((item, index) => (
          <Link to={`/recipe/${item.name.id}`} key={index} className='text-sm'>
            {item.name.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
