import React from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomePage = () => {
  

  const Jobs=useSelector(store=>store.job.Jobs);


  return (
    <div>
    <div className='py-3 border-slate-200 border-2 flex flex-row justify-center mt-14 mb-2'>   
    <div className='w-[60%]  flex flex-row justify-end'>
        <Link to="/add-Jobs"><button className='bg-blue-600 px-10 py-2 text-white font-semibold text-md'>Add Job</button></Link>
    </div>
    </div>
    <div className='flex flex-row justify-center '>
    <div className='w-[60%] flex flex-row justify-center gap-10 flex-shrink-0 flex-wrap'>
        {
            Jobs.map((item,index)=>{
               return <Card key={index} jobs={item} />
            })
        }
    </div>
    </div>
    </div>
  )
}


export default HomePage
