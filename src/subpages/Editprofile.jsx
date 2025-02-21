import React from 'react'
import { ArrowLeft,Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from 'react-router-dom'

function Editprofile() {
          const navigate = useNavigate();
  return (
    <div className='m-3'>
      {/*First Container */}
      <div className='firtsDiv flex justify-between'>
        <ArrowLeft className='cursor-pointer' size={28} onClick={()=>{navigate('/profile')}}/>
         <p className='text-3xl font-bold'>Edit</p>
         <Settings size={28} className='text-white'/>
       </div>
       {/* second container */}
       <div className='editform grid grid-rows-2 gap-6 mt-8'>
          <form action="" method="post">
          {/* name field */}
       <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name">Name</Label>
      <Input type="name" id="name" placeholder="Name" />
    </div>
          {/* photo filed */}
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
      <Label htmlFor="picture">Profile Photo</Label>
      <Input id="picture" type="file" />
      
    </div>
    <Button type="submit" className='mt-4'>Submit</Button>
    </form>
       </div>


    </div>
  )
}

export default Editprofile
