// import React from 'react'

import { Link } from "react-router-dom"

const Sider = () => {
  return (
    <div className="w-[300px] bg-[blue]">
        <Link to="/">Landing Page</Link>
        <Link to="/home">Home Page</Link>
    </div>
  )
}

export default Sider