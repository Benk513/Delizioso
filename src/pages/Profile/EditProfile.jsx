import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {  Dialog,  DialogContent,  DialogDescription,  DialogFooter,  DialogHeader,  DialogTitle,  DialogTrigger,} from "@/components/ui/dialog"
import { Edit } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import useUserStore from "@/store/useUserStore"
import FileUploader from "./FileUploader"


const EditProfile = () => {

const user = useUserStore(state =>state.user)

  return (
    <div className="w-full text-black  p-10 ">
      <h1 className="text-3xl font-semibold text-gray-600 mb-4">Edit Profile</h1>

      <div className="bg-white rounded-2xl pb-10">
    {/* profile section  */}
     <FileUploader/>
    <Separator  className="bg-gray-300"/>
    
         

{/* personal info */}
      <section className="  border-gray-300  border mx-10 px-5 rounded-xl my-4  ">
      <div className="flex items-center justify-between my-4">
      <h3 className="text-xl font-semibold">Personal Info</h3>
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2"><Edit size={15}/> Edit </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

      </div>

      <div className="grid grid-cols-4 my-4">

      <div>
      <p className="text-black/60">Full Name</p>
      <p className="text-lg">{user?.name}</p>
      </div>

      <div>
      <p className="text-black/60">Email</p>
      <p className="text-lg">{user?.email}</p>
      </div>

      <div>
      <p className="text-black/60">Phone</p>
      <p className="text-lg">{user?.phone} </p>
      </div>
      <div>
      <p className="text-black/60">Creation Date</p>
      <p className="text-lg"> {user?.createdAt}</p>
      </div>
      </div>    

      </section>


{/* location info */}
      <section className="  border-gray-300  border mx-10 px-5 rounded-xl my-4  ">
      <div className="flex items-center justify-between my-4">
      <h3 className="text-xl font-semibold">Location</h3>
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2"><Edit size={15}/> Edit </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

      </div>

      <div className="grid grid-cols-3 my-4">

      <div>
      <p className="text-black/60">Address</p>
      <p className="text-lg"> {user?.address} </p>
      </div>
      </div>    

      </section>


{/* bio info */}
      <section className="  border-gray-300  border mx-10 px-5 rounded-xl my-4  ">
      <div className="flex items-center justify-between my-4">
      <h3 className="text-xl font-semibold">Bio</h3>
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2"><Edit size={15}/> Edit </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

      </div>

      <div className="grid grid-cols-1 max-w-[800px] my-4  ">
      <p className="text-black/70 text-lg leading-8">{user?.bio} </p>
  
      </div>    
      </section>
      </div>
    </div>
  )
}
export default EditProfile