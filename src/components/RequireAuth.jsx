import useUserStore from "@/store/useUserStore"
import { Navigate, Outlet, useLocation } from "react-router-dom"

const RequireAuth = () => {

  const location = useLocation()
  const user = useUserStore((state)=>state.user) 
  
if(user && (location.pathname.includes('/login') || location.pathname.includes('/signup'))){
  
  if(user?.role ==="admin"){
    return <Navigate to="/dashboard" replace state={{from:location}}/>
  }else{
    return <Navigate to="/" replace/>
  }
}



  return (                                              
    user ?
    <Outlet/> : <Navigate to="/login" state={{from:location}} replace/>
  )
}

export default RequireAuth


