import { Button } from "../ui/button"
import Card from "./Card"

 
const Team = () => {
  return (
    <div className="w-[1162px] mx-auto  flex flex-col justify-center">
          <h1 className=" title-centered">Our greatest chef </h1>
          
          <div className="grid grid-cols-3 gap-8">              
          <Card/>
          <Card/>
          <Card/>
          </div>


          <div className="flex justify-center mt-20">
           <Button variant="accent" size="lg">View all</Button>   
          </div>


          
    </div>
  )
}

export default Team
