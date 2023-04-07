import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteJob} from '../Utils/jobslice';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Card = ({jobs,onAction}) => {
  const {title,Company,salary,date,description,}=jobs
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const dat=new Date(date)
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
  const handleEdit=(job)=>{
    console.log(res)
    navigate("/add-Jobs/"+job.id);
  }

  const handleDelete=(job)=>{
    dispatch(deleteJob(job))
  }

  const handleClick=(job)=>{
    navigate("/Jobs/"+job.id);
  }
  const [options,setOptions]=useState(false);

  return (
    <div  className='h-[224px] w-[435px] shadow-lg bg-white shadow-slate-400 border-[1.5px] border-slate-200 my-10 flex-shrink-0 px-8 py-4 cursor-pointer relative' >
        <div className='flex flex-row align-middle justify-between'>
          <h1  onClick={()=>handleClick(jobs)} className='text-lg '>{title}</h1>
          <img onClick={()=>setOptions((prev)=>!prev)} className='h-6 w-7 cursor-pointer'  src='https://cdn-icons-png.flaticon.com/128/7794/7794505.png' alt="img"/>
        </div>
        {options ?
        <div className="flex flex-col border-slate-200 border-2 px-3 w-25 absolute left-72 text-sm  bg-white">
        <div className='flex flex-row align-middle py-2' onClick={()=>handleEdit(jobs)}  >
          <img className="h-6 w-7 mx-1 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" alt="delete"/>
          <p>Edit</p>
        </div>
        <div className="flex flex-row align-middle py-1" onClick={()=>handleDelete(jobs)}>
          <img  className="h-6 w-7 mx-1 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="delete"/>
          <p>Delete</p>
        </div>
        </div>:null}
        <div >
        <div  onClick={()=>handleClick(jobs)} className='flex flex-row align-middle pt-2'>
          <img className="h-6 w-6 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_G6G0nH7IT1yV8sX1CQwq_GL3anoQ1sXO2jYhRFyCEA&s" alt="img"></img>
          <p className='px-2'>{Company}</p>
        </div>
        <div className="flex flex-row align-middle justify-between py-3">
        <p className='text-sm'> Salary:<span className='text-base px-2'>{salary}</span></p>
        <p className='text-sm'> Joining Date:<span>{res}</span></p>
        </div> 
        <p>{description}</p>
        </div>
    </div>
  )
}

export default Card

