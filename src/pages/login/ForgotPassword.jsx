import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Logo from "@/components/logo/Logo"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import useUserStore from "@/store/useUserStore"
import {CheckCircle, Loader2 } from "lucide-react"
import { DevTool } from "@hookform/devtools"
import { useNavigate } from "react-router-dom"


const schema = yup
  .object({
    
    email: yup.string().required("email is Required").email("Invalid email format")}).required()

const defaultValues ={ email: ""}


const ForgotPassword = () => {
  const {forgotPassword,loading} = useUserStore()
  const {register,control,formState: { errors,isValid},handleSubmit} = useForm({resolver: yupResolver(schema) ,mode:'onChange',defaultValues:defaultValues})
  let isEmailSentSuccessfully=false

  const navigate = useNavigate()



  const onSubmit = async (data) => {
    forgotPassword(data)
    isEmailSentSuccessfully =true

    setTimeout(()=>{
        navigate("/resetPassword")
    },2000)
}

  return (
    <div className="h-screen w-full bg-orange-100 flex items-center justify-center">    
     <div className="w-[700px] h-[450px]   gap-10 grid grid-cols-1 bg-white shadow-xl">   
     {
        !isEmailSentSuccessfully ?

 
    
     <form className="m-12" onSubmit={handleSubmit(onSubmit)}>
     <Logo/>
     <h1 className=" font-display font-semibold text-4xl mt-10 mb-4 text-primary">Forgot Password ?</h1>
     <p className="mb-10">Please enter your email address associated with your account</p>
     <Input
              id="name"
              defaultValue=""
              type="email"
              {...register("email")}
              placeholder="Email address"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
            />
             {errors?.email && <p role="alert" className=" text-red-400">{errors.email?.message}</p>}
             

            <div className="flex flex-col mt-10 space-y-2">
            <Button  disabled={!isValid || loading}>{
              loading?   <Loader2 className="animate-spin"/> :<p> Send Email</p>        }
             </Button>            
            </div>
            

     </form> : 
     <div className="flex flex-col justify-center items-center">
     <CheckCircle className=" text-green-300 size-[100px]"/>
     <h1 className="text-3xl font-normal text-primary mt-5">Email sent successfully !!</h1>
     <p>check your inbox ...</p>

     </div>
    }  

     <DevTool control={control}/>
     </div>
    </div>
  )
}

export default ForgotPassword