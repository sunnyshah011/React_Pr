import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Jobs = () => {

    const loaddata = useLoaderData();
    
  return (
    <div>
    {loaddata.map((job)=>{
        return(
            <div>
                <h4>{job.id}</h4>
                {job.title}
                {job.salary}
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
