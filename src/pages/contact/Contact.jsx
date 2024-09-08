import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  return (
    <div className="w-full px-20 lg:px-[164px] lg:gap-32   h-screen   lg:py-12">
      
      <h1 className='my-5 font-title font-bold text-[500%] text-primary leading-[110%] text-center'> Contact us  </h1>
      <p className="text-center font-body text-lg mb-5">We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>

      {/* form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10">
      <Input
              id="name"
              defaultValue=""
              type="text"
              placeholder="First name"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
            />
      <Input
              id="name"
              defaultValue=""
              type="text"
              placeholder="First name"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
            />
      <Input
              id="name"
              defaultValue=""
              type="text"
              placeholder="First name"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
            />
      <Input
              id="name"
              defaultValue=""
              type="text"
              placeholder="First name"
              className=" h-[60px] bg-slate-200/20 border-none mb-5"
            />

<Textarea placeholder="Add a special request" className='bg-slate-200/20 border-none min-h-[200px] md:col-span-2' />

<Button className="md:col-span-2" size="lg">Submit</Button>
      </div>


    </div>
  )
}

export default Contact
