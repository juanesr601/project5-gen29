
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokedexIdPage from './pages/PokedexIdPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  return (
    
    <div className='pokemons'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<ProtectedRoutes />}/>
        <Route path='/pokedex' element={<PokedexPage />} />
        <Route path='/pokedex/:id' element={<PokedexIdPage />} />
      </Routes>
    </div>
    
  )
}

export default App
