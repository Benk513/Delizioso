import { create } from "zustand";
import axios from './../lib/axios'
const useMenuStore = create((set)=>({
    menu:null,
    menus:[],
    loading:false,
    error:null,

    getAllMenus: async() =>{
        set({loading:true , error:null})

        try {
        const res = await axios.get('api/v1/menu/')
        
            set({menus:res.data.data,loading:false})

        } catch (error) {
            set({loading:false,error:error.response.data})
            console.log(error.response.data);
        }
    },

    getMenu: async({id}) =>{
        set({loading:true , error:null})
        try {            
            const res = await axios.get(`api/v1/menu/${id}`)
            console.log(res.data.data)
            set({menu:res.data.data,loading:false})

        } catch (error) {
            const errorMessage = error.response ? error.response.data : 'Network Error';
            set({ loading: false, error: errorMessage });
            console.log(errorMessage);
                       
        } finally {
            // Ensure loading is set to false in case of an error
            set({ loading: false });
        }

    }
}) )


export default useMenuStore;