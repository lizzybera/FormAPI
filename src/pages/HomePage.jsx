// import React from 'react'

import { useQuery } from "@tanstack/react-query"
import { viewToDos } from "../api/toDoApi"
// import { useState } from "react"

const HomePage = () => {
  // const [todos, setTodos] = useState("")

  const { data: todo } = useQuery({
    queryKey: ["viewTodo"],
    queryFn: viewToDos,
    refetchInterval: 1000
  })

  console.log(todo?.map((el) => el.task), "all todos");


  return (
    <div className="w-full">
        <input type="text" className=""
        
        />

      <div>
        {
          todo?.map((el) => (
            <div key={el?._id}>
              {el.task}
            </div>
          ))
        }
      </div>

      <div>
      </div>
    </div>
  )
}

export default HomePage