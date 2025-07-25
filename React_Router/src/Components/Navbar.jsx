import React from 'react'
import { NavLink, replace, useNavigate } from 'react-router-dom'


const Navbar = () => {

  const Navigate = useNavigate()

  function redirect(){
    Navigate('/dashboard'),
    replace(true)
  }
  return (
    <div>
      <NavLink to='/' > Home </NavLink>
      <NavLink to='/about' > ABOUT </NavLink>
      <NavLink to='/dashboard' > DASHBOARD </NavLink>

      <button onClick={redirect} >
        visit dashboard
      </button>
    </div>
  )
}

export default Navbar
