import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ item, colorMap }) {
  return (
    <div className='flex flex-col overflow-hidden max-w-[360px] mx-auto bg-white rounded-lg text-gray-800 border-black shadow-lg '>
      <Link to={`/recipe/${item.id}`}>
        <div className='overflow-hidden '>
          <img
            src={item.image}
            className='object-cover object-center w-full h-[240px] dark:bg-gray-500 transition duration-300 hover:scale-105 ease-in-out '
          />
        </div>
        <h1 className='text-xl py-2 font-merriweather1 hover:text-red-600 transition duration-300 my-0'>
          {item.name}
        </h1>
      </Link>

      <div className='flex flex-col justify-between p-1 gap-y-0'>
        <div className='flex flex-row items-left py-3 gap-1 list-disc list-inside flex-wrap'>
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
