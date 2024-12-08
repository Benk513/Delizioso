import Header from "./../../components/dashboard/common/Header"
import { motion } from "framer-motion"
import StatCard from "./../../components/dashboard/common/StatCard"
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react"
import SalesOverviewChart from "./../../components/dashboard/overview/SalesOverviewChart"
// import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
// import SalesChanelChart from "../components/overview/SalesChanelChart"
 
const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
          <Header title="overview" /> 
          
          <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
              
              {/* Stats */}
              <motion.div
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .5 }}>
                  <StatCard  name="Total Sales" icon={Zap} value="$12,345" color="#6366f1" />
                  <StatCard  name="Total Sales" icon={Users} value="1,235" color="#8b5cf6" />
                  <StatCard  name="Total Sales" icon={ShoppingBag} value="567" color="#ec4899" />
                  <StatCard  name="Total Sales" icon={BarChart2} value="12.5%" color="#6ee7b7" />
                  
              </motion.div>


              {/* Charts */}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  <SalesOverviewChart />
                  {/* <CategoryDistributionChart /> */}
                  {/* <SalesChanelChart/> */}
              </div>


              
          </main>
      
    </div>
  )
}

export default OverviewPage
