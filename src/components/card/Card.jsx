import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import ReviewStar from "./ReviewStar"

 // import { Link } from "react-router-dom"

const Card = ({menu} ) => {



  const navigate = useNavigate()
   
  return (
      <div className=" flex flex-col justify-center  w-[100%] h-[70vh] bg-muted rounded-[40px] text-center p-2" onClick={()=>navigate(`/menu/${menu.id}`)}>
      {/* <Link to={`${id}`}> */}
      
          <img src={`http://localhost:5000/images/menus/${menu?.imageURL}`}  className=" h-[250px] object-fill" crossOrigin="anonymous" />
          <h3 className="text-2xl font-body font-semibold">{menu?.name} </h3>
          <p className="italic text-orange-600">{menu?.category} </p>
        
      {/* </Link> */}
<ReviewStar rating ={menu?.rating}/>
      <p className="leading-[200%] font-body text-base "> {menu?.description} </p>

          <div className="flex justify-between items-center px-2 mt-2">
              <h3 className=" font-body text-xl font-semibold">${menu?.price}</h3>
              <Button variant="accent" size="lg">Order now</Button>
          </div>
      
    </div>
  )
}

export default Card
