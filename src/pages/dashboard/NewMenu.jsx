import Header from "./../../components/dashboard/common/Header"
import { motion } from "framer-motion"
import StatCard from "./../../components/dashboard/common/StatCard"

import { Package } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
            <h1 className="text-center text-3xl capitalize">Add a new menu</h1>
            <Link to="/dashboard/menus" variant="primary"> Back to Menus</Link>


            <form className="flex flex-col space-y-4">
              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label htmlFor="image">Image</label>
                  <Input name='image' type="file" />
                </div>


                <div>
                  <label htmlFor="image">Description</label>
                  <Input />
                </div>
                <div>
                  <label htmlFor="image">Category</label>
                  <Input />
                </div>
                <div>
                  <label htmlFor="image">Featured</label>
                  <Checkbox/>
                </div>
                <div>
                  <label htmlFor="image">Ingredients</label>
                  <Input />
                </div>
                <div>
                  <label htmlFor="image">Price</label>
                  <Input type="number" />
                </div>
                <div>
                  <label htmlFor="image">Price Discount</label>
                  <Input
                  type="number" />
                </div>
                 
                <div>
                  <label htmlFor="image">Available</label>
                  
                  <Checkbox/>
                </div>

              </div>

            <Button>Save</Button>
            </form>
          </div>
          {/* <StatCard  name="Total Products" icon={Package} value="4000" color="#6366f1" /> */}
        </motion.div>

        

        {/* Charts */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div> */}

      </main>
    </div>
  )
}

export default NewMenu
