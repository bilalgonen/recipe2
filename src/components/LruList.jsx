import React from 'react'

export default function LruList() {
  const list = ['a', 'b', 'c']
  return (
    <>
      <div className='font-semibold text-red-900'>Recently Visited Recipes</div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}
