import Logo from "@/components/logo/Logo"
import { Button } from "@/components/ui/button"
import {  Dialog,  DialogContent,  DialogDescription, DialogHeader,  DialogTitle,  DialogTrigger,
} from "@/components/ui/dialog"
 import { Calendar, CalendarIcon, CheckSquare, Clock, User2} from "lucide-react"
  import plate2 from '/images/plate2.png'

 const CancelReservationModal = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Cancel Reservation</Button>
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
          <div className=" bg-[#FF8A00] w-full space-y-3 py-10 px-4 text-white/90">
            <h1 className="text-2xl font-semibold"> Are you sure you want to cancel the reservation?      </h1>
            <p className="flex items-center gap-2"> <span><CheckSquare size={15}/></span>The confirmation result has been sent to your email</p>
            <p className="flex items-center gap-2"><span><CalendarIcon size={15}/></span>Booking ID : #123456</p>
          </div>

          <div className="flex items-center justify-around font-title ">
          <div><img src={plate2}  width={400}alt="food image" />  </div>

          <div className="">
          <h1 className="text-start font-bold text-2xl text-primary mb-2">Reservation detail</h1>

<ul className="font-body text-base">
      <li className="flex gap-4"><Calendar size={20}/> Saturday,28 feb 2022</li>
      <li className="flex gap-4"><Clock size={20}/> 04:30</li>
      <li className="flex gap-4"><User2 size={20}/> 2 people (Standar seating)</li>
  </ul>

          </div>
          
           
          </div><div className="flex flex-col justify-center  min-h-10 space-y-4 font-display">
               <Button size="lg" className="w-[300px] self-end mr-10">Cancel reservation</Button>
          </div>
          
           
          </DialogDescription>
        </DialogHeader>
         
         
      </DialogContent>
    </Dialog>
  )
}
export default CancelReservationModal
