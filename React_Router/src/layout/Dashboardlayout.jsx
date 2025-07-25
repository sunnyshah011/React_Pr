import React from 'react'
import Dashboard from '../Page/Dashboard'
import { Outlet } from 'react-router-dom'

const Dashboardlayout = () => {
  return (
    <div>
      <Dashboard />
      <Outlet />
    </div>
  )
}

export default Dashboardlayout
