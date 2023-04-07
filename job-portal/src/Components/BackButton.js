import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
    <div className='border-2 border-slate-200 my-10'>
    <div className='w-[80%] mx-auto py-6'>
         <Link to="/"><img className="h-6 w-7" src='https://icons.veryicon.com/png/o/miscellaneous/eva-icon-fill/arrow-back-8.png' alt="back"/></Link>
    </div>
    </div>
  )
}

export default BackButton
