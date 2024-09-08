import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import plate2 from '/images/plate2.png'
import Logo from "@/components/logo/Logo"

const Signup = () => {
  return (
    <div className="h-screen w-full bg-slate-50 flex items-center justify-center">
    
     <div className="w-[1000px] h-[600px]   gap-10 grid grid-cols-1 lg:grid-cols-2 bg-white shadow-xl">
     
     
     <div className="m-10">
     <Logo/>

     <h1 className=" font-display font-bold text-4xl mt-5 mb-4">Sign up</h1>
     <p className="mb-5">Don't have an account? <Link className="font-semibold text-[#0094FF]">Sign up</Link></p>


     <Input
              id="name"
              defaultValue=""
              name="fullName"
              type="text"
              placeholder="Full name"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
            />
     <Input
              id="name"
              defaultValue=""
              type="email"
              placeholder="Email address"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
            />
     <Input
              id="name"
              defaultValue=""
              type="password"
              placeholder="Password"
              className=" h-[60px] bg-slate-200/20 border-none mb-4"
            />
            {/* term and condition */}
            <div className="flex items-center justify-between">   
            {/* checkbox button */}
            <div className="items-start flex space-x-2 gap-2  ">
            <Checkbox id="terms1" />             
            <p className="text-base text-muted-foreground">Remember me</p>       
            </div>
            <Link>Forget Password?</Link>
            </div>

            <div className="flex flex-col mt-10 space-y-2">
            <Button>Sign up</Button>
            <Button variant="ghost">Sign up with google</Button>

            </div>

     </div>

     <div className=" relative overflow-hidden">
      
                  {/* plat legumes */}
                  <img src={plate2} className="w-[1000px] h-[600px] -top-[8%] object-cover  absolute -right-[20%] z-10" alt="food image" />          
                  
                    {/* cercle orange */}
                 
                
                {/* cercle orange */}
                 
                  <div className=" absolute -right-[45%] -top-[15%] bg-accent opacity-100 rounded-full size-[650px]"></div>
              
           
     </div>

     </div>
    </div>
  )
}

export default Signup
