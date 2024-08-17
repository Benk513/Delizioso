import Logo from '../logo/Logo'
import Action from './Action'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center py-10 bg-slate-50'>           
          <Logo />
          <Navigation/>
      <MobileNavigation />
      <Action/>
    </header>
  )
}

export default Navbar
