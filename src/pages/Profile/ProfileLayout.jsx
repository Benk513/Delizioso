import { Outlet } from 'react-router-dom'
import ProfileHeader from './ProfileHeader'
import ProfileSideBar from './ProfileSideBar'

const ProfileLayout = () => {
  return (
    <div className='flex w-full bg-slate-100 text-gray-100 overflow-hidden'>
    <ProfileSideBar/>
    
    <div className='w-full'>
    <ProfileHeader/>
     <Outlet/>

    </div>
    </div>
  )
}

export default ProfileLayout
