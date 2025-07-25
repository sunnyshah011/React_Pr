import { useLoaderData,Link } from "react-router-dom";

const Jobs = () => {
  const loaddata = useLoaderData();

  return (
    <div className="job-center">
      {loaddata.map((job) => {
        return (
          <Link to={job.id.toString()} key={job.id} >
            <div className="job">
              <p>{job.id}</p>
              <p>{job.title}</p>
              <p>{job.salary}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Jobs;

export const jobsloader = async () => {
    const jobdata = await fetch("http://localhost:5000/jobs");
    if(!res.ok){
      throw Error("opps sorry!!")
    }
    return jobdata.json();
};
