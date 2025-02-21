import React from 'react';
import {ArrowLeft, Settings, PenLine,ShieldEllipsis,ChevronRight,Bell,CaseLower,MessageCircle,Activity,Ban,Users,Trash2,LogOut,Phone,Mail, Database, FileClock, BookOpenText, Sparkles, Server} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {useNavigate} from 'react-router-dom';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Option from '../mycomponents/card';
import StorageUsage from '@/mycomponents/StorageUsage';




export default function Profile() {
  const navigate = useNavigate()
  return(
    <>
     <div className="mainDiv m-3">
       {/*First Container */}
       <div className='firtsDiv flex justify-between'>
        <ArrowLeft className='cursor-pointer' size={28} onClick={()=>{navigate('/')}}/>
         <p className='text-3xl font-bold'>Profile</p>
         <Settings size={28} className='text-white'/>
       </div>
       {/*Second Container */}
       <div className="mt-6">
         <div className="profilePic flex justify-center items-center">
           <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" className="w-36 h-36 rounded-full"/>
           
         </div>
         
         <div className="PersonName flex justify-center mt-3">
           <p className="text-xl font-bold">Akhilesh Kumar</p>
         </div>
         
       </div>

       {/*edit container*/}
       <div className='editDiv flex justify-around items-center mt-4'>
         <Button variant='outline' onClick={()=>{navigate('/editprofile')}}><PenLine/>Edit Profile</Button>
         
         
       </div>

       <Separator className='my-2'/>
       {/*Third container@*/}
       <div className='mahaConatiner'>
        {/* Data Chart */}
        <Card className='my-3 flex justify-center items-center'>
        <StorageUsage used='17' total='20'/>
        </Card>
         {/*Personal Info Card*/}
         <div className='personalInfo'>
         
 <Card>
  <CardHeader>
    <CardTitle className="font-bold">User Details</CardTitle>
    <CardDescription>Change Personal Info</CardDescription>
  </CardHeader>
  <CardContent >
    {/*emailId*/}
      <div className="p-3">
      <p className='text-slate-500'><Mail/>Email:</p>
      <p>baburaja@gmail.com</p>
    </div>
    
    
    
  </CardContent>
</Card>
           </div>
         {/*Account Info*/}
         <div className='AccountInfo my-3'>
         
 <Card>
  <CardHeader>
    <CardTitle className='font-bold'>Account</CardTitle>
    <CardDescription>Account Settings</CardDescription>
  </CardHeader>
  <CardContent>
    {/*Privacy area*/}
    
    <div className="PrivacyBox flex justify-between items-center cursor-pointer" onClick={()=>{navigate('/privacy')}}>
      <p className='flex'><ShieldEllipsis className='mx-3'/>Privacy</p>
      <ChevronRight/>
    </div>
    {/*Uploading History*/}
    <div className="Notification Box flex justify-between items-center my-6 cursor-pointer" onClick={()=>{navigate('/uploading_history')}}>
      <p className='flex'><FileClock className='mx-3'/>Uploading History</p>
      <ChevronRight/>
    </div>
    {/*Data Usuage*/}
    <div className="Notification Box flex justify-between items-center cursor-pointer text-gray-400">
      <p className='flex'><Server className='mx-3'/>Shared Storage</p>
      <p>Avaliable soon..</p>
      {/* <ChevronRight/> */}
    </div>
    
  </CardContent>
</Card>
           </div>

         {/*Settings*/}
         <div className='Settings my-3'>
         
 <Card>
  <CardHeader>
    <CardTitle className='font-bold'>Settings</CardTitle>
    <CardDescription>Your Settings</CardDescription>
  </CardHeader>
  <CardContent>
    {/*Font area*/}
    <div className="FontBox flex justify-between items-center cursor-pointer" onClick={()=>{navigate('/terms-conditions')}}>
      <p className='flex'><BookOpenText className='mx-3'/>Terms and Conditions</p>
      <ChevronRight/>
    </div>
    {/*Chat Customization area*/}
    <div className="ChatCustomizationBox flex justify-between items-center my-6 cursor-pointer" onClick={()=>{navigate('/subscription')}}>
      <p className='flex'><Sparkles className='mx-3'/>Subscription</p>
      <ChevronRight/>
    </div>
    
  </CardContent>
</Card>
           </div>
         {/*logout*/}
         <Card>
         <div className="FontBox flex justify-between items-center p-4">
      <p className='flex text-red-500'><Trash2 className='mx-3'/>LogOut</p>
      <LogOut className='cursor-pointer'/>
             
    </div>
         </Card>
         
         
       </div>

       

       
     </div> 
    </>
  )
   
}
