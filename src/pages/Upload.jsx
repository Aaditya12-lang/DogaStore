import React,{useState} from 'react'
import { ArrowLeft,Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';

function Upload() {
          const navigate = useNavigate();
          const[selected,setselected] = useState(null)
          //check for the selected file
          function CHECKINPUTFILE(event){
                    const file = event.target.files[0];
                    setselected(file);
          }
  return (
    <div className='my-3 mx-1'>
           {/*First Container */}
       <div className='firtsDiv flex justify-between items-center'>
        <ArrowLeft className='cursor-pointer' size={28} onClick={()=>{navigate('/')}}/>
         <p className='text-3xl font-bold'>Upload</p>
         <Settings size={28} className='text-white'/>
       </div>
       {/* second container */}
       <div className="grid w-full max-w-sm items-center gap-1.5 my-[4rem]">
          <div className='imagediv'>
          <img src="public\upload_img.jpg" alt="" className='sepia-50 rounded-2xl' />
          </div>
      <Label htmlFor="picture" className='text-base font-semibold'>Upload a File</Label>
      <Input className='cursor-pointer' id="picture" type="file" onChange={CHECKINPUTFILE}/>
      {
          !selected?<Button className='my-3' disabled>Upload</Button>:<Button className='my-3 cursor-pointer'>Upload</Button>
      }
    </div>
    </div>
  )
}

export default Upload
