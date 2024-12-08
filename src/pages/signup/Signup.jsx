import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link, } from "react-router-dom"
import plate2 from '/images/plate2.png'
import Logo from "@/components/logo/Logo"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Loader2, UserPlus } from "lucide-react"
import useUserStore from "@/store/useUserStore"
const schema = yup
  .object({
    name: yup.string().required("full name is Required"),

    email: yup.string().required("email is Required").email("Invalid email format"),
    // password: yup.string().required("Password is Required").min(8,"Password must be at least 8 characters").max(20,"Password must be at most 20 characters").matches(/[!@#$%^&*(),.?":{}|<>]/,"Password must contain at least one symbol").matches(/[0-9]/, "Password must contain at least one number").matches(/[A-Z]/, "Password must contain at least one uppercase letter").matches(/[a-z]/, "Password must contain at least one lowercase letter"), 
    password: yup.string().required("Password is Required"),
    passwordConfirm: yup.string().required("Confirm password is Required"),
  })
  .required()

const Signup = () => {

  const { signup } = useUserStore()
  const loading = false

  const { register, reset,
    formState: { errors, isValid },
    handleSubmit } = useForm(
      { resolver: yupResolver(schema), mode: 'onChange' })

  const onSubmit = async (data) =>{signup(data);reset()}

  return (
    <div className="h-screen w-full bg-slate-50 flex items-center justify-center">
      <div className="w-[1000px] h-[600px]   gap-10 grid grid-cols-1 lg:grid-cols-2 bg-white shadow-xl">

        <form className="m-10" onSubmit={handleSubmit(onSubmit)}>
          <Logo />

          <h1 className=" font-display font-bold text-4xl mt-5 mb-4">Sign up</h1>
          <p className="mb-5">Have an account? <Link to='/login' className="font-semibold text-[#0094FF] hover:text-[#0094FF]/70">Sign in</Link></p>


          <Input
            id="name"
            defaultValue=""
            {...register("name")}
            maxlength="30"

            type="text"
            placeholder="Full name"
            className=" h-[60px] bg-slate-200/20 border-none "
          />
          {errors?.name && <p role="alert" className=" text-red-400">{errors.name?.message}</p>}
          <Input
            id="name"
            defaultValue=""
            type="email"
            {...register("email")}
            placeholder="Email address"
            className=" h-[60px] bg-slate-200/20 border-none mt-4 "
          />
          {errors?.email && <p role="alert" className=" text-red-400">{errors.email?.message}</p>}
          <Input
            id="name"
            defaultValue=""
            type="password"
            maxlength="20"
            {...register("password")}
            placeholder="Password"
            className=" h-[60px] bg-slate-200/20 border-none mt-4"
          />
          {errors.password && <p role="alert" className=" text-red-400">{errors.password?.message}</p>}
          <Input

            defaultValue=""
            type="password"
            maxlength="20"
            {...register("passwordConfirm")}
            placeholder="Password Confirm"
            className=" h-[60px] bg-slate-200/20 border-none mt-4"
          />
          {errors.passwordConfirm && <p role="alert" className=" text-red-400">{errors.passwordConfirm?.message}</p>}

          <div className="flex flex-col mt-10 space-y-2">
            <Button disabled={!isValid}>
              {loading ? (
                <>
                  <Loader2 className="animate-spin size-5 mr-2" aria-hidden='true' /> Loading...
                </>
              ) : (<>
                <UserPlus size={15} className="mr-2" />
                Sign up

              </>)} </Button>
              
          </div>
        </form>

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
