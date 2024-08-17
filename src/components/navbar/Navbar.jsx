import Logo from '../logo/Logo'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>           
          <Logo />
          <Navigation/>
          <MobileNavigation/>
    </div>
  )
}

export default Navbar
