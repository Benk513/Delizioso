import { create } from "zustand";
import axios from './../lib/axios'
const useMenuStore = create((set)=>({
    menus:[],
    loading:false,
    error:null,

    getAllMenus: async() =>{
        set({loading:true , error:null})

        try {
        const res = await axios.get('api/v1/menu/')
            console.log(res.data.data)
            set({menus:res.data.data,loading:false})

        } catch (error) {
            set({loading:false,error:error.response.data})
            console.log(error.response.data);
        }
    }
}) )


export default useMenuStore;