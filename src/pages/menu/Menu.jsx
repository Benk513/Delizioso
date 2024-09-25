import Card from "./../../components/card/Card"
import { Button } from "@/components/ui/button";
 import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";


const Menu = () => {

  const [position, setPosition] =useState("bottom")
  return (
    <section className="w-[1162px] mx-auto mt-10">
      <h1 className=' title-centered'>Menu</h1>
       
      <div className='flex flex-wrap justify-between gap-4 w-full mb-10'>
         <div>  
        <Button size="lg">All Category</Button>
        <Button variant="ghost" size="lg">Dinner</Button>
        <Button variant="ghost" size="lg">Lunch  </Button>
        <Button variant ="ghost" size="lg">Dessert  </Button>
        <Button variant="ghost" size="lg">Drink</Button>
  </div>


    
        <DropdownMenu>
      <DropdownMenuTrigger asChild className="data-[state=open]:bg-slate-100 dark:focus:bg-slate-200 dark:data-[state=open]:bg-slate-800">
        <Button variant='link'>Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Name</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Price </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Date</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  

      </div>
          
        <div className="grid grid-cols-4 gap-4">
        
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      
        </div>          
      
      {/* paagination */} 
      <div className="flex justify-center items-center gap-2 py-10 ">
  
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#"isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
              </Pagination>
              
             

      </div>
      
    </section>
  )
}

export default Menu