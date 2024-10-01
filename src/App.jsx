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
import Dashboard from './pages/dashboard/Dashboard'
import OverviewPage from './pages/dashboard/OverviewPage'
import Menus from './pages/dashboard/Menus'
import NewMenu from './pages/dashboard/NewMenu'
import ForgotPassword from './pages/login/ForgotPassword'
import ResetPassword from './pages/login/ResetPassword'

function App() {

  const initialize = useUserStore((state) => state.initialize);
  const user = useUserStore((state)=>state.user) 
  const authCheck = useUserStore((state) => state.authCheck);
  useEffect(() => {
      // Initialize user data from localStorage
      initialize();
      // Check if user is authenticated
      authCheck();
  }, [initialize,authCheck]);

  
 

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
      <Route path="forgotPassword" element={<ForgotPassword />} />
      <Route path="resetPassword" element={<ResetPassword />} />

            {/*Dashboard for admin  */}
      <Route path="dashboard" element={<Dashboard/>}>
        <Route index element={<OverviewPage/>} />
        <Route path="users" element={<Contact />} />
        <Route path="menus" element={<Menus />} />
        <Route path="menus/new" element={<NewMenu />} />
        
        <Route path="sales" element={<Menu />} />
        <Route path="orders" element={<Menu />} />
      </Route>

    {/* protected routes */}
    <Route element={<RequireAuth/>}>

      <Route path="reservation" element={<Reservation />} />
      <Route path="cart" element={<Cart />} />
      <Route path="me" element={<Profile />} />


      {/* <Route path="/products" element={<ProductPage />} /> */}
      
    </Route>

    {/* admin only  routes */}
      {/* <Route path="dashboard" element={<Dashboard />}>
        
      

      </Route> */}
      {/* catch all missing routes */}
      <Route path="*" element={<NotFound />} />

    </Route>
    
   </Routes>
 
  )
}

export default App
