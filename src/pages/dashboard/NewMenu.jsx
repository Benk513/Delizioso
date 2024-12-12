import Header from "./../../components/dashboard/common/Header"
import { motion } from "framer-motion"
import StatCard from "./../../components/dashboard/common/StatCard"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ArrowLeft, Package } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form"
// import ProductTable from "../components/products/ProductTable"
// import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
// import SalesTrendChart from "../components/products/SalesTrendChart"


const schema = yup
  .object({
    email: yup.string().required("email is Required").email("Invalid email format"),
    
    // password: yup.string().required("Password is Required").min(8,"Password must be at least 8 characters").max(20,"Password must be at most 20 characters").matches(/[!@#$%^&*(),.?":{}|<>]/,"Password must contain at least one symbol").matches(/[0-9]/, "Password must contain at least one number").matches(/[A-Z]/, "Password must contain at least one uppercase letter").matches(/[a-z]/, "Password must contain at least one lowercase letter"),   
    password: yup.string().required("Password is Required").min(8,"Password must be at least 8 characters"),
  })
  .required()

const defaultValues ={ 
image:"", 
name:"", 
category:"", 
isFeatured:false, 
description:"", 
ingredients:[], price:0 ,priceDiscount:0 ,availability:false}

const NewMenu = () => {

  const {register,control,formState: { errors,isValid},handleSubmit} = useForm({resolver: yupResolver(schema) ,mode:'onChange',defaultValues:defaultValues})



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
            <Link to="/dashboard/menus" variant="primary" className="flex gap-2"><ArrowLeft/> Back to Menus</Link>


            <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label htmlFor="image">Image</label>
                  <Input name='image' type="file" />
                </div>


                <div>
                  <label htmlFor="image">Description</label>
                  <Input  {...register("description")}/>
                </div>
                <div>
                  <label htmlFor="image">Category</label>
                  <Input {...register("description")}/>
                </div>
                <div>
                  <label htmlFor="image">Featured</label>
                  <Checkbox {...register("description")}/>
                </div>
                <div>
                  <label htmlFor="image">Ingredients</label>
                  <Input  {...register("description")}/>
                </div>
                <div>
                  <label htmlFor="image">Price</label>
                  <Input type="number" {...register("description")}/>
                </div>
                <div>
                  <label htmlFor="image">Price Discount</label>
                  <Input
                  type="number" {...register("description")} />
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
