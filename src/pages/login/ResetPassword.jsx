import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Logo from "@/components/logo/Logo"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import useUserStore from "@/store/useUserStore"
import {CheckCircle, Loader2 } from "lucide-react"
import { DevTool } from "@hookform/devtools"
 

const schema = yup
  .object({   
    token: yup.string().required("the signature is Required"),
    password: yup.string().required("the password is Required"),
    passwordConfirm: yup.string().required("the password confirm is Required"),
}).required()

const defaultValues ={ token: "", password: "", passwordConfirm: ""}


const ResetPassword = () => {
   const {resetPassword,loading} = useUserStore()
  const {register,control,formState: { errors,isValid},handleSubmit} = useForm({resolver: yupResolver(schema) ,mode:'onChange',defaultValues:defaultValues})
  const isEmailSentSuccessfully=false



  const onSubmit = async (data) => resetPassword(data)

 

  return (
    <div className="h-screen w-full bg-orange-100 flex items-center justify-center">    
     <div className="w-[700px] h-[600px]   gap-10 grid grid-cols-1 bg-white shadow-xl">   
     {
        !isEmailSentSuccessfully ?

 
    
     <form className="m-12" onSubmit={handleSubmit(onSubmit)}>
     <Logo/>
     <h1 className=" font-display font-semibold text-4xl mt-10 mb-4 text-primary">Resetting your password</h1>
     <p className="mb-10">Please enter the signature and your new password</p>
     
     
     <div>
<Input
              id="name"
              defaultValue=""
              type="text"
              {...register("token")}
              placeholder="Signature"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
            />
             {errors?.token && <p role="alert" className=" text-red-400">{errors.token?.message}</p>}
     </div>
     <div>
<Input
              id="name"
              defaultValue=""
              type="password"
              {...register("password")}
              placeholder="Password"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
            />
             {errors?.email && <p role="alert" className=" text-red-400">{errors.email?.message}</p>}
     </div>
     <div>
<Input
              id="name"
              defaultValue=""
              type="password"
              {...register("passwordConfirm")}
              placeholder="Password Confirm"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
            />
             {errors?.passwordConfirm && <p role="alert" className=" text-red-400">{errors.email?.message}</p>}
     </div>
     
             

            <div className="flex flex-col mt-10 space-y-2">
            <Button  disabled={!isValid || loading}>{
              loading?   <Loader2 className="animate-spin"/> :<p> Send Email</p>        }
             </Button>            
            </div>
            

     </form> : 
     <div className="flex flex-col justify-center items-center">
     <CheckCircle className=" text-green-300 size-[100px]"/>
     <h1 className="text-3xl font-normal text-primary my-5">Password reset successfully !!</h1>
     <p> now redirecting to login page ...</p>

     </div>
    }  

     <DevTool control={control}/>
     </div>
    </div>
  )
}

export default ResetPassword