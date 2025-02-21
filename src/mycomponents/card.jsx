import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {PenLine} from 'lucide-react';


export default function Option({firstKey,firstVal,secondKey,secondVal}) {
  return(
    <>
    <div className='phone flex justify-around my-3'>
      <p className='font-semibold'>{firstKey}:</p>
      <p>{firstVal}</p>
      <PenLine/>
    </div>

    <div className='phone flex justify-around my-3'>
      <p className='font-semibold'>{secondKey}:</p>
      <p>{secondVal}</p>
      <PenLine/>
    </div>
    </>
    
  )
   
}
