import { BarChart2, DollarSign, Settings, TrendingUp, ShoppingCart, User, Menu,  Utensils } from "lucide-react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
const SIDEBAR_ITEMS = [
    {
         name:"Overview" ,icon: BarChart2 , color:"#6366f1" , href:"/dashboard"
    },
    {
         name:"Menus" ,icon:Utensils , color:"#f59e0b" , href:"/dashboard/menus"
    },
    {
         name:"Users" ,icon: User , color:"#ec4899" , href:"/dashboard/users"
    },
    {
         name:"Sales" ,icon: DollarSign , color:"#10b981" , href:"/sales"
    },
    {
         name:"Orders" ,icon: ShoppingCart , color:"#8b5cf6" , href:"/orders"
    },
    {
         name:"Analytics" ,icon: TrendingUp , color:"#3b82f6" , href:"/analytics"
    },
    {
         name:"Settings" ,icon: Settings , color:"#6ee7b7" , href:"/settings"
    },
 ]
const SideBar = () => {

    const [isSidebarOpen , setSidebarOpen] = useState(false)
    const location = useLocation();
    const currentUrl = location.pathname
  return (
      <motion.div
          className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
          animate={{ width: isSidebarOpen ? 256 : 80 }}
      >
          <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700 ">
              <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSidebarOpen(() => !isSidebarOpen)}
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit">
                  <Menu size={24}/>
                  
              </motion.button>


              <nav className="mt-8 flex-grow">
                  {SIDEBAR_ITEMS.map((item) => (
                    
                      <Link key={item.href} to={item.href}>
                          <motion.div className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 ${currentUrl ===item.href ? "bg-gray-600 " :""}`}>
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

          </div>
      
    </motion.div>
  )
}

export default SideBar
