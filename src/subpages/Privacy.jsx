import React from 'react';
import { ArrowLeft,Mail,PlaneTakeoff,RectangleEllipsis,Settings, Sparkles, Trash2, UsersRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';


function Privacy() {
          const navigate = useNavigate();
  return (
    <div className='m-3'>
      {/*First Container */}
      <div className='firtsDiv flex justify-between'>
        <ArrowLeft className='cursor-pointer' size={28} onClick={()=>{navigate('/profile')}}/>
         <p className='text-2xl font-bold'>Privacy</p>
         <Settings size={28} className='text-white'/>
       </div>
       {/* <Separator className='my-3'/> */}
      
       {/* second container */}
       <div className='thirdContainer my-6 mt-8'>
          {/* Auto deletion old files  */}
          <div>
          <div className="flex items-center justify-between mx-2 my-4">
            <Label className='text-lg font-semibold' htmlFor="auto-deletion">Auto -Deletion</Label>
            <Switch id="auto-deletion" className="bg-gray-300 data-[state=checked]:bg-[#6665ce]" />

          </div>

          
          <div className='flex items-center'>
                    <p className='text-xs text-gray-500 mx-3'>
                              It delete the old files <span>(Older than 40 days)</span> which gave you the more free storage.
                    </p>
            </div>


          </div>
          {/*Security Enhancer*/}
          <div>
          <div className="flex items-center justify-between mx-2 my-4">
            <Label className='text-lg font-semibold' htmlFor="auto-deletion">Enhance Security</Label>
            <Switch id="auto-deletion" className="bg-gray-300 data-[state=checked]:bg-[#6665ce]" />

          </div>

          
          <div className='flex items-center'>
                    <p className='text-xs text-gray-500 mx-3'>
                              It enables the creation of Securekey of your Credentials which protect your account from any Vulnerabilities.
                    </p>
            </div>


          </div>
          {/*Receipt*/}
          <div>
          <div className="flex items-center justify-between mx-2 my-4">
            <Label className='text-lg font-semibold' htmlFor="auto-deletion">Receipt</Label>
            <Switch id="auto-deletion" className="bg-gray-300 data-[state=checked]:bg-[#6665ce]" />

          </div>

          
          <div className='flex items-center'>
                    <p className='text-xs text-gray-500 mx-3'>
                              It generates the log of your Account to see the ongoing Activities on your account.It needs 7 Days and after 7 days, Receipt send to your email address.  
                    </p>
            </div>


          </div>
          {/*Memories*/}
          <div>
          <div className="flex items-center justify-between mx-2 my-4">
            <Label className='text-lg font-semibold' htmlFor="auto-deletion">✨Memories</Label>
            <Switch id="auto-deletion" className="bg-gray-300 data-[state=checked]:bg-[#6665ce]" />

          </div>

          
          <div className='flex items-center'>
                    <p className='text-xs text-gray-500 mx-3'>
                              Remember your special occasions with your loved ones. Feature needs a premium.  
                    </p>
            </div>


          </div>


       </div>
       {/* separator */}
       <Separator className='my-1'/>
        {/*Third container */}
        <div className='mt-7'>
          {/* change username div */}
          <div className='flex my-6 items-center'>
                    <UsersRound size={28}/><p className='text-base font-semibold ml-4 cursor-pointer'>Change Username</p>               
          </div>
          {/* change password div */}
          <div className='flex my-6 items-center'>
                    <RectangleEllipsis size={28}/><p className='text-base font-semibold ml-4 cursor-pointer'>Change Password</p>               
          </div>
          {/* Mail div */}
          <div className='flex my-6 items-center'>
                    <Mail size={28}/><p className='text-base font-semibold ml-4 cursor-pointer'>Email Address</p>               
          </div>
          
          {/* Delete div */}
          <div className='flex my-6 items-center'>
                    <Trash2 size={28}color='red'/><p className='text-base font-semibold ml-4 text-red-600 cursor-pointer'>Remove Account</p>               
          </div>


       </div>
      


    </div>
  )
}

export default Privacy;
