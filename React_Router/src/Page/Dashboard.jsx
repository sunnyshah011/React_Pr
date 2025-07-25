import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h1>dashboard page</h1>
      <button onClick={()=>navigate('info')} >info page</button>
      <button onClick={()=>navigate('form')} >form page</button>
    </div>
  )
}

export default Dashboard