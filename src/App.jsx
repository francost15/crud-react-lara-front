import { BrowserRouter, Route, Routes } from 'react-router-dom'


import './App.css'
import Edit from './Pages/Ciudades/Edit'
import { ProtectedRoutes } from './Components/ProtectedRoutes'
import { NavBar } from './Components/NavBar'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'
import { Ciudades } from './Pages/Ciudades/Ciudades'
import FormPage from './Pages/Ciudades/FormPage'
import Eventos from './Pages/Eventos/Eventos'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route element={<ProtectedRoutes/>} >
            <Route path='/' element={<Ciudades/>}/>
            <Route path='/add' element={<FormPage/>} />
            <Route path='/editar' element={<Edit/>} />
            <Route path='/eventos' element={<Eventos/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
