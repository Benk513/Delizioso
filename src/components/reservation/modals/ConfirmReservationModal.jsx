import Logo from "@/components/logo/Logo"
import { Button } from "@/components/ui/button"
import {  Dialog,  DialogContent,  DialogDescription,DialogHeader,  DialogTitle,  DialogTrigger,
} from "@/components/ui/dialog"
 import { Calendar, CalendarIcon,  CheckSquare, Clock, Edit, User2, X } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
 import { ScrollArea } from "@/components/ui/scroll-area"
 import resto from '/images/resto.png'

import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel, SelectTrigger,  SelectValue,} from "@/components/ui/select"
const ReservationDetailsModal = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Confirmed Reservation</Button>
      </DialogTrigger>
      

      <DialogContent className="max-w-[1112px]">
        <DialogHeader>
          <DialogTitle className='text-center'>            
            <div className="flex justify-between ">           
            <Logo/>
            <div className="flex gap-4">
            <Button>Sign In </Button>
           <Button variant="muted">Sign Up </Button>

          </div>
          </div>
          </DialogTitle>

          
          <DialogDescription>
          <div className=" bg-[#3FC66E] w-full space-y-3 py-4 px-4 text-white/90">
            <h1 className="text-2xl font-semibold">Reservation has been confirmed</h1>
            <p className="flex items-center gap-2"> <span><CheckSquare size={15}/></span>The confirmation result has been sent to your email</p>
            <p className="flex items-center gap-2"><span><CalendarIcon size={15}/></span>Booking ID : #123456</p>
          </div>

          <div className="my-8 flex items-center justify-between font-title ">
          <div className='relative w-[200px] min-h-20'>

                  {/* plat legumes */}
                  <img src={resto} width={'120'} className="  absolute-centered z-10 " alt="food image" />          
                  
                    {/* cercle orange */}
                 
                <div className="  absolute-centered   bg-muted opacity-40 rounded-full size-[180px]"></div>

                {/* cercle vert */}
                 
                  <div className="absolute-centered   bg-red-500 opacity-100 rounded-fullsize-[400px]"></div>
              
              </div>

          <div className="">
          <h1 className="text-start font-bold text-2xl text-primary mb-2">Reservation detail</h1>

<ul className="font-body text-base">
      <li className="flex gap-4"><Calendar size={20}/> Saturday,28 feb 2022</li>
      <li className="flex gap-4"><Clock size={20}/> 04:30</li>
      <li className="flex gap-4"><User2 size={20}/> 2 people (Standar seating)</li>
  </ul>

          </div>
          <div className="flex flex-col bg-slate-200 w-1/4 space-y-4">
            <Button>Modify <Edit/></Button>
            <Button>Cancel <X/></Button>
          </div>
           
          </div>
          
           
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-72 w-full rounded-md  ">
        <div className=" ">

     
        
       

      
 <div className="grid grid-cols-2 gap-x-10">
            <div>          
<Select>
      <SelectTrigger className="h-[60px] mb-5 bg-slate-200/20 border-none">
        <SelectValue placeholder="Select an occasion" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Occasions</SelectLabel>
          <SelectItem value="anniversary">Anniversary</SelectItem>
          <SelectItem value="graduation">Graduation</SelectItem>
          <SelectItem value="wedding">Weeding</SelectItem>
         </SelectGroup>
      </SelectContent>
    </Select>
    <Textarea placeholder="Add a special request" className='bg-slate-200/20 border-none min-h-[200px]' />


   
</div>
            
            {/* second column */}
            <div>
            
 

 


            <div>
            <h3 className="font-body font-bold text-2xl my-5">Restaurant informations  </h3> <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> <p className="mt-5 w-fullu">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p></div>   </div>
        </div>

    

          
        </div>
        
      </ScrollArea>
         
      </DialogContent>
    </Dialog>
  )
}
export default ReservationDetailsModal
