import Header from "./../../components/dashboard/common/Header"
import { motion } from "framer-motion"
import StatCard from "./../../components/dashboard/common/StatCard"

import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"
// import ProductTable from "../components/products/ProductTable"
// import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
// import SalesTrendChart from "../components/products/SalesTrendChart"
 
const Menus = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={'Menus'} />     
      
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
              {/* Stats */}
            <motion.div
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .5 }}>
                  <StatCard  name="Total Products" icon={Package} value="4000" color="#6366f1" />
                  <StatCard  name="Top Selling" icon={TrendingUp} value="200" color="#10b981" />
                  <StatCard  name="Low Stock" icon={AlertTriangle} value="21" color="#f59e0b" />
                  <StatCard  name="Total Revenue" icon={DollarSign} value="$554,221" color="#ef4444" />
            </motion.div>

            <Link to="/dashboard/menus/new" variant ="primary">Add New Menu</Link>


        {/* Product Table */}
        {/* <ProductTable/> */}


        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* <SalesTrendChart /> */}
          {/* <CategoryDistributionChart/> */}

        </div>
      </main>
    </div>
  )
}

export default Menus
