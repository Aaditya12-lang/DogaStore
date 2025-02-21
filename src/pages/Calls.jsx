import React from 'react';
import {ArrowLeft,Leaf} from 'lucide-react';
import {CallDiv} from '@/mycomponents/name_div';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {Button} from '@/components/ui/button';


export default function Calls() {
  return(
    <>
      <div className='m-3'>
        {/*first div*/}
        <div className='firstDiv flex justify-between items-center'>
          <ArrowLeft size={28}/>
          <p className='text-2xl font-bold'>Calls</p>
          <Leaf className='text-white'/>
        </div>
        {/*Second Div*/}
        <div className='favrotiesList my-3'>
          <p className='mx-3 text-xl font-bold'>Recent Calls</p>
          <CallDiv name='Aaditya Singh'/>
          <CallDiv name='Baburam'callType="audio"/>
          <CallDiv name='Sarthak'callType="audio"/>
          <CallDiv name='Aayush 2'callType=""/>
          
        </div>
      </div>
    </>
  )
   
}
