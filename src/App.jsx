import { Route, Routes } from 'react-router-dom'
import { Header } from './Header'
import Home from './Home'
import RecipePage from './RecipePage'
import InfiniteScrollExample3 from './InfiniteScrollExample3'

function App() {
  return (
    <>
      <Header />
      <main className='pt-0 pb-12 px-1 bg-stone-100'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='recipe/:id' element={<RecipePage />} />
          <Route path='/2' element={<InfiniteScrollExample3 />} />
        </Routes>
      </main>
    </>
  )
}

export default App
