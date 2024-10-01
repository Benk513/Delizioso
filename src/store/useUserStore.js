// this is a global user state manager
import { create } from 'zustand'
import axios from './../lib/axios'
const useUserStore = create((set)=>({
    user: null,
    loading: false,
    checkingAuth:true,
    
    // initialize: () => {
    //     // Check if user data exists in localStorage
    //     const storedUser = localStorage.getItem('user');
        
    //     if (storedUser) {
    //       try {
    //         const parsedUser = JSON.parse(storedUser);
            
    //         // Check if parsedUser is an object and has necessary data
    //         if (parsedUser && typeof parsedUser === 'object') {
    //           set({ user: parsedUser, checkingAuth: false });
    //         } else {
    //           // Clear localStorage if data is corrupted
    //           localStorage.removeItem('user');
    //           set({ user: null, checkingAuth: false });
    //         }
    //       } catch (err) {
    //         console.error('Failed to parse user data from localStorage:', err);
    //         localStorage.removeItem('user');  // Remove corrupted data
    //         set({ user: null, checkingAuth: false });
    //       }
    //     } else {
    //       set({ user: null, checkingAuth: false });
    //     }
    //   },
    initialize: async () => {
        // Check if user data exists in localStorage
        const storedUser = localStorage.getItem('user');
      
        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            if (parsedUser && typeof parsedUser === 'object') {
              set({ user: parsedUser, checkingAuth: false });
            } else {
              localStorage.removeItem('user');
              set({ user: null, checkingAuth: false });
            }
          } catch (err) {
            console.error('Failed to parse user data from localStorage:', err);
            localStorage.removeItem('user');
            set({ user: null, checkingAuth: false });
          }
        } else {
          // If no user data in localStorage, check for token in cookies
        //   const token = Cookies.get('jwt'); // Check if the token exists in cookies
        // console.log('the token is',token)
        //   if (token) {
        //     try {
        //       // Fetch the current user using the token
        //       const res = await axios.get('/api/v1/users/me', {
        //         headers: { Authorization: `Bearer ${token}` }
        //       });
              
        //       const userData = res.data.data.user;
              
        //       // Store user data in both Zustand and localStorage
        //       localStorage.setItem('user', JSON.stringify(userData));
        //       set({ user: userData, checkingAuth: false });
        //     } catch (err) {
        //       console.error('Failed to fetch user data from API:', err);
        //       set({ user: null, checkingAuth: false });
        //     }
        //   } else {
            // If no token or user found, set user to null
            set({ user: null, checkingAuth: false });
          
        }
      },
    authCheck: async () => {
        try {
          const res = await axios.get('api/v1/users/me');
          console.log(res.data.data)
          set({ user: res.data.data });
          localStorage.setItem('user', JSON.stringify(res.data.data));
        } catch (err) {
          console.log('User is not authenticated or session has expired',err);
          set({ user: null });
          localStorage.removeItem('user');
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
      
        setTimeout(() => {
            set({user:res.data.data.user,loading:false})
            localStorage.setItem('user', JSON.stringify(res.data.data.user));
            
        }, 1000);

    } catch (error) {
        if(!error.response){
           
            console.log("Netword error")
            set({loading:false})
        }
        else if(error.response.status === 401){
            set({loading:false})
          
            console.log("Invalid Credentials")
            }
            else{
                set({loading:false})
                console.log(error.response.data.message)
             
            }
        
        
    }},






    forgotPassword : async({email}) =>{
        set({loading:true})    

        try{
            const res = await axios.post("api/v1/users/forgotPassword",{email})
            console.log(res)
            set({loading:false})
            }
            catch(error){
                console.log(error)
                set({loading:false})
            }
            
    },
    resetPassword : async({token , password , passwordConfirm}) =>{
        set({loading:true})    

        try{
            const res = await axios.patch( `api/v1/users/resetPassword/${token}`,{password , passwordConfirm})
            console.log(res)
            set({loading:false ,user:res.data.data.user } )

            //do a promise code to wait 2 seconds and navigate to login page
        }
            
            catch(error){
                console.log(error)
                set({loading:false})
            }   
    },

}
))



export default useUserStore
