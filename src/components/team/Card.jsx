import chef from '/images/chef.jpg'

const Card = () => {
  return (
    <div className='text-center'>
          <img src={chef} alt="" className='w-full' />
          <h3 className='py-4 text-2xl font-body font-semibold text-primary'>Betran Komar</h3>
          <h4 className='text-2xl font-body font-normal text-orange-400'>Head Chef</h4>
    </div>
  )
}

export default Card
