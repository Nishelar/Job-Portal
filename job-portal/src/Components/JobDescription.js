import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import BackButton from './BackButton'

const JobDescription = () => {
 
  const {id}=useParams()  
  const Jobs=useSelector((store)=>store.job.Jobs);
  const Job=Jobs.find((item)=>{
    return item.id===id;
  })
  const dat=new Date(Job?.date)
  let res=dat.getDate()+"/"+dat.getMonth()+"/"+dat.getFullYear();
  if(dat.getHours<12){
    res=res+" "+dat.getHours()+":"+dat.getMinutes()+"AM";
  }
  else{
    if(dat.getHours===12){
      res=res+" "+dat.getHours()+":"+dat.getMinutes()+"PM";
    }
    res=res+" "+(dat.getHours()-12)+":"+dat.getMinutes()+"PM";
  }
  return (
    <div>
      <BackButton/>
    <div className='flex justify-center '>
        <div className='w-full max-w-md my-2'>
           <div className='mb-4'>
           <label className='block  text-sm font-light text-gray-700 mb-2'>Job Title</label>
           <h1 className='text-xs font-bold w-full py-2 px-3 text-gray-950 leading-tight'>{Job.title}</h1>
           </div>
           <div className='mb-4'>
           <label className='block  text-sm font-light text-gray-700 mb-2'>Company Name</label>
           <h1 className='text-xs font-bold w-full py-2 px-3 text-gray-950 leading-tight'>{Job.Company}</h1>
           </div>
           <div className='mb-4'>
           <label className='block  text-sm font-light text-gray-700 mb-2'>Description</label>
           <h1 className='text-xs font-bold w-full py-2 px-3 text-gray-600 leading-tight'>{Job.description}</h1>
           </div>
           <div className='flex flex-wrap -mx-3 mb-6"'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
        <label className='block  text-sm font-normal text-gray-700 mb-2'>Salary</label>
        <h1 className='text-xs font-bold w-full py-2 px-3 text-gray-950 leading-tight'>{Job.salary}</h1>
        </div> 
        <div className='w-full md:w-1/2 px-3'>
        <label className='block  text-sm font-normal text-gray-700 mb-2'>Date</label>
        <h1 className='text-xs font-bold w-full py-2 px-3 text-gray-950 leading-tight'>{res}</h1>
        </div>
        </div> 
           
        </div>
    </div>
    </div>
  )
}

export default JobDescription
