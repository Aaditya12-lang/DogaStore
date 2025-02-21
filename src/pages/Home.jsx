import React from 'react';
import BottomBar from '@/mycomponents/Bottombar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import StorageUsage  from '@/mycomponents/StorageUsage';
import {Search,Images,FileStack} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import EmptyIndicator from '@/mycomponents/EmptyIndicator';
import { Stack } from '@/mycomponents/Stack';
import { ScrollArea } from '@/components/ui/scroll-area';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
   return(
     <>
       <div className="mainDiv m-0 font-sans">
         {/*Upper Div*/}
         <div className="bg-gradient-to-t from-[#667bf0] ... w-full h-72 rounded-b-[4rem]">
           {/*Heading and icons*/}
           <div className="flex justify-center items-center mx-3 mt-5">
             <p className="text-3xl font-bold">DogaStore</p>
             {/* <Search className='h-[2rem] w-[2rem]'/> */}
           </div>
           {/*Quote*/}
            <div className='flex justify-center items-center pt-24' style={{flexDirection:'column'}}>
             <p className="text-3xl font-semibold">Manage</p>
             <p className="text-5xl font-semibold text-transparent bg-gradient-to-r from-gray-300 via-white to-[#0448c7] bg-clip-text animate-textShimmer">
               Your Files
             </p>
            </div>
         </div>
         {/* Navigator */}
         <div className='flex justify-center items-center m-3'>
         <Tabs defaultValue="Photos" className="w-full">
      <TabsList className="grid w-full grid-cols-3 rounded-[60rem]">
        <TabsTrigger className='rounded-3xl' value="Photos">Photos</TabsTrigger>
        <TabsTrigger className='rounded-3xl' value="Videos">Videos</TabsTrigger>
        <TabsTrigger className='rounded-3xl' value="Document">Document</TabsTrigger>
      </TabsList>
      {/* Tab content for the photos */}
      <TabsContent className="transition-all duration-200 ease-in-out opacity-100 mb-20" value="Photos">
        <Stack/>
        <Stack/>
        <Stack/>
      </TabsContent>
      {/* Tab Content for the videos */}
      <TabsContent className="transition-all duration-200 ease-in-out opacity-100" value="Videos">
      <div className='flex justify-center items-center pb-24' style={{flexDirection:'column'}}>
        <EmptyIndicator msg='Service Not Avaliable!!'/>
        </div>
      </TabsContent>
      {/* Tab content for the document  */}
      <TabsContent className="transition-all duration-200 ease-in-out opacity-100" value="Document">
      <div className='flex justify-center items-center pb-24' style={{flexDirection:'column'}}>
        <EmptyIndicator msg='Not Avaliable for Document yet!!'/>
        </div>
      </TabsContent>
    </Tabs>
    </div>
       </div>
       <BottomBar/>
       <style>
         {`@keyframes textShimmer {
           0% { background-position: 200% 0; }
           100% { background-position: -200% 0; }
         }
         .animate-textShimmer {
           background-size: 200% auto;
           animation: textShimmer 5s linear infinite;
         }`}
       </style>
     </>
   )
}
