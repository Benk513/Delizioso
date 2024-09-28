import useUserStore from "@/store/useUserStore"
import { Navigate, Outlet, useLocation } from "react-router-dom"

const RequireAuth = () => {

  const location = useLocation()
  const user = useUserStore((state)=>state.user) 
  
  return (                                              
    user ?
    <Outlet/> : <Navigate to="/login" state={{from:location}} replace/>
  )
}

export default RequireAuth
