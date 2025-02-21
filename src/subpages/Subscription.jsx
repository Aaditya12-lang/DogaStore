import React from 'react'
import { ArrowLeft,IndianRupee,Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader,CardTitle,CardDescription,CardContent,CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function Subscription() {
          const navigate = useNavigate()
  return (
    <div className='m-3'>
          {/*First Container */}
      <div className='firtsDiv flex justify-between'>
        <ArrowLeft className='cursor-pointer' size={28} onClick={()=>{navigate('/profile')}}/>
         <p className='text-2xl font-bold'>Subscription</p>
         <Settings size={28} className='text-white'/>
       </div>

       {/* second container */}
       <div className='mt-12'>
          {/* card 1 */}
          <Card className='my-2'>
                    <CardHeader>
                              <CardTitle className='text-4xl'>Premium</CardTitle>
                              <CardDescription>Get access to exclusive content</CardDescription>
                    </CardHeader>
                    <CardContent>
                              <li className='font-semibold'>Get storage upto 50 GB.</li>
                              <li className='font-semibold'>Faster Uploading Speed.</li>
                              <li className='font-semibold'>Password Protected Links for Sharing.</li>
                              <li className='font-semibold'>Personalised Vault.</li>
                              <div className='flex items-center mt-5 '>
                              <p className='text-4xl'>₹</p>
                              <p className='text-4xl'>1,000</p>        
                              <p className='mt-4 text-lg'>/month</p>        
                              </div>
                    </CardContent>
                    <CardFooter>
                    <div className='flex justify-center items-center'>
                              <Button className='px-10'>Get Premium</Button>
                    </div>     
                    </CardFooter>
                    

          </Card>
          {/* card 2 */}
          <Card className='my-2'>
                    <CardHeader>
                              <CardTitle className='text-4xl'>Legend</CardTitle>
                              <CardDescription>Get access to exclusive content</CardDescription>
                    </CardHeader>
                    <CardContent>
                              <li className='font-semibold'>Get storage upto 100 GB.</li>
                              <li className='font-semibold'>Faster Uploading Speed <span className='text-yellow-500'>(30x faster)</span>.</li>
                              <li className='font-semibold'>Password Protected Links for Sharing.</li>
                              <li className='font-semibold'>Personalised AI for Categorization.</li>
                              <li className='font-semibold'>Advanced Security using the PassKey.</li>
                              <li className='font-semibold'>No Ads.</li>
                              <li className='font-semibold'>24x7 Support.</li>
                              <li className='font-semibold'>Multi Device Sync.</li>
                              <li className='font-semibold'>Time Limited Links.</li>
                              <li className='font-semibold'>Geo -Fencing.</li>
                              <li className='font-semibold'>Collaborative Workspace.</li>
                              <li className='font-semibold'>Private Vault.</li>
                              <div className='flex items-center mt-5 '>
                              <p className='text-4xl'>₹</p>
                              <p className='text-4xl'>3,500</p>        
                              <p className='mt-4 text-lg'>/month</p>        
                              </div>
                    </CardContent>
                    <CardFooter>
                    <div className='flex justify-center items-center'>
                              <Button className='px-10'>Get Legend</Button>
                    </div>     
                    </CardFooter>
                    

          </Card>

       </div>
      
    </div>
  )
}

export default Subscription
