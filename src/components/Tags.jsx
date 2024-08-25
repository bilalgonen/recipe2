import React, { useState } from 'react'
import { useTagContext } from '../context/tag-context'
import { useFetchRecipes } from '../hooks/useFetchRecipes'

const Tags = () => {
  const [show, setShow] = useState(true)
  const { tags, loading, colorMap } = useTagContext()
  const { q, setFilters } = useFetchRecipes()

  if (loading) return <div>Loading Tags...</div>

  //   console.log('tags:', tags)
  //   console.log('colorMap:', colorMap)

  return (
    <>
      <span className='font-semibold'>Filter by tags: </span>

      <button
        onClick={() => setShow(!show)}
        className='bg-blue-500 text-white px-2 py-1 rounded-md'
      >
        {show ? 'Hide Tags' : 'Show Tags'}
      </button>
      {show && (
        <div className='flex gap-1 flex-wrap py-4'>
          {tags.map((tag, index) => (
            <button
              onClick={() => setFilters({ page: 1, q: q, tag: tag })}
              key={index}
              className='text-xs border rounded-md px-1 text-white whitespace-nowrap'
              style={{
                backgroundColor: colorMap.has(tag)
                  ? colorMap.get(tag)
                  : 'black',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </>
  )
}

export default Tags
