import React from 'react'
import { useRouteError } from 'react-router-dom'

const Errorpage = () => {

    const error = useRouteError()

  return (
    <div>
      error ocurred could not find the job!!
      {error.message}
    </div>
  )
}

export default Errorpage
