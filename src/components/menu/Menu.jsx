import Card from "../card/Card"
import { Button } from "../ui/button"
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

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
      <div className='w-[1162px] mx-auto '>
      <h1 className=' title-centered'>Our popular menu</h1>
      

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
       <Button><MdArrowBackIos/></Button>
       <Button variant="ghost">1</Button>
       <Button variant="ghost">2</Button>
       <Button variant="ghost">...</Button>
       <Button><MdArrowForwardIos/></Button>
      </div>


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

          
      
      
      </div>


      

  )
}

export default Menu