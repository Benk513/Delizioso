import { useLocation } from 'react-router-dom'
import Logo from '../logo/Logo'
import Action from './Action'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
 
const Navbar = () => {
  
  const location = useLocation()
  // Check if the pathname starts with /dashboard
  const isDashboardPath = /^\/dashboard(\/.*)?$/.test(location.pathname);


  
  return (
    <header className={`${isDashboardPath  ? 'hidden' :'flex' } w-full px-[164px] justify-between items-center py-5 `}>           
          <Logo />
          <Navigation/>
      <MobileNavigation />
      <Action/>
    </header>
  )
}

export default Navbar
