import {create} from 'zustand'


const userSlice = create((set)=> ({
    fullName:'',
    userName:'',
    age:0,
    address:'',

    setAddress : (address) =>set((state) =>({...state, address:address})),

}))