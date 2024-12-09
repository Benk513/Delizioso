import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import useUserStore from '@/store/useUserStore'
import axios from './../../lib/axios'
import { UploadCloud } from 'lucide-react'
import { useState } from 'react'
import { PiSpinner } from 'react-icons/pi'
 
const FileUploader = () => {
    const user = useUserStore(state =>state.user)

    
//This code checks if the user's photo is 'default.jpg' and displays the default image URL if it is. Otherwise, it shows the user's uploaded image.
// Construct the image URL based on the user photo
    const userPhoto = user?.photo === 'default.jpg' 
    ? '/images/users/default.jpg'  // Point to the default image
    : `/images/users/${user?.photo}`;  // Point to the actual user photo if available

    const [photo, setPhoto] = useState()

// const submitImage =async(e) =>{
//   e.preventDefault()
//   const formData = new FormData()
//   formData.append('file', photo)
//   // Call the API to update the user's image
//   // For demonstration purposes, we'll assume the API endpoint is '/api/update-image'
//   // In a real application, you'd replace this with your actual API endpoint

//    const response = await axios.patch("http://localhost:5000/api/v1/users/updateMe", formData,{
//     headers: {
//       'Content-Type': 'multipart/form-data',
//         withCredentials:true 
      
//       },
//   })
//   console.log(response.data)
// }

// const onInputChange = (e) =>{
//   console.log(e.target.files[0])
//   setPhoto(e.target.files[0])
// }

const [file,setFile] = useState(null)

const [status, setStatus]= useState('idle')

const [uploadProgress , setUploadProgress]=useState(0)
 
const isUploading = file && status==="uploading"

function handleFileChange(e){
    if(e.target.files){
        setFile(e.target.files[0])
    }
}

async function handleFileUpload(){
    if(!file) return;
    setStatus("uploading")
    setUploadProgress(0)

    const formData = new FormData();
    formData.append('file',file);

    try {
     const res= await axios.patch("api/v1/users/updateMe",formData,{
            headers:{
                'Content-Type':'multipart/form-data',
            },
            onUploadProgress:(ProgressEvent)=>{
                const progress =ProgressEvent.total ? Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total) : 0 ;
                setUploadProgress(progress)

            }
        });

        setStatus("success")
        setUploadProgress(100)
        
        console.log(res)
    } catch (error) {
        setStatus("error")
        setUploadProgress(0)
        console.log(error)
        
    }
}


  return (
    <div  
    className="flex py-8 justify-between gap-10 items-center px-10" >
      <div className="flex items-center justify-between gap-10">

      <Avatar className="size-[150px]">
      <AvatarImage src={`http://localhost:5000`+userPhoto} crossorigin="anonymous" alt={`${user?.name}`}/>
      <AvatarFallback className="text-2xl font-medium">User</AvatarFallback>
      </Avatar>

      {file && (<div>
        <p>file name: {file.name}</p>
        <p>size:{(file.size/1024).toFixed(2)} KB</p>
        <p>Type:{file.type}</p>
      </div>)}

      {status === 'success' && (
        <p className="text-sm text-green-600">File uploaded successfully!</p>
      )}

      {status === 'error' && (
        <p className="text-sm text-red-600">Upload failed. Please try again.</p>
      )}
      
      <div className="flex flex-col gap-4 ">

          <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}          
          className="w-60 rounded-xl"
          />
          <div className='flex items-center justify-center w-full'>
          {status==="uploading" && <Progress value={uploadProgress} />  }       
          </div>

          <Label className="text-black/40 text-md">At least 500*500 px recommended. <br /> JPG or PNG is allowed.</Label>
      
      </div>
      </div>
      <Button variant="outline" className="gap-4" disabled={isUploading} onClick={handleFileUpload}> <UploadCloud /> Upload <PiSpinner className={ isUploading? `animate-spin` :"hidden"} /></Button>
  </div>
  )
}
export default FileUploader