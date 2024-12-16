// import React from 'react'

import { useState } from "react"
import { FaRegMoon } from "react-icons/fa6"
import { MdOutlineWbSunny } from "react-icons/md"

const Header = () => {
  const [theme, setTheme] = useState(false)
  return (
    <div className={` ${theme ? "bg-white text-black" : "bg-black text-white"} w-full h-[70px] flex items-center justify-center `}>
      <div className=" w-[80%]">

        {
          !theme ?
            <MdOutlineWbSunny className="cursor-pointer" onClick={() => {
              setTheme(!theme)
            }} /> 
            
            :

            <FaRegMoon className="cursor-pointer" onClick={() => {
              setTheme(!theme)
            }} />
        }
      </div>
    </div>
  )
}

export default Header