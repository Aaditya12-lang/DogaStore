import React from 'react';
import {ArrowLeft,Leaf,Users,CircleHelp, CircleCheckBig, CircleX, Filter} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {useNavigate} from 'react-router-dom';

import {AlertDiv} from '@/mycomponents/name_div.jsx';





export default function History() {
  const navigate = useNavigate()

  // data
const data = [
  {
    "file_name": "file1.pdf",
    "upload_status": "success",
    "upload_time": "02:45 PM"
  },
  {
    "file_name": "file2.jpg",
    "upload_status": "failure",
    "upload_time": "03:10 PM"
  },
  {
    "file_name": "file3.mp4",
    "upload_status": "success",
    "upload_time": "04:05 PM"
  },
  {
    "file_name": "file4.txt",
    "upload_status": "success",
    "upload_time": "11:30 AM"
  },
  {
    "file_name": "file5.png",
    "upload_status": "success",
    "upload_time": "01:15 PM"
  },
  {
    "file_name": "file6.zip",
    "upload_status": "failure",
    "upload_time": "09:40 AM"
  },
  {
    "file_name": "file7.docx",
    "upload_status": "success",
    "upload_time": "07:55 AM"
  },
  {
    "file_name": "file8.mp3",
    "upload_status": "failure",
    "upload_time": "06:20 PM"
  },
  {
    "file_name": "file9.csv",
    "upload_status": "success",
    "upload_time": "12:00 PM"
  },
  {
    "file_name": "file10.jpg",
    "upload_status": "success",
    "upload_time": "05:30 PM"
  }
]



  return(
    <>
      <div className="">
        {/*First div*/}
        <div className="firstDiv flex justify-between items-center  bg-white my-3">
          <ArrowLeft className='cursor-pointer' size={28} onClick={()=>{navigate('/')}}/>
          <p className='text-2xl font-bold'>Upload History</p>
          <CircleHelp className='text-white' size={28}/>
          
        </div>
        {/* filter */}
        {/* <div>
          <Filter/> Filter
        </div> */}


        {/* history arena */}
        {
          data.map((elems,index)=>{
            return(
            <div className='my-4 mx-1' key={index}>
            <Card className='p-3'>
                      <div className='flex justify-between'>
                      <li  className='font-semibold'>{elems.file_name}</li>
                      {/* time and tick div */}
                      <div className='flex-column justify-center items-center'>
                        {
                          elems.upload_status === "success" ?<CircleCheckBig size={24} color='green'/>:<CircleX size={24} color='red'/>
                        }
                      
                      <p className='text-sm mt-2'>{elems.upload_time}</p>
                      </div>
                      </div>
            </Card>
      </div>
          )})
        }

      </div>
    </>
  )
   
}

