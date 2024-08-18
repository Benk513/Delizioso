import Card from "../card/Card"
import { Button } from "../ui/button"

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
          
      
      
      </div>


      

  )
}

export default Menu