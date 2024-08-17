import Navbar from "@/components/navbar/Navbar"
import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <div className="bg-red-200 container">
           
          <Navbar/>
          <Button variant="destructive">Click Here </Button>
    </div>
  )
}

export default Home
