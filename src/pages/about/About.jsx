import plate2 from '/images/plate2.png'

import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

import owner from '/images/owner.jpg'
import resto from '/images/resto.png'
 
const About = () => {
    return (
        <>
            <section className='w-full px-[164px] flex  gap-32   h-screen   py-12'>
              <div className='w-1/2   order-2 pl-5 flex flex-col justify-center '>              
    
                  {/* title header */}
                  <h1 className='mt-5 font-title font-bold text-[80px] text-primary leading-[110%]'> <span className="text-accent">Our</span><br /> Restaurant  </h1>
    
                  {/* paragraph text */}
                  <p className='mt-5 leading-[200%] text-xl w-[80%] text-[#5C4529]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse. </p>
              </div>
    
              <div className='relative w-1/2'>
                  {/* plat legumes */}
                  <img src={resto} width={'350'} className="  absolute-centered z-10 " alt="food image" />          
                  
                    {/* cercle orange */}
                 
                <div className="  absolute-centered  bg-muted opacity-40 rounded-full w-[600px] h-[600px]"></div>

                {/* cercle vert */}
                 
                  <div className="  absolute-centered  bg-muted opacity-100 rounded-full w-[460px] h-[460px]"></div>
              
              </div>              
            </section>
            

            {/* Second Section */}
            
            <section className='w-full px-[164px] flex justify-center gap-32   h-screen   py-12'>
              
              <div className='w-1/2  pl-5 flex items-center  '>             
                  
                  {/* paragraph text */}
                  <p className='mt-10 leading-[200%] text-xl w-[80%] text-[#5C4529]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>                

              </div>
   
              <div className='relative w-1/2'>
                  {/* plat legumes */}
                  <img src={plate2} className="  absolute-centered z-10 w-[450px]" alt="food image" />          
                  
                    {/* cercle orange */}
                 
                <div className="  absolute-centered  bg-muted opacity-40 rounded-full w-[600px] h-[600px]"></div>
                {/* cercle vert */}
                 
                  <div className="  absolute-centered  bg-muted opacity-100 rounded-full w-[460px] h-[460px]"></div>
              
              </div>              
            
              
            </section>          

            {/* Owner speech */}

            <section className='w-full px-[164px] flex  gap-32   h-screen   py-12'>
              <div className='w-1/2 flex flex-col gap-6   order-2 '>              
    
                  {/* title header */}
                    <h1 className='mt-5 font-title font-bold text-[80px] text-primary leading-[110%]'> <span className="text-accent">Owner</span> & <br />Executive Chef  </h1>
                    
                    {/* subtitle */}
                    <h2 className=' font-body text-3xl font-semibold mt-4'>Ismail Marzuki</h2>
    
                    {/* quote of the owner */}
                    <div className=' mt-10   flex h-[250px] items-center  relative'>
                       {/* paragraph text */}
                 
                        <p className='leading-[200%] italic text-2xl w-[80%] text-[#5C4529]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> 

                    <RiDoubleQuotesL className='absolute top-0' color='#FFE8CC' size='40'/> 
                    <RiDoubleQuotesR  className='absolute bottom-0 right-1/4' color='#FFE8CC' size='40'/> 
   
                    </div>
                  
              </div>
    
              <div className='relative w-1/2 '>
                  {/* plat legumes */}
                  <img src={owner} className="z-10 w-[460px] h-[690px] object-cover" alt="food image" />          
                
              </div>              
            </section>

        </>
        

      ) 
    }
    
 
export default About
