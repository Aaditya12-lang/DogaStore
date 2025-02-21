import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';

// Drawer
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, Phone, Video, QrCode,CircleX,ArrowUpRight,AudioLines } from "lucide-react";

function NameDiv({ messageCount, name, lastMsg, lastMsgTime }) {
  const [msgcount, setmsgcount] = useState(messageCount);
  const [lstMsg, setlstMsg] = useState(lastMsg);
  const [lstMsgTime, setlstMsgTime] = useState(lastMsgTime);
  //const [lstMsgTime, setlstMsgTime] = useState(lastMsgTime);
  const [userName, setuserName] = useState(name);

  useEffect(() => {
    // last message
    if (lastMsg && lastMsg.length > 30) {
      setlstMsg(`${lastMsg.slice(0, 30)}....`);
    } else {
      setlstMsg(lastMsg || ""); // Fallback to empty string if lastMsg is undefined
    }
    //name
    if (name && name.length > 20) {
      setuserName(`${name.slice(0, 20)}....`);
    } else {
      setuserName(name || ""); // Fallback to empty string if lastMsg is undefined
    }
    // message count
    if (messageCount > 999) {
      setmsgcount(`${messageCount}++`);
    } else {
      setmsgcount(messageCount);
    }
  }, [messageCount, lastMsg]);

  return (
    <div className="flex justify-between mt-6 cursor-pointer rounded-lg">
      {/* profile pic */}
      <Dialog>
        <div className="profilePic flex items-center cursor-pointer">
          <DialogTrigger asChild>
            <Avatar className="w-14 h-14">
              <AvatarImage
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                className="object-cover"
              />
            </Avatar>
            {/* username */}
          </DialogTrigger>
          <div className="userName ml-3">
            <p className="text-lg font-semibold">{userName}</p>
            <p className="text-sm  text-zinc-500">{lstMsg}</p>
          </div>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">{name}</DialogTitle>
            <DialogDescription>
              <img
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                className="rounded-lg"
              />
              <div className="icons mt-4 flex justify-around">
                <Phone className="cursor-pointer" size={28} />
                <Video className="cursor-pointer" size={28} />
                <QrCode className="cursor-pointer" size={28} />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* time and message badge */}
      <div className="time-msg flex flex-col items-center">
        <div className="timeBadge">
          <p className="text-sm">{lstMsgTime}</p>
        </div>

        <div className="msgBadge">
          {msgcount > 0 && (
            <div className="w-[25px] h-[20px] bg-[#FAA307] rounded-full flex justify-center items-center">
              <p className="text-xs">{msgcount}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AlertDiv({name}) {
  
  return(
    <>
      <div className='mainAlertDiv my-4'>
        <div className='flex justify-between items-center'>
          {/*Profile Pic*/}
          <div className='profilePic'>
      <Avatar className="w-14 h-14">
        <AvatarImage         src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" className="object-cover"/></Avatar>
          </div>
          {/*Name*/}
          <div className='nameDiv'>
            <p className='text-base font-semibold'>{name}</p>
          </div>
          {/*Button box*/}
          <div className='buttonBox grid grid-cols-2 gap-2'>
            <Button>Accept</Button>
            <Button variant='outline'>Reject</Button>
          </div>
          
        </div>
        
      </div>
    </>
  )
   
}

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




function CallDiv({name,callType,src}) {
  
  return(
    <>
      <Drawer>
      <div className='mainAlertDiv my-4'>
        <div className='flex justify-between items-center'>
          {/*Profile Pic*/}        
          <div className='profilePic'>
      <Avatar className="w-14 h-14">
        <AvatarImage         src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" className="object-cover"/></Avatar>
          </div>
            <DrawerTrigger>
          {/*Name*/}
          <div className='nameDiv'>
          
            <p className='text-xl font-semibold'>{name}</p>
          
            
            {/*date and time*/}
            <div className='flex justify-between items-center'>
              <ArrowUpRight className='text-red-500 text-sm' size={17}/>
              <p className='text-slate-500 text-sm'>December,23</p>
            <p className='text-slate-500 text-sm mx-3'>04:20pm</p>
            </div>
          </div>
            </DrawerTrigger>
          {/*Button box*/}
          <div className='buttonBox'>
            {
              callType=='audio'?<Button variant='outline'><Phone size={28}/></Button>:<Button variant='outline'><Video size={28}/></Button>
            }
            
          </div>
          
        </div>
      </div>
      

   <Drawering name={name}/>
</Drawer>
    </>
  )
   
}

function Drawering({name}) {
   return(
     <>
      <DrawerContent>
    <DrawerHeader>
      <DrawerTitle className="flex-column justify-center items-center ">
        <div className='profilePic flex justify-center items-center'>
      <Avatar className="w-14 h-14">
        <AvatarImage         src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" className="object-cover"/></Avatar>
          </div>
        <p className='text-xl font-bold mt-3'>{name}</p>
        
      </DrawerTitle>
      <DrawerDescription>Make Calls.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter className='flex'>
      <div className='flex justify-around'>
        <Button variant='outline'>
          <Video/>
        </Button>
        
        <Button variant='outline'>
          <Phone/>
        </Button>
       </div>
    </DrawerFooter>
  </DrawerContent> 
       
     </>
   )
}






export {NameDiv, AlertDiv,CallDiv} ;
