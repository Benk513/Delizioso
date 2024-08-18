import Card from "./../../components/card/Card"
import { Button } from "@/components/ui/button";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

import Menus from "@/components/menu/Menu";
  import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const Menu = () => {
  return (
    <section className="w-[1162px] mx-auto mt-10">
      <h1 className=' title-centered'>Menu</h1>
       
      <div className='flex flex-wrap justify-start gap-4 w-full mb-10'>
        <Button size="lg">All Category</Button>
        <Button variant="ghost" size="lg">Dinner</Button>
        <Button variant="ghost" size="lg">Lunch  </Button>
        <Button variant ="ghost" size="lg">Dessert  </Button>
        <Button variant="ghost" size="lg">Drink</Button>
      </div>
          
        <div className="grid grid-cols-3 gap-10">
        
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
