import { useLocation } from 'react-router-dom'
import Logo from '../logo/Logo'
import Action from './Action'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
 
const Navbar = () => {
  
  const location = useLocation()
  // Check if the pathname starts with /dashboard
  
  
  // Define a regex to match /login, /signup, /forgot-password, and /dashboard
  const hideNavbarPaths = /^\/(dashboard(\/.*)?|login|signup|forgotPassword|resetPassword|profile(\/.*)?)$/;

  // Check if the current pathname matches any of the hide paths
  const shouldHideNavbar = hideNavbarPaths.test(location.pathname);

  
  return (
    <header className={`${shouldHideNavbar ? 'hidden' :'flex' } w-full px-[164px] justify-between items-center py-5 `}>           
          <Logo />
          <Navigation/>
      <MobileNavigation />
      <Action/>
    </header>
  )
}

export default Navbar
