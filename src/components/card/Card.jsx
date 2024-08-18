import { Button } from "../ui/button"

import bannerSpaghetti from '/images/bannerSpaghetti.png'

const Card = () => {
  return (
      <div className=" flex flex-col justify-center w-[100%] h-[637px] bg-muted rounded-[70px] text-center p-8">
          <img src={bannerSpaghetti} alt="" className=" " />
          <h3 className="text-2xl font-body font-semibold">Spaguetti</h3>

      <p className="leading-[200%] font-body text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>

          <div className="flex justify-between items-center mt-8">
              <h3 className=" font-body text-2xl font-bold">$12.05</h3>
              <Button variant="accent" size="lg">Order now</Button>
          </div>
      
    </div>
  )
}

export default Card
