import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import {Outlet } from 'react-router-dom'
import useUserStore from './store/useUserStore'
import { useEffect } from 'react'
 function App() {


  const initialize = useUserStore((state) => state.initialize);

  useEffect(() => {
      // Initialize user data from localStorage
      initialize();
  }, [initialize]);

  const user =useUserStore((state) => state.user)

  console.log(user)

  // const {checkAuthentication,checkingAuth, user} = useUserStore()

// useEffect(
//   ()=>{
//     checkAuthentication()
//   }
// ,[checkAuthentication])

// if(checkingAuth) return <div>gg</div>
 

  return (
    <> <Navbar/>
 
      {<Outlet/>}
    <Footer/>
    </>

     
  )
}

export default App
