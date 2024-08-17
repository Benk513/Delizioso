import { Button } from "../ui/button"
import { PiShoppingCart } from "react-icons/pi";
 
const Action = () => {
  return (
      <div className="flex gap-4 items-center justify-between">
          <div className="bg-slate-100 relative py-4 px-4 rounded-full">
              <PiShoppingCart className="w-full h-[20px]" /> 
              
              <div className="absolute   bg-destructive text-destructive-foreground px-2 rounded-full text-sm font-semibold top-0 right-0">3</div>
          </div>
         <Button variant="secondary" size="lg">Log in  </Button>
    </div>
  )
}

export default Action
