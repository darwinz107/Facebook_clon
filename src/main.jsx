import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Register } from './Login/Register.jsx'
import { Principal } from './Login/Principal.jsx'
import { Authorized } from './paths/Authorized.jsx'
import { NoAuthorized } from './paths/NoAuthorized.jsx'
import { Update } from './profile/Update.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path = "/" element={<App/>}></Route>
      <Route path='/login' element={<App/>}></Route>
      <Route path = "/register" element={<Register/>} ></Route>
      <Route path='/principal' element={<Principal/>}></Route>
      <Route path='/autorizado' element={<Authorized/>}></Route>
      <Route path='/noautorizado' element={<NoAuthorized/>}></Route>
      <Route path='/updateProfile' element={<Update></Update>}></Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>
)
