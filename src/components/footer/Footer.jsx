import { useLocation } from "react-router-dom";
import Logo from "../logo/Logo"
 const Footer = () => {
   // Check if the pathname starts with /dashboard
 // const isDashboardPath = /^\/dashboard(\/.*)?$/.test(location.pathname);

  const location = useLocation()
  // Define a regex to match /login, /signup, /forgot-password, and /dashboard
   // Define a regex to match /login, /signup, /forgot-password, and /dashboard
   const hideNavbarPaths = /^\/(dashboard(\/.*)?|login|signup|forgotPassword|resetPassword)$/;
 

  // Check if the current pathname matches any of the hide paths
  const shouldHideNavbar = hideNavbarPaths.test(location.pathname);
  return (
    <footer className={`${shouldHideNavbar  ? 'hidden' :'flex' } w-full px-[164px] justify-between items-center mt-20 pt-[149px]  pb-[74px] bg-primary text-primary-foreground`}>  
     
      
          
          <div className="flex justify-between">
              <div className="w-1/4">
                  <Logo />
                  <p className="mt-6">Viverra gravida morbi egestas facilisis tortor netus non duis tempor. </p>
              </div>


              <div>
              <h2 className="text-accent font-semibold text-2xl mb-6">Page</h2>
                  <ul className="flex  flex-col gap-4 font-body tex-xl font-light" >
                      <li>Home</li>
                      <li>Menu</li>
                      <li>Order online</li>
                      <li>Catering</li>
                      <li>Reservation</li>
                 </ul>
              </div>
              
              
              <div>
                  
              <h2 className="text-accent font-semibold text-2xl mb-6">Information</h2>
                  <ul className="flex  flex-col gap-4 font-body tex-xl font-light">
                      <li>About us</li>
                      <li>Testimonal</li>
                      <li>Event</li>
                 </ul> 
              </div>


              <div >
                  <h2 className="text-accent font-semibold text-2xl mb-6">Get in touch</h2>
                 

                  <ul className="flex  flex-col gap-4 font-body tex-xl font-light">
                      <li>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</li>
                      <li>delizioso@gmail.com</li>
                      <li>+123 4567 8901</li>
                 </ul> 
              </div>
          </div>


          <div className="text-center pt-[90px]"><p className="font-body tex-2xl font-light">Copyright &ncopy 2024 Delizioso</p></div>
    </footer>
  )
}

export default Footer
