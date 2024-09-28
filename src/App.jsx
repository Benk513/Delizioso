import {Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Reservation from './pages/reservation/Reservation'
import Cart from './pages/cart/Cart'
import Menu from './pages/menu/Menu'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Signup from './pages/signup/Signup'
import Unauthorized from './pages/Unauthorized'
import Profile from './pages/Profile/Profile'
import NotFound from './pages/NotFound'
import RequireAuth from './components/RequireAuth'
import { useEffect } from 'react'
import useUserStore from './store/useUserStore'
 
function App() {

  const initialize = useUserStore((state) => state.initialize);
  const user = useUserStore((state)=>state.user) 
  useEffect(() => {
      // Initialize user data from localStorage
      initialize();
  }, [initialize]);
  // const user =useUserStore((state) => state.user)

  // console.log(user)

  // const {checkAuthentication,checkingAuth, user} = useUserStore()

// useEffect(
//   ()=>{
//     checkAuthentication()
//   }
// ,[checkAuthentication])

// if(checkingAuth) return <div>gg</div>
 

  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
    {/* public routes */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="menu" element={<Menu />} />



      <Route path="unauthorized" element={<Unauthorized />} />
      <Route path="login" element={!user ?<Login /> :<Navigate to='/'/>} />
      <Route path="signup" element={<Signup />} />

    {/* protected routes */}
    <Route element={<RequireAuth/>}>

      <Route path="reservation" element={<Reservation />} />
      <Route path="cart" element={<Cart />} />
      <Route path="me" element={<Profile />} />
    </Route>



    {/* admin only  routes */}
      {/* <Route path="dashboard" element={<Dashboard />}>
        
        <Route path="orders" element={<Orders />} />

      </Route> */}
      {/* catch all missing routes */}
      <Route path="*" element={<NotFound />} />

    </Route>
    
   </Routes>
 
  )
}

export default App
