import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Jobs = () => {

    const loaddata = useLoaderData();
    
  return (
    <div className='job-center'>
    {loaddata.map((job)=>{
        return(
            <div className='job'>
                <p>{job.id}</p>
                <p>{job.title}</p>
                <p>{job.salary}</p>
            </div>
        )
    })}
    </div>
  )
}

export default Jobs

export const jobsloader = async () => {
  const jobdata = await fetch("http://localhost:5000/jobs");
  return jobdata.json();
};
