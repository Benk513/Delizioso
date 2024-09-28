import { Button } from "@/components/ui/button"
import { create } from "zustand"

const useStore = create((set)=>({
    count: 0,
    inc: () =>set((state) => ({ count: state.count + 1})),
    dec: () =>set((state) => ({ count: state.count - 1}))
     
}))

const Zustand = () => {
    const store = useStore()
  return (
    <div className="flex gap-4 items-center">
    <Button onClick={store.inc}>+</Button>
      <Count/> 
    <Button  onClick={store.dec}>-</Button>
    </div>
  )
}

const Count =() =>{
    const store = useStore()
    return(
        <h1 className="text-2xl">{store.count}</h1>
    )
}
export default Zustand
