import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        Dashboard Page
        <NavLink to='/subpage' > subpage </NavLink>
        <Outlet />
    </div>
  )
}

export default Dashboard