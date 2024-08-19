import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card({ item, get, put, colorMap }) {
  const navigate = useNavigate()

  const handleClick = (id) => {
    put(id, item)
    navigate(`/recipe/${id}`)
  }

  return (
    <div className='flex flex-col overflow-hidden w-[320px] mx-auto bg-white rounded-lg text-gray-800 border-black'>
      <img
        src={item.image}
        className='object-cover object-center w-full h-[240px] dark:bg-gray-500 transition duration-300 hover:scale-105 ease-in-out rounded-lg'
      />
      <p className='text-lg py-3 font-merriweather1 hover:text-red-600 transition duration-300 '>
        {item.name}
      </p>
      <button
        onClick={() => handleClick(item.id)}
        className='bg-red-600 text-white p-1 m-1 w-fit rounded-lg hover:bg-red-700'
      >
        click for details
      </button>
      <div className='flex flex-col justify-between p-1 gap-y-0'>
        <div className='flex flex-row items-left py-6 gap-1 list-disc list-inside flex-wrap'>
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className='text-xs border rounded-md px-1 text-white whitespace-nowrap'
              style={{
                backgroundColor: colorMap.has(tag)
                  ? colorMap.get(tag)
                  : 'black',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className='text-red-900 font-semibold text-sm'>Instructions</div>
        <ul className='flex flex-col items-left gap-1 list-disc list-inside'>
          {item.instructions.map((instruction, index) => (
            <li key={index} className='text-xs'>
              {instruction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
