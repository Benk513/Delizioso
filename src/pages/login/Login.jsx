import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Link} from "react-router-dom"
import plate2 from '/images/plate2.png'
import Logo from "@/components/logo/Logo"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import useUserStore from "@/store/useUserStore"
import {Loader2 } from "lucide-react"
import { toast } from "sonner"
import { DevTool } from "@hookform/devtools"


 
const schema = yup
  .object({
    
    email: yup.string().required("email is Required").email("Invalid email format"),
    
    // password: yup.string().required("Password is Required").min(8,"Password must be at least 8 characters").max(20,"Password must be at most 20 characters").matches(/[!@#$%^&*(),.?":{}|<>]/,"Password must contain at least one symbol").matches(/[0-9]/, "Password must contain at least one number").matches(/[A-Z]/, "Password must contain at least one uppercase letter").matches(/[a-z]/, "Password must contain at least one lowercase letter"),   
    password: yup.string().required("Password is Required").min(8,"Password must be at least 8 characters"),
  })
  .required()

const defaultValues ={
  email: "",
  password: "",
}

const Login = () => {
 
 
  const {login,loading} = useUserStore()
  const {register,control,formState: { errors,isValid},handleSubmit} = useForm({resolver: yupResolver(schema) ,mode:'onChange',defaultValues:defaultValues})
 
  
  
  const onSubmit = async (data) => {
      login(data)
  }

  return (
    <div className="h-screen w-full bg-slate-50 flex items-center justify-center">
    
     <div className="w-[1000px] h-[600px]   gap-10 grid grid-cols-2 bg-white shadow-xl">
     
     
     
     <form className="m-10" onSubmit={handleSubmit(onSubmit)}>
     <Logo/>

     <h1 className=" font-display font-bold text-4xl mt-10 mb-4">Login</h1>
     <p className="mb-10">Don&apos;t have an account? <Link to='/signup' className="font-semibold text-[#0094FF]">Sign up</Link></p>


     <Input
              id="name"
              defaultValue=""
              type="email"
              {...register("email")}
              placeholder="Email address"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
            />
             {errors?.email && <p role="alert" className=" text-red-400">{errors.email?.message}</p>}
     <Input
              id="name"
              defaultValue=""
              type="text"
              {...register("password")}
              placeholder="Password"
              className= {`h-[60px] bg-slate-200/20 border-none mb-5  ${errors.password && 'focus-visible:ring-red-400 mb-2'}`}
            />
            {errors.password && <p role="alert" className=" text-red-400">{errors.password?.message}</p>} 
            {/* term and condition */}
            <div className="flex items-center justify-between">   
            {/* checkbox button */}
            <div className="items-start flex space-x-2 gap-2  ">
            <Checkbox id="terms1" />             
            <p className="text-base text-muted-foreground">Remember me</p>       
            </div>
            <Link onClick={() =>{
              console.log('hit !!')
              toast.success('hey')
              }
            }>Forget Password?</Link>
            </div>

            <div className="flex flex-col mt-10 space-y-2">
            <Button  disabled={!isValid || loading}>{
              loading?   <Loader2 className="animate-spin"/> :<p> Log in  </p>        }
             </Button>
             

            </div>

     </form>

     <div className=" relative overflow-hidden">
      
                  {/* plat legumes */}
                  <img src={plate2} className="w-[1000px] h-[600px] -top-[8%] object-cover  absolute -right-[20%] z-10" alt="food image" />          
                  
                    {/* cercle orange */}
                 
                
                {/* cercle orange */}
                 
                  <div className=" absolute -right-[45%] -top-[15%] bg-accent opacity-100 rounded-full size-[650px]"></div>
              
           
     </div>
     <DevTool control={control}/>
     </div>
    </div>
  )
}

export default Login