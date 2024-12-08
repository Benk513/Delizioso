import Header from "@/components/dashboard/common/Header"
import DataTable from "@/components/data-table/DataTable"
import useUserStore from "@/store/useUserStore"
import { useEffect } from "react"

const Users = () => {
    const getAllUsers = useUserStore(state => state.getAllUsers)
    const users = useUserStore(state => state.users)
    

    useEffect(() => {
        // Initialize user data from localStorage
        getAllUsers();  
    }, []);
  return (
     <div className="flex-1 overflow-auto relative z-10">
      <Header title={'Users'} /> 
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <DataTable users={users}   />
      </main>
     

     
    </div>
  )
}

export default Users