import Logo from "@/components/logo/Logo"
import { Button } from "@/components/ui/button"
import {  Dialog,  DialogContent,  DialogDescription,  DialogFooter,  DialogHeader,  DialogTitle,  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User2 } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"

import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel, SelectTrigger,  SelectValue,} from "@/components/ui/select"
const ReservationModal = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[1112px]">
        <DialogHeader>
          <DialogTitle className='text-center'>            
            <div className="flex justify-between mt-8">           
            <Logo/>
            <div className="flex gap-4">
            <Button>Sign In </Button>
           <Button variant="muted">Sign Up </Button>

          </div>
          </div>
          </DialogTitle>
          <DialogDescription>
          <div className="my-4 text-center font-title font-bold text-[60px] text-primary leading-[110%]'">Reservation
          </div>
           
          </DialogDescription>
        </DialogHeader>

        <div className=" ">

        <div className="text-center flex justify-center items-center rounded-xl  h-[60px] bg-[#8AEAFF]/40 px-10 placese"> <p className="text-lg">Due to limited availability, we can hold this table for you for <span className="font-semibold">5:00 minutes</span> </p></div>
        
        <h1 className="my-5 font-body font-semibold text-2xl ">Data Order📅 </h1>

 <ScrollArea className="h-80 w-full rounded-md  ">
      
 <div className="grid grid-cols-2 gap-x-10">
            <div> 
            <Input
              id="name"
              defaultValue=""
              type="text"
              placeholder="First name"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
            />
            <Input
              id="name"
              defaultValue=""
              type="text"
              placeholder="Last name"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
            />
            <Input
              id="name"
              defaultValue=""
              type="email"
              placeholder="Email address"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
            />
            <Input
              id="name"
              defaultValue=""
              type="tel"
              placeholder="Phone number"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />

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

<Textarea placeholder="Add a special request" className='bg-slate-200/20 border-none' />

    <div className="items-center flex space-x-2 gap-2 mt-5">
    <Checkbox id="terms1" />     
        
        <p className="text-base text-muted-foreground">
        Sign me up to receive dining offers and news from this restaurant by email..
        </p>       
    </div>
            </div>
            <div>
            <div className="bg-slate-200/20 py-8 px-10 rounded-xl">
            <h3 className="font-body font-semibold text-2xl mb-5">Reservation detail</h3>

            <ul className="flex flex-col gap-y-2 font-body text-sm">
                <li className="flex gap-4"><Calendar size={15}/> Saturday,28 feb 2022</li>
                <li className="flex gap-4"><Clock size={15}/> 04:30</li>
                <li className="flex gap-4"><User2 size={15}/> 2 people (Standar seating)</li>
            </ul>
            </div> 


            <div>
            <h3 className="font-body font-bold text-2xl my-5">Restaurant informations  </h3> <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> <p className="mt-5 w-fullu">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p></div>   </div>
        </div>

    </ScrollArea>

 
          
        </div>
        <DialogFooter>
          <Button type="submit">Confirm Reservation</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default ReservationModal


 
 

 
 

    
 