import { Route, Routes } from 'react-router-dom'
import { Header } from './Header'
import Home from './Home'
import RecipePage from './RecipePage'
import Home2 from './Home2'

function App() {
  return (
    <>
      <Header />
      <main className='max-w-screen-xl mx-auto px-1 py-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='/2' element={<Home2 />} />
          <Route path='recipe/:id' element={<RecipePage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
