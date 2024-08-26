import { Route, Routes } from 'react-router-dom'
import { Header } from './Header'
import Home from './Home'
import RecipePage from './RecipePage'

function App() {
  console.log('App rendered')
  return (
    <>
      <Header />
      <main className='max-w-screen-xl mx-auto px-1 py-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='recipe/:id' element={<RecipePage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
