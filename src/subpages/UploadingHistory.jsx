import React from 'react'
import { ArrowLeft,Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';


function UploadingHistory() {
          const navigate = useNavigate();
  return (
    <div className='m-3 mt-5'>
           {/*First Container */}
                <div className='firtsDiv flex justify-between'>
                  <ArrowLeft className='cursor-pointer' size={28} onClick={()=>{navigate('/profile')}}/>
                   <p className='text-2xl font-bold'>Uploading History</p>
                   <Settings size={28} className='text-white'/>
                 </div>

                 {/* second container */}
                 <div className='my-6 mt-12'>
                    {/* Auto deletion old files  */}
                              <div>
                              <div className="flex items-center justify-between mx-2 my-4">
                                <Label className='text-lg font-semibold' htmlFor="auto-deletion">Download History</Label>
                                <Switch id="auto-deletion" className="bg-gray-300 data-[state=checked]:bg-[#6665ce]" />
                    
                              </div>
                    
                              
                              <div className='flex items-center'>
                                        <p className='text-xs text-gray-500 mx-3'>
                                                  It download the uploading history of your account <span>(upto last 40 days)</span>.Every Last 40 Days history will send to your email address.
                                        </p>
                                </div>
                    
                    
                              </div>
                 </div>
      
    </div>
  )
}

export default UploadingHistory
