// import React from 'react'

import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRouter = ({children}) => {
    const user = useSelector((state) => state.AuthUserInitialState)

    // console.log(user, "user's Data");
    
  return (
    <div>
        {
            user ? (
                <div>{children}</div>
            ) : (
                <Navigate to="/sign-in" />
            )
        }
    </div>
  )
}

export default PrivateRouter