import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MenuDetail from './pages/menu/MenuDetail.jsx'
import Cart from './pages/cart/Cart.jsx'
import Reservation from './pages/reservation/Reservation.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Menu from './pages/menu/Menu.jsx'
import Signup from './pages/signup/Signup.jsx'
import Login from './pages/login/Login.jsx'
import Home from './pages/home/Home.jsx'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>


       <BrowserRouter>        
      <Routes>
      {/* Public routes */}        
 
           
        {/* Protected routes */}
        <Route element={<App />}> 

        <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu/>} />

              
           <Route path='/cart' element={<Cart />} />
           <Route path='/reservation' element={  <Reservation/>} />
           <Route path='/about' element={<About/> } />
           <Route path='/contact' element={<Contact/> } />
        </Route>

        
       
        
           <Route path='menuDetail' element={<MenuDetail/>} />       
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<Navigate to="/"/>} />
        
         
      </Routes>
      
  
       
 
    </BrowserRouter>
  </StrictMode>,
)
