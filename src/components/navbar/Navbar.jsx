import React from 'react'
import Logo from '../logo/Logo'
import Navigation from './Navigation'

const Navbar = () => {
  return (
    <div>           
          <Logo />
          <Navigation/>
          <MobileNavigation/>
    </div>
  )
}

export default Navbar
