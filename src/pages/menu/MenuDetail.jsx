import { ArrowLeft, HeartIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import bannerSpaghetti from '/images/plate2.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {useEffect } from 'react'
import useMenuStore from '@/store/useMenuStore'

const MenuDetail = () => {
  const navigate = useNavigate()

  const {getMenu, menu,loading, error} = useMenuStore()
  const {id}= useParams()
  console.log(id)

 console.log(menu)
 useEffect(() => {
  // Fetch the menu data when the component mounts
  getMenu({id});
}, [id, getMenu]);


 // Handle loading and error states
 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error}</p>;
  return (
    <div className='w-[1162px] mx-auto mt-10'>
     <div><Link onClick={navigate(-1)} className='flex gap-2 text-slate-600'><ArrowLeft/>Retour</Link></div>
      
      <div className=' mt-5 flex gap-10 justify-between'>

        <div className=' bg-muted rounded-lg h-[55vh]'>
           <img src= {bannerSpaghetti} alt="" className='w-[40vw] '  />
        </div>
       
        <div className='space-y-4'>
            <div>
            <h1 className='font-body text-2xl font-semibold text-primary'>Linguine</h1>
            <h2>Pasta</h2>

            </div>
            
            <div>
              

            <h3 className='font-body text-lg font-medium text-primary '>Description</h3>
            <p className=' text-orange-800/50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
            </div>

            <div>
            <h3 className='font-body text-lg font-medium text-primary '>Ingredients</h3>
            <p className=' text-orange-800/50'>Onion , fromage , sauce ttomate , epinards</p>
            </div>

            <div className='flex'>
                <Button>Order Now</Button>
                <Button variant="muted"><HeartIcon/></Button>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default MenuDetail
