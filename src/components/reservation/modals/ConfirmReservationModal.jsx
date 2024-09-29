import { Button } from "@/components/ui/button"
import {  Dialog,  DialogContent,  DialogDescription,DialogHeader,  DialogTitle,  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar, CalendarIcon,  CheckSquare, Clock, Edit, User2, X } from "lucide-react"
import resto from '/images/resto.png'


const ReservationDetailsModal = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Confirmed Reservation</Button>
      </DialogTrigger>
      

      <DialogContent className="max-w-[1112px]">
        <DialogHeader>
          <DialogTitle className='text-center'>            
           
          </DialogTitle>

          
          <DialogDescription>
          <div className=" bg-[#3FC66E] w-full space-y-3 py-4 px-4 text-white/90">
            <h1 className="text-3xl font-semibold mb-4">Reservation has been confirmed</h1>
            <p className="flex items-center gap-2 text-lg"> <span><CheckSquare size={20}/></span>The confirmation result has been sent to your email</p>
            <p className="flex items-center gap-2 text-lg"><span><CalendarIcon size={20}/></span>Booking ID : #123456</p>
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
            <Button className="gap-2 flex ">Modify <Edit size={20}/></Button>
            <Button variant="secondary"  className="gap-2 flex ">Cancel <X size={20}/></Button>
          </div>
           
          </div>
          
           
          </DialogDescription>
        </DialogHeader>
        
        

     
        
       

      
  
  
      
         
      </DialogContent>
    </Dialog>
  )
}
export default ReservationDetailsModal
