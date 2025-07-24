import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {

    const {id} = useParams()

  return (
    <div>
      About Page
      <p>id: {id}</p>
    </div>
  )
}

export default About
