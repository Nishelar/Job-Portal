import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addJob, editJob } from '../Utils/jobslice'
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router'
import BackButton from './BackButton';
const initialState={
    title:"",
    Company:"",
    salary:"",
    date:"",
    description:""
}

const AddJob = () => {
  const {id}=useParams()
  const Jobs=useSelector(store=>store.job.Jobs);
  const Job=Jobs.find((item)=>{
    return item.id===id;
  })
  console.log(Job)
  if(Job){
    initialState.title=Job.title;
    initialState.salary=Job.salary;
    initialState.Company=Job.Company;
    initialState.description=Job.description;
    initialState.date=Job.date;
  }
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {values,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialState,
    onSubmit:(values)=>{
       if(Job){
       console.log(Job) 
       dispatch(editJob({Job,values}))
       navigate("/");
       }
       values.id=uuidv4();
       dispatch(addJob(values));
       navigate("/");
    }
  })
  return (
    
    <div >
    <BackButton/>


    <div className='flex justify-center '>
    <div className='w-full max-w-md my-2'>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2'>
      <h1 className='text-center '>{Job ?"Edit Job":"Add Job"}</h1>
        <div className='mb-4'>
        <label className='block  text-sm font-normal text-gray-700 mb-2'>Job Title</label>
        <input  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type="text" 
        name="title" 
        value={values.title} 
        onChange={handleChange} 
        onBlur={handleBlur}/>
        </div>
        <div className='mb-4'>
        <label className='block  text-sm font-normal text-gray-700 mb-2'>Company Name</label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" 
        name="Company"
        value={values.Company} 
        onChange={handleChange} 
        onBlur={handleBlur}/>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6"'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
        <label className='block  text-sm font-normal text-gray-700 mb-2'>Salary</label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" 
        name="salary"
        value={values.salary} 
        onChange={handleChange} 
        onBlur={handleBlur}/>
        </div> 
        <div className='w-full md:w-1/2 px-3'>
        <label className='block  text-sm font-normal text-gray-700 mb-2'>Date</label>
        <input className='text-center shadow appearance-none border rounded w-full py-2 px-3 pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type="datetime-local" 
        name="date"
        value={values.date} 
        onChange={handleChange} 
        onBlur={handleBlur}/>
        </div> 
        </div>
        <div className='mb-4'>
        <label className='block  text-sm font-normal text-gray-700 mb-2'>Description</label>
        <textarea 
        rows="3"
        className="resize-none  text-center shadow appearance-none border rounded w-full py-2 px-3 pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="description" 
        value={values.description} 
        onChange={handleChange} 
        onBlur={handleBlur}>
        </textarea >
        </div>
        <div className='flex justify-center'>
        <input className="bg-blue-600 px-6 py-1 text-white" type="submit" value="Submit"/>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default AddJob
