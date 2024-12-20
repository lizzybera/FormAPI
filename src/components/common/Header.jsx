// import React from 'react'

// import { useState } from "react"
import { FaRegMoon } from "react-icons/fa6"
import { MdOutlineWbSunny } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { logOut, themed } from "../../global/GlobalState"

const Header = () => {
  // const [theme, setTheme] = useState(false)

const changeTheme = useSelector((state) => state.theme)
const user = useSelector((state) => state.AuthUserInitialState)
const dispatch = useDispatch()

console.log(changeTheme, "This is the theme");

  
  return (
    <div className={` ${
      // theme
      changeTheme
     ? "bg-white text-black" : "bg-black text-white"} w-full h-[70px] flex items-center justify-center `}>
      <div className=" w-[80%] flex justify-between items-center">

        <div>{
          // !theme ?
          !changeTheme ?
            <MdOutlineWbSunny className="cursor-pointer" onClick={() => {
              // setTheme(!theme)
              dispatch(themed())
            }} /> 
            
            :

            <FaRegMoon className="cursor-pointer" onClick={() => {
              // setTheme(!theme)
              dispatch(themed())
            }} />
        }</div>

        <div className={`px-2 py-2 ${
      // theme
      !changeTheme
     ? "bg-white text-black" : "bg-black text-white"} rounded-lg cursor-pointer hover:font-semibold`}
     onClick={()=> {
      dispatch(logOut())
     }}
     >
      {
        user === null ? ("Sign In") : ("LogOut")
      }
     </div>
      </div>
    </div>
  )
}

export default Header