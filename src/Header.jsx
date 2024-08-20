import { Link } from 'react-router-dom'
import LruList from './components/LruList'

export const Header = () => {
  return (
    <header className='sticky top-0 z-30 m-0 bg-sky-900 h-[100px]'>
      <nav className='relative flex flex-col sm:flex-row items-center justify-between px-1 md:px-8 py-1 mx-auto max-w-full lg:max-w-screen-xl'>
        <Link
          to='/'
          aria-label='Brand'
          title='Brand'
          className='inline-flex items-center'
        >
          <div className='flex px-1 py-0 items-center bg-gradient-to-r from-cyan-100 to-cyan-300 rounded-md'>
            <span className='mx-2 text-base sm:text-xl lg:text-3xl font-extrabold text-sky-950 hover:text-sky-700'>
              Recipes App
            </span>
          </div>
        </Link>
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
          className='text-white'
          href='https://github.com/bilalgonen/recipe2'
          target='_blank'
        >
          Go to Github Repo
        </a>
        <LruList />
      </nav>
    </header>
  )
}
