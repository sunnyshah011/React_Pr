import { useLoaderData } from 'react-router-dom'

const Jobdetails = () => {

    const data = useLoaderData()
    console.log(data);
    

  return (
    <div>
      title : { data.title }
    </div>
  )
}

export default Jobdetails

export const jobdetails = async ({params}) =>{
    const { id } = params
    const res = await fetch("http://localhost:5000/jobs/" + id)
       if(!res.ok){
      throw Error("opps sorry!!")
    }
    return res.json()
}