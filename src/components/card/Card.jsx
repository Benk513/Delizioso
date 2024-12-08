import { Button } from "../ui/button"

import bannerSpaghetti from '/images/bannerSpaghetti.png'
// import { Link } from "react-router-dom"

const Card = ( ) => {

  // const {id, title , description , price, } = menu

  return (
      <div className=" flex flex-col justify-center  w-[100%] h-[70vh] bg-muted rounded-[40px] text-center p-2">
      {/* <Link to={`${id}`}> */}

          <img src={bannerSpaghetti} alt="" className=" " />
          <h3 className="text-2xl font-body font-semibold">Spaguetti</h3>
        
      {/* </Link> */}

      <p className="leading-[200%] font-body text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>

          <div className="flex justify-between items-center px-2 mt-2">
              <h3 className=" font-body text-xl font-semibold">$12.05</h3>
              <Button variant="accent" size="lg">Order now</Button>
          </div>
      
    </div>
  )
}

export default Card
