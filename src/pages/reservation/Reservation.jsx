import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
 import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import resto from '/images/resto.png'

import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel, SelectTrigger,  SelectValue,} from "@/components/ui/select"
import { useState } from "react"
 
 import {  Dialog,  DialogContent,  DialogDescription,  DialogFooter,  DialogHeader, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Calendar, CheckSquare, Clock, Edit, User2, X } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
// import resto from '/images/resto.png'
import plate2 from '/images/plate2.png'

const Reservation = () => {
  const [date, setDate] = useState()

  const [step, setStep] = useState(1)

  if(step ===0){
    setStep(1)
    
      
  }



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
          <Calendar  className="mr-2 h-4 w-4" />
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
     

    <Dialog>
      <DialogTrigger asChild>
      <Button variant="secondary" className="mt-5 w-[300px] h-[50px]" size='lg'> Book now</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[1112px]">
    

    
        <DialogHeader>
          
          <DialogDescription>
          {step===1 
          ?<h1 className="my-4 text-center font-title font-bold text-[40px] text-primary leading-[110%]'">Reservation
          </h1> 
          :step===2 
          ? <h1 className="my-4 text-center font-title font-bold text-[40px] text-primary leading-[110%]'">Reservation
          </h1>
          :step ===3 
          ?<h1 className="my-4 text-center font-title font-bold text-[40px] text-primary leading-[110%]'">Reservation 3
          </h1>
          :null }
           
          </DialogDescription>
        </DialogHeader>


        {step===1? 
        <div className=" ">

        <div className="text-center flex justify-center items-center rounded-xl  h-[60px] bg-[#8AEAFF]/40 px-10 placese"> <p className="text-lg">Due to limited availability, we can hold this table for you for <span className="font-semibold">5:00 minutes</span> </p></div>
        
        <h1 className="my-5 font-body font-semibold text-2xl ">Data Order📅 </h1>

        <ScrollArea className="h-80 w-full rounded-md">
      
 <div className="grid grid-cols-2 gap-x-10 p-4">
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
        : step ===2
        ? <div>
        <div className=" bg-[#3FC66E] w-full space-y-3 py-4 px-4 text-white/90">
            <h1 className="text-3xl font-semibold mb-4">Reservation has been confirmed</h1>
            <p className="flex items-center gap-2 text-lg"> <span><CheckSquare size={20}/></span>The confirmation result has been sent to your email</p>
            <p className="flex items-center gap-2 text-lg"><span><Calendar size={20}/></span>Booking ID : #123456</p>
          </div>

          <div className="my-10 flex items-center justify-between font-title ">
          <div className='relative w-[200px] min-h-30'>

                  {/* plat legumes */}
                  <img src={resto} width={'200'} className="  absolute-centered z-10 " alt="food image" />          
                  
                    {/* cercle orange */}
                 
                <div className="  absolute-centered   bg-muted opacity-40 rounded-full size-[250px]"></div>

                {/* cercle vert */}
                 
                  <div className="absolute-centered   bg-red-500 opacity-100 rounded-fullsize-[400px]"></div>
              
              </div>

          <div className="mt-5">
          <h1 className="text-start font-bold text-3xl text-primary mb-2">Reservation detail</h1>

        <ul className="font-body text-base gap-4 flex flex-col">
              <li className="flex gap-4"><Calendar size={20}/> Saturday,28 feb 2022</li>
              <li className="flex gap-4"><Clock size={20}/> 04:30</li>
              <li className="flex gap-4"><User2 size={20}/> 2 people (Standar seating)</li>
          </ul>

          </div>
          <div className="flex flex-col w-1/4 space-y-4">
          {
            <>

            </>
          }
            <Button className="gap-2 flex " onClick={()=> setStep(1)}>Modify <Edit size={20}/></Button>
            <Button variant="secondary"  className="gap-2 flex" onClick={()=> setStep(3)}>Cancel <X size={20}/></Button>
          </div>
           
          </div>
         
       

    
        </div> :step ===3? <div>

        <div className=" bg-[#FF8A00] w-full space-y-3 py-10 px-4 text-white/90">
            <h1 className="text-3xl font-semibold"> Are you sure you want to cancel the reservation?      </h1>
            <p className="flex text-lg items-center gap-2"> <span><CheckSquare size={20}/></span>The confirmation result has been sent to your email</p>
            <p className="flex text-lg items-center gap-2"><span><Calendar size={20}/></span>Booking ID : #123456</p>
          </div>

          <div className="flex items-center justify-around font-title ">
          <div><img src={plate2}  width={250}alt="food image" />  </div>

          <div className="">
          <h1 className="text-start font-bold text-2xl text-primary mb-2">Reservation detail</h1>

<ul className="font-body text-base">
      <li className="flex gap-4"><Calendar size={20}/> Saturday,28 feb 2022</li>
      <li className="flex gap-4"><Clock size={20}/> 04:30</li>
      <li className="flex gap-4"><User2 size={20}/> 2 people (Standar seating)</li>
  </ul>

          </div>
          
           
          </div><div className="flex flex-col justify-center  min-h-10 space-y-4 font-display">
               <Button size="lg" className="w-[300px] self-end mr-10" onClick={()=> setStep(0)}>Cancel reservation</Button>
          </div>
          
        </div> : null }

      


        <DialogFooter>
        {
          step ===2 || step===3? "":
          <>
          {
            step ===1 ? <Button type="submit"  onClick={()=>setStep(step =>step+1) }>Confirm Reservation</Button> : <>
            <Button type="submit"  onClick={()=>setStep(step =>step+1) }>Confirm Reservation</Button> 
          <Button type="submit" onClick={()=>setStep(step =>step-1) }>Go Back</Button>
            </>
          }


          </>
        }
        </DialogFooter>
  
 
      </DialogContent>
    </Dialog>

 
    </form>
    </div>

<div>

</div>

</div>

  )
}


export default Reservation