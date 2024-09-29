import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import resto from '/images/resto.png'

import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel, SelectTrigger,  SelectValue,} from "@/components/ui/select"
import { useState } from "react"
import ReservationModal from "@/components/reservation/modals/ReservationModal"
 

const Reservation = () => {
  const [date, setDate] = useState()


  const handleSubmit =()=> {
    console.log("fine you just submitted")

  }
  return (
    <div className="flex h-[400px] px-[164px] w-full mt-12">

     <div className='w-full relative '>
                  {/* plat legumes */}
                  <img src={resto} width={'350'} className="  absolute-centered z-10 " alt="food image" />          
                  
                    {/* cercle orange */}
                 
                <div className="absolute -top-1  -left-[50%]  bg-muted opacity-40 rounded-e-[200px]  w-[140%] h-[450px]"></div>

                {/* cercle vert */}
                 
                  <div className=" absolute   -left-[50%]  bg-muted opacity-100 rounded-e-[200px]  w-[140%] h-[400px]"></div>
              
              </div>  


    <div className="w-full">

    <h1 className='my-5 font-title font-bold text-[80px] text-primary leading-[110%]'>Book a table</h1>
    <form action="" onSubmit={handleSubmit}
    className="w-2">


     <Popover >
      <PopoverTrigger asChild className="bg-slate-200/20 border-none">
        <Button
          variant={"outline"}
          className={cn(
            "w-[300px] h-[50px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
 
    <Select>
      <SelectTrigger className="w-[300px] h-[50px] mt-5 bg-slate-200/20 border-none">
        <SelectValue placeholder="Time" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Event Hour</SelectLabel>
          <SelectItem value="apple">13h -15h</SelectItem>
          <SelectItem value="banana">15h-18h</SelectItem>
          <SelectItem value="blueberry">18h-20h</SelectItem>
          <SelectItem value="grapes">20h-22h</SelectItem>
         </SelectGroup>
      </SelectContent>
    </Select>


    <Select>
      <SelectTrigger className="w-[300px] h-[50px] mt-5 bg-slate-200/20 border-none">
        <SelectValue placeholder="Party Size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Event Size</SelectLabel>
          <SelectItem value="2">2 people </SelectItem>
          <SelectItem value="3">3 seats</SelectItem>
          <SelectItem value="4">4 seats</SelectItem>
           <SelectItem value="6">6 seats</SelectItem>
          <SelectItem value="8">8 seats</SelectItem>
          <SelectItem value="10">10 seats</SelectItem>
          <SelectItem value="15">15 seats</SelectItem>
         </SelectGroup>
      </SelectContent>
    </Select>
    <Button variant="secondary" className="mt-5 w-[300px] h-[50px]" size='lg'> Book now</Button>

<ReservationModal/>
    </form>
    </div>

<div>

</div>

    </div>

  )
}


export default Reservation




 