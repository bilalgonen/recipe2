import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ item }) {
  return (
    <div className='w-[240px] mx-auto bg-white rounded-lg text-gray-800 border-black'>
      <div>
        <img
          src={item.image}
          className='object-cover object-center w-full h-[240px] dark:bg-gray-500 transition duration-300 ease-in-out rounded-lg'
        />
      </div>
      <div className='flex flex-col justify-between p-1 gap-y-0'>
        <a href={`/recipe/${item.id}`}>
          <p className='text-lg py-3 font-merriweather1 hover:text-red-600 transition duration-300 '>
            {item.name}
          </p>
        </a>
        <div className='text-red-900 font-semibold text-sm'>Instructions</div>
        <ul className='flex flex-col items-left gap-2 list-disc list-inside'>
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
