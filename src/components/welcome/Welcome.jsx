import { Button } from "../ui/button"
import plate2 from '/images/plate2.png'
import leaf1 from '/images/leaf1.png'
import leaf2 from '/images/leaf2.png'
import leaf3 from '/images/leaf3.png'
 
const Welcome = () => {
  return (
    <section className='w-full px-[164px] flex  gap-32 h-[90vh] bg-[#ECF9F0] py-12'>
          
          <div className='w-1/2   order-2 pl-10 '>
           
              

              {/* title header */}
              <h1 className='mt-5 font-title font-bold text-[80px] text-primary leading-[110%]'>Welcome to <br /> <span className="text-accent">delizioso</span> </h1>

              {/* paragraph text */}
              <p className='mt-5 leading-[200%] text-xl w-[80%] text-[#5C4529]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
            
              {/* Call to action buttons */}
              <div className='mt-[2rem] gap-4 flex'>
                  <Button variant="accent" size="lg">See our menu   </Button>
                   
              </div>
          </div>



          <div className='relative w-1/2'>
              {/* plat legumes */}
              <img src={plate2} className="  absolute-centered z-10 w-[615px]" alt="food image" />              
              
              <img
                      src={leaf1} className='absolute top-0 z-10' alt="food image" />                  
              
              <img
                  src={leaf2}
                  className='absolute bottom-10 right-10 z-10'
                  alt="food image" />
              <img
                  src={leaf3}
                  className='absolute top-0 right-0 z-10'
                  alt="food image" />
              
              {/* cercle vert */}
             
              <div className="  absolute-centered -z-5 bg-secondary opacity-10 rounded-full w-[600px] h-[600px]"></div>
          
          </div>
           
          

          
    </section>
  ) 
}

export default Welcome
