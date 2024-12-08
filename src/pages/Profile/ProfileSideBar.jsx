    import {Menu, User2, Bell, Heart, Star, ArrowLeft, Lock, ListCheck, Trash, Calendar } from "lucide-react"
    import { useState } from "react"
    import { AnimatePresence, motion } from "framer-motion"
    import { Link, useLocation } from "react-router-dom"
    const SIDEBAR_ITEMS = [
        {
             name:"Edit Profile" ,icon: User2 , color:"#6366f1" , href:"/profile/"
        },
       
        {
             name:"Favorites" ,icon: Heart , color:"#ee1a1a" , href:"/profile/favoritesMenus"
        },
        {
             name:"Reservations" ,icon: Calendar , color:"#10b981" , href:"/profile/myReservations"
        },
        {
             name:"Reviews" ,icon: Star , color:"#8b5cf6" , href:"/profile/myReviews"
        },
        {
             name:"Orders" ,icon: ListCheck , color:"#3b82f6" , href:"/profile/myOrders"
        },
        {
            name:"Notifications" ,icon:Bell , color:"#f59e0b" , href:"/profile/notifications"
       },
        {
             name:"Password" ,icon: Lock , color:"#6ee7b7" , href:"/profile/updatePassword"
        },
        {
             name:"Back to Home" ,icon: ArrowLeft , color:"#aaa" , href:"/"
        },
     ]
    const ProfileSideBar = () => {
    
        const [isSidebarOpen , setSidebarOpen] = useState(false)
        const location = useLocation();
        const currentUrl = location.pathname
      return (
          <motion.div
              className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
              animate={{ width: isSidebarOpen ? 256 : 80 }}
          >
              <div className="h-full bg-white  backdrop-blur-md p-4 flex flex-col border-r border-gray-200 ">
                  <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSidebarOpen(() => !isSidebarOpen)}
                      className="p-2 rounded-full hover:bg-gray-200 transition-colors max-w-fit">
                      <Menu size={24} color="gray"/>
                      
                  </motion.button>
    
    
                  <nav className="mt-8 flex-grow">
                      {SIDEBAR_ITEMS.map((item) => (
                        
                          <Link key={item.href} to={item.href}>
                              <motion.div className={`flex items-center p-4 text-gray-500 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors mb-2 ${currentUrl ===item.href ? "bg-gray-200 " :""}`}>
                                  <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                                  
                                  <AnimatePresence>
                                      {isSidebarOpen && (
                                          <motion.span
                                              className="ml-4 whitespace-nowrap"
                                              initial={{ opacity: 0, width: 0 }}
                                              animate={{ opacity: 1, width: "auto" }}
                                              exit={{ opacity: 0, width: 0 }}
                                              transition={{ duration: 0.2, delay: 0.3 }}>
                                              {item.name}
                                              
                                          </motion.span>
                                      )}
                                  </AnimatePresence>
                                  
                              </motion.div>
                          </Link>
                      ))}
                      
                  </nav>
                 <Trash color="red"/>
    
              </div>
          
        </motion.div>
      )
    }
    
    export default ProfileSideBar
    
 