import {Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Reservation from './pages/reservation/Reservation'
import Cart from './pages/cart/Cart'
import Menu from './pages/menu/MenuPage'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Signup from './pages/signup/Signup'
import Unauthorized from './pages/Unauthorized'
import NotFound from './pages/NotFound'
import RequireAuth from './components/RequireAuth'
import {useEffect } from 'react'
import useUserStore from './store/useUserStore'
import Dashboard from './pages/dashboard/Dashboard'
import OverviewPage from './pages/dashboard/OverviewPage'
import Menus from './pages/dashboard/Menus'
import NewMenu from './pages/dashboard/NewMenu'
import ForgotPassword from './pages/login/ForgotPassword'
import ResetPassword from './pages/login/ResetPassword'
import MenuDetail from './pages/menu/MenuDetail'
import ProfileLayout from './pages/Profile/ProfileLayout'
import EditProfile from './pages/Profile/EditProfile'
import MyOrders from './pages/Profile/MyOrders'
import MyFavoriteMenus from './pages/Profile/MyFavoriteMenus'
import UpdatePassword from './pages/Profile/UpdatePassword'
import MyReservations from './pages/Profile/MyReservations'
import DeleteAccount from './pages/Profile/DeleteAccount'
import { Toaster } from './components/ui/sonner'
import DemoPage from './components/payment/page'
import Users from './pages/dashboard/Users'
import MenuPage from './pages/menu/MenuPage'
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
    <>
   <Routes>
    <Route path="/" element={<Layout/>}>
    {/* public routes */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="menu" element={<MenuPage />} />
      <Route path="menu/:id" element={<MenuDetail />} />


      <Route path="unauthorized" element={<Unauthorized />} />
      <Route path="login" element={!user ?<Login /> :<Navigate to='/'/>} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgotPassword" element={<ForgotPassword />} />
      <Route path="resetPassword" element={<ResetPassword />} />

            {/*Dashboard for admin  */}
      <Route path="dashboard" element={<Dashboard/>}>
        <Route index element={<OverviewPage/>} />
        <Route path="users" element={<Users />} />
        <Route path="menus" element={<Menus />} />
        <Route path="menus/new" element={<NewMenu />} />        
        <Route path="sales" element={<Menu />} />
        <Route path="orders" element={<Menu />} />
        <Route path="demo" element={<DemoPage />} />
      </Route>

         
    {/* user profile routes */}
      
    {/* protected routes */}
    <Route element={<RequireAuth/>}>
      <Route path="reservation" element={<Reservation />} />
      <Route path="cart" element={<Cart />} />
    
      <Route path="profile" element={<ProfileLayout/>}>
        <Route index element={<EditProfile/>} />
        <Route path="myFavoritesMenus" element={<MyFavoriteMenus />} />
        <Route path="myOrders" element={<MyOrders />} />
        <Route path="myReservations" element={<MyReservations />} />
        <Route path="updatePassword" element={<UpdatePassword />} />        
        <Route path="deleteAccount" element={<DeleteAccount />} />        
      </Route>
    </Route>
    
    {/* admin only  routes */}
      {/* <Route path="dashboard" element={<Dashboard />}>
        
      </Route> */}
      {/* catch all missing routes */}
      <Route path="*" element={<NotFound />} />

    </Route>
   </Routes>
    <Toaster       
     richColors
    />
    </>
 
  )
}

export default App

// Dynamic route definition
//1 create a route to render a menu in detail , with menu/:id , no need to be a nested route ,  <Route path="menu/:id" element={<MenuDetail />} />
//2 link it to the render of list for each Link by adding to={`id`} so to link to the detail page. and put the id onto the url
// 3 finally go to the detail page , extract it by using const x = useParams() , and to fetch data using that ID


// Reading and setting a query string (2nd way to store state via url , it transport it over the all app)
// 1 actually simple ,we have our state  const {position,name , description , id } = city , then  <Link to ={`${id}?lat=${position.lat}&lng=${position.lng}`} , itis now 
// accessible to all the app 
// now go to the destination url component and define const [searchParams, setSearchParams] = useSearchParams()
// to extract it you'll need to do this , const lat = searchParams.get('lat') , const lng= searchParams.get('lng')
// now we can use our state in the component ,
// now if you want to update the queryString, you'll do it like this.
// onClick = {() =>setSearchParams({lat: 10.0 , lng: 10.0}) }, it 
// will update the url and the state of the component,
// in case you share this u)rl w<ith this states in the url , it will show the same content 