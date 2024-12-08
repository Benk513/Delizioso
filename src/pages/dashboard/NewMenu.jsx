import Header from "./../../components/dashboard/common/Header"
import { motion } from "framer-motion"
import StatCard from "./../../components/dashboard/common/StatCard"

import {Package } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
// import ProductTable from "../components/products/ProductTable"
// import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
// import SalesTrendChart from "../components/products/SalesTrendChart"
 
const NewMenu = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={'Add a New Menu'} />     
      
      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
              {/* Stats */}
            <motion.div
              className="grid grid-cols-1 gap-5   mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .5 }}>

                  <div>
                   <h1>Add a new menu</h1> 
                   <form className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        
                        <Input
                          type="file"
                        />
                        <Input
                          type="text"
                        />
                        <Input/>
                        <Input/>
                        <Input/>
                        <Input/>

                    </div>
                   </form>
                  </div>
                  <StatCard  name="Total Products" icon={Package} value="4000" color="#6366f1" />
            </motion.div>

            <Link to="/dashboard/menus" variant ="primary">Back to Menus</Link>


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

export default NewMenu
