import React from 'react'

function EmptyIndicator({msg}) {
  return (
    <div className="flex justify-center items-center" style={{flexDirection:'column'}}>
      <img src="src\mycomponents\Empty.webp" alt="Image" className='contrast-125 grayscale w-[20rem] h-[20rem]' />
      <p className='text-xl font-medium'>{msg}</p>
    </div>
  )
}

export default EmptyIndicator;
