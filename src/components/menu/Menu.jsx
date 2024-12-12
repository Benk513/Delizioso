// import Card from "../card/Card"
// import { Button } from "../ui/button"
// import { MdArrowForwardIos } from "react-icons/md";
// import { MdArrowBackIos } from "react-icons/md";

//   import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"
// const Menu = () => {
//   return (
//       <div className='w-[1162px] mx-auto '>
//       <h1 className=' title-centered'>Our popular menu</h1>


//       <div className='flex flex-wrap justify-start gap-4 w-full mb-10'>
//         <Button size="lg">All Category</Button>
//         <Button variant="ghost" size="lg">Dinner</Button>
//         <Button variant="ghost" size="lg">Lunch  </Button>
//         <Button variant ="ghost" size="lg">Dessert  </Button>
//         <Button variant="ghost" size="lg">Drink</Button>
//       </div>

//       <div className="grid grid-cols-3 gap-10">

//           <Card/>
//           <Card/>
//           <Card/>
//           <Card/>
//       </div>

//       {/* paagination */}

//       <div className="flex justify-center items-center gap-2 py-10 ">
//        <Button><MdArrowBackIos/></Button>
//        <Button variant="ghost">1</Button>
//        <Button variant="ghost">2</Button>
//        <Button variant="ghost">...</Button>
//        <Button><MdArrowForwardIos/></Button>
//       </div>


//       <div className="flex justify-center items-center gap-2 py-10 ">



//     <Pagination>
//       <PaginationContent>
//         <PaginationItem>
//           <PaginationPrevious href="#" />
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href="#"isActive>1</PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href="#" >
//             2
//           </PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href="#">3</PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationEllipsis />
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationNext href="#" />
//         </PaginationItem>
//       </PaginationContent>
//     </Pagination>

//       </div>




//       </div>




//   )
// }

// export default Menu




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
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import useMenuStore from "@/store/useMenuStore";


const Menu = () => {

  const [position, setPosition] = useState("bottom")
  const inputRef = useRef(null)


  const { menus, loading, getAllMenus } = useMenuStore()
  const [filteredMenus, setFilteredMenus] = useState(menus)

  useEffect(() => {

    inputRef.current.focus()
  }, [])

  useEffect(() => {
    getAllMenus()
  }, [])

  useEffect(() => {
    setFilteredMenus(menus);
  }, [menus]);


  const filterByCategory = (category) => {
    if (category === "") {
      setFilteredMenus(menus);
    }
    else{

      const filtered = menus.filter(menu => menu.category === category);
      setFilteredMenus(filtered);
    }
      
  
  };

 

  //create a filter function to only show menu by category.?


  return (
    <section className="w-[1162px] mx-auto mt-10">
      <h1 className=' title-centered'>Menu</h1>

      {/* Sort by category */}
      <div className='flex flex-wrap justify-between gap-4 w-full mb-10'>
        <div>
          <Button 
          size="lg" 
          onClick={() => filterByCategory("")}
          >All Category</Button>

          <Button 
          variant="ghost" 
          size="lg"
          onClick={() => filterByCategory('Dinner')}>Dinner</Button>

          <Button variant="ghost" size="lg">Lunch  </Button>

          <Button 
          variant="ghost" 
          size="lg" 
          onClick={() => filterByCategory('Dessert')}>Dessert  </Button>
          <Button variant="ghost" size="lg">Drink</Button>
        </div>

        {/* Search */}
        <Input ref={inputRef} placeholder="Search..." className="w-[20vw]    rounded-full border border-slate-200  text-sm ring-offset-white file:border-0 file:bg-transparent  placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed" />

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

      {!loading && <div className="grid grid-cols-4 gap-4">
        {filteredMenus.map((menu, index) => (
          <Card key={index} menu={menu} />
        ))

        }
      </div>

      }

      {loading && <p>Loading...</p>}


      {/* paagination */}
      <div className="flex justify-center items-center gap-2 py-10 ">

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
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