import React from 'react'
import LruList from './LruList'

export default function HomeHeader() {
  return (
    <div className='flex flex-col sm:flex-row max-w-screen-xl mx-auto gap-2'>
      <div className='grow'>
        <div className='text-4xl font-bold text-center '>Recipes App</div>
        <a
          href='https://bilalgonen.com/'
          target='_blank'
          className='text-sm italic text-center pb-6 block'
        >
          by Bilal Gonen
        </a>
      </div>

      <LruList />
    </div>
  )
}
