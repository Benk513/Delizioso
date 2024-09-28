// this is a global user state manager
import { create } from 'zustand'
import axios from './../lib/axios'
import { toast } from 'sonner';
import {  } from 'react-router-dom';
const useUserStore = create((set)=>({
    user: null,
    loading: false,
    checkingAuth:true,

    initialize: () => {
        // Check if user data exists in localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            set({ user: JSON.parse(storedUser), checkingAuth: false });
        } else {
            set({ checkingAuth: false });
        }
    },

    signup: async ({name, email,password ,passwordConfirm}) =>{
        set({loading:true})
        
    
        // if(password !== confirmPassword){
        //     set({loading:false})
        //   return  toast({description: "Passwords do not match", })
        // }

        try {
            const res = await axios.post("api/v1/users/signup",{name,email,password,passwordConfirm});
            console.log(res)
            // set({user:res.data,loading:false})
        } catch (err) {
            
            console.log(err)
            
        }
    },
    login: async ({email,password}) =>{
        set({loading:true})
    
    try {
        const res = await axios.post("api/v1/users/login",{email,password})
        // console.log(res.data)
        console.log(res)
        toast.success(res.data.message)
        setTimeout(() => {
            set({user:res.data.data.user,loading:false})
            localStorage.setItem('user', JSON.stringify(res.data.data.user));
            
        }, 1000);        
        
        //how to access the jwt token from the cookie storage in order to keep the user logged in 
        // const token = res.data.data.token
        // document.cookie = `jwt=${token}`
        // console.log(document.cookie)

         
        // il faut reset les fields
        // redirige vers home page

    } catch (error) {
        if(!error.response){
            toast.error("Network Error")
            console.log("Netword error")
            set({loading:false})
        }
        else if(error.response.status === 401){
            set({loading:false})
            toast.error("Invalid Credentials")
            console.log("Invalid Credentials")
            }
            else{
                set({loading:false})
                console.log(error.response.data.message)
                toast.error(error.response.data.message)

            }
        
        
    }},

    checkAuthentication: async() =>{
        set({checkingAuth:true})
        try {
            const res = await axios.get("api/v1/users/me")
            console.log(res.data)
            set({user:res.data.data.user,checkingAuth:false})
            } catch (error) {
                set({user:null,checkingAuth:false})
                console.log(error)
                }
    }



}
))



export default useUserStore
