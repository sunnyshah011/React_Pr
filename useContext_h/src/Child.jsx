import { useContext } from "react"
import { userContext } from "./Context"

const Child = () => {

  const value = useContext(userContext)
  
  return (
    <div>
       {value}
    </div>
  )
}

export default Child
