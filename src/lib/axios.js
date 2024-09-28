import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/', 
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer YOUR_API_KEY',

        },
     /*    important for scenarios where you need to send cookies to the server for authentication purposes. */
    //  withCredentials:true 
     // send a cookie to the server every req , this is how we check auth
    //   is used to indicate that the browser should include
    //  any cookies associated with the requested domain in the outgoing request.
})

export default axiosInstance;