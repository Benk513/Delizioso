import SideBar from '@/components/sidebar/SideBar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {

  return (
    <div className='flex h-screen bg-slate-700 text-gray-100 overflow-hidden'>
    <SideBar/>
    <Outlet/>      
    </div>
    
  )
}

export default Dashboard
