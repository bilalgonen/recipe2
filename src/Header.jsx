import { Link } from 'react-router-dom'
import LruList from './components/LruList'

export const Header = () => {
  return (
    <header className='sticky top-0 z-30 m-0 bg-sky-900 h-[100px]'>
      <nav className='relative flex flex-row items-start justify-between px-2 py-1 mx-auto max-w-full lg:max-w-screen-xl'>
        <div className='flex flex-col sm:flex-row gap-x-4 md:gap-x-12 items-end'>
          <a
            href='/'
            aria-label='Brand'
            title='Brand'
            className='inline-flex items-center'
          >
            <div className='flex px-1 py-0 items-center bg-gradient-to-r from-cyan-100 to-cyan-300 rounded-md'>
              <span className='mx-2 text-base sm:text-xl lg:text-3xl font-extrabold text-sky-950 hover:text-sky-700'>
                Recipes App
              </span>
            </div>
          </a>
          <div className='text-left'>
            <a
              href='https://bilalgonen.com/'
              target='_blank'
              className='text-sm italic text-gray-50 px-2'
            >
              by Bilal Gonen
            </a>
          </div>

          <a
            className='text-white text-sm sm:text-base'
            href='https://github.com/bilalgonen/recipe2'
            target='_blank'
          >
            Github Repo
          </a>
        </div>
        <LruList />
      </nav>
    </header>
  )
}
