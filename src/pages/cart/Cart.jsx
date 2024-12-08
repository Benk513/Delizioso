import {  ArrowRight, Minus, Plus, Trash2 } from "lucide-react"
import plate2 from '/images/plate2.png'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"


const Cart = () => {
  return (
    <div className='w-[1162px] mx-auto'>
    <h1 className='mt-5 font-title font-bold text-[40px] text-primary leading-[110%]'> Cart  </h1>

    <div className="flex  gap-4">

        {/* Scrollable items list */}
    <ScrollArea className="w-2/3 h-[60vh] space-y-4 ">
    {/* <ScrollArea className="h-72 w-48 rounded-md border"> */}
    <div className="flex items-center justify-between px-2 mx-4  rounded-xl shadow-xl shadow-[#eee]">

    {/* image and title */}
    <div className="flex items-center">
    <img src={plate2} className="z-10 h-[8vw]" alt="food image" /> 
    <div className="space-y-2">
    <h2 className="font-semibold text-2xl">Linguine</h2>
    <p className="text-base font-body">Pasta</p>
    <Trash2  className="hover:cursor-pointer text-[#FF3838] hover:text-[#FF3838]/70 transition duration-300"/>

    </div>
    </div>


{/*  + - buttons */}
    <div className="flex gap-4 items-center "> 
    <Minus size={40} className=" shadow-lg text-[#FF3838] rounded-full p-2 hover:cursor-pointer hover:text-[#FF3838]/60     "/>
    <span className="text-xl">2</span>
    <Plus size={40} className=" shadow-lg text-[#3FC66E] hover:text-[#3FC66E]/60 rounded-full p-2 hover:cursor-pointer   " />
    </div>

    <div><h3 className="text-accent font-bold text-xl  mr-4">$24.1</h3></div>
    </div>

    <div className="flex items-center justify-between px-2  rounded-xl shadow-2xl shadow-[#eee]  mx-4">

{/* image and title */}
    <div className="flex items-center">
    <img src={plate2} className="z-10 h-[8vw]" alt="food image" /> 
    <div className="space-y-2">
    <h2 className="font-semibold text-2xl">Linguine</h2>
    <p className="text-base font-body">Pasta</p>
    <Trash2  className="hover:cursor-pointer text-[#FF3838] hover:text-[#FF3838]/70 transition duration-300"/>

    </div>
    </div>


{/*  + - buttons */}
    <div className="flex gap-4 items-center "> 
    <Minus size={40} className=" shadow-lg text-[#FF3838] rounded-full p-2 hover:cursor-pointer hover:text-[#FF3838]/60     "/>
    <span className="text-xl">2</span>
    <Plus size={40} className=" shadow-lg text-[#3FC66E] hover:text-[#3FC66E]/60 rounded-full p-2 hover:cursor-pointer   " />
    </div>

    <div><h3 className="text-accent font-bold text-xl  mr-4">$24.1</h3></div>


    </div>

    <div className="flex items-center justify-between px-2  rounded-xl shadow-xl shadow-[#eee]  mx-4">

{/* image and title */}
    <div className="flex items-center">
    <img src={plate2} className="z-10 h-[8vw]" alt="food image" /> 
    <div className="space-y-2">
    <h2 className="font-semibold text-2xl">Linguine</h2>
    <p className="text-base font-body">Pasta</p>
    <Trash2  className="hover:cursor-pointer text-[#FF3838] hover:text-[#FF3838]/70 transition duration-300"/>

    </div>
    </div>


{/*  + - buttons */}
    <div className="flex gap-4 items-center "> 
    <Minus size={40} className=" shadow-lg text-[#FF3838] rounded-full p-2 hover:cursor-pointer hover:text-[#FF3838]/60     "/>
    <span className="text-xl">2</span>
    <Plus size={40} className=" shadow-lg text-[#3FC66E] hover:text-[#3FC66E]/60 rounded-full p-2 hover:cursor-pointer   " />
    </div>

    <div><h3 className="text-accent font-semibold text-2xl mr-4">$24.1</h3></div>


    </div>
    <div className="flex items-center justify-between px-2  rounded-xl shadow-xl shadow-[#eee]  mx-4">

{/* image and title */}
    <div className="flex items-center">
    <img src={plate2} className="z-10 h-[8vw]" alt="food image" /> 
    <div className="space-y-2">
    <h2 className="font-semibold text-2xl">Linguine</h2>
    <p className="text-base font-body">Pasta</p>
    <Trash2  className="hover:cursor-pointer text-[#FF3838] hover:text-[#FF3838]/70 transition duration-300"/>

    </div>
    </div>


{/*  + - buttons */}
    <div className="flex gap-4 items-center "> 
    <Minus size={40} className=" shadow-lg text-[#FF3838] rounded-full p-2 hover:cursor-pointer hover:text-[#FF3838]/60     "/>
    <span className="text-xl">2</span>
    <Plus size={40} className=" shadow-lg text-[#3FC66E] hover:text-[#3FC66E]/60 rounded-full p-2 hover:cursor-pointer   " />
    </div>

    <div><h3 className="text-accent font-bold text-xl mr-4">$24.1</h3></div>


    </div>

    </ScrollArea>



        {/* ordering     */}
        
    
    <div className="w-[20vw]">

        <div className=" flex flex-col py-6  w-full px-4 shadow-lg rounded-lg  ">
            <h1 className=" font-body font-semibold text-2xl">Order summary</h1>
            <div>

                <div className="flex justify-between items-center border-b border-gray-400 pb-2">
                    <p>Original price</p>
                    <p>$24.1</p>
                </div>
                 

                <div className="flex justify-between items-center text-slate-400 font-semibold">
                    <p>Delivery fee</p>
                    <p>$4.0</p>
                </div>
                <div className="flex justify-between items-center text-slate-400 font-semibold">
                    <p>Voucher</p>
                    <p>$0.0</p>
                </div>
                <div className="flex justify-between items-center text-slate-400 font-semibold">
                    <p>Tax fee</p>
                    <p>$2</p>
                </div>
                <div className=" my-2 flex justify-between items-center ">
                    <p className=" font-body font-semibold text-xl">Total</p>
                    <p className="text-accent font-bold text-xl">$30.1</p>
                </div>
            </div>

             <Button >Proceed to checkout <ArrowRight size={15} /></Button>
             <p className="text-center">or <Link className="text-accent">Continue shopping</Link></p>
        </div>


        <div className=" mt-5 flex flex-col py-4  w-full px-4 shadow-lg rounded-lg  ">
        <h1 className=" font-body  text-base text-black/50">Do you have a voucher or gift card?</h1>

           <Input 
           type='text'
           placeholder="Enter code here"
           className="mb-4"/>           

             <Button variant="secondary">Apply Code</Button>
          
        </div>

    </div>
    </div>


    </div>
  )
}

export default Cart
