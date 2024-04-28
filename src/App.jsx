import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar, ProtectedRoutes } from './Components'
import { Ciudades, Eventos, FormPage, Login, Register } from './Pages'
import './App.css'

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
            <Route path='/add-ciudades' element={<FormPage/>} />
            <Route path='/ciudades/:id' element={<FormPage/>} />
            <Route path='/eventos' element={<Eventos/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
