 import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
//   import {bannerSpaghetti} from "./../../data/image"
import bannerSpaghetti from '/images/bannerSpaghetti.png'
import choux1 from '/images/choux1.png'
import choux2 from '/images/choux2.png'
const Banner = () => {
  return (
      <section className='w-[1162px] mx-auto flex   h-[80vh]  mt-10'>
          
          <div className='w-1/2   '>
              {/* Badge */}
              <div className='mt-[5rem] px-8 py-2 bg-[#FFE8CC] inline-block rounded-full '><p className='text-accent'>Restauran</p>
              </div>
              

              {/* title header */}
              <h1 className='mt-5 font-display font-bold text-[80px] text-primary leading-[110%]'>Italian <br />  Cuisine</h1>

              {/* paragraph text */}
              <p className='mt-5 leading-[200%] text-xl text-[#5C4529]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
            
              {/* Call to action buttons */}
              <div className='mt-[2rem] gap-4 flex'>
                  <Button variant="accent" size="lg">Order now   </Button>
                  <Link variant="secondary" size="lg" to={'/reservation'} ><Button variant="accent" size="lg">Reervation</Button></Link>
              </div>
          </div>



          <div className='relative w-1/2'>
              <img src={bannerSpaghetti}  className=" absolute-centered z-10 w-[492px ]"alt="food image" />
              <img
                  src={choux2}  className='absolute top-0 z-0 '  alt="food image" />
              <img
                  src={choux1}
                  className='absolute bottom-3 right-0 z-0   '
                  alt="food image" />
          </div>
           
          

          
    </section>
  )
}

export default Banner
