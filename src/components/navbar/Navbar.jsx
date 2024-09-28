import Logo from '../logo/Logo'
import Action from './Action'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const Navbar = () => {
  return (
    <header className='flex w-full px-[164px]   justify-between items-center py-5 '>           
          <Logo />
          <Navigation/>
      <MobileNavigation />
      <Action/>
    </header>
  )
}

export default Navbar
