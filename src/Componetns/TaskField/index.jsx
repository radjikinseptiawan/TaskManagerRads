import { useState } from "react"
import InpuElement from "../Input"
import TaskBox from "../TaskBox"
import { deletedClick, inputButtonLogic } from "../logical"
import TaskChild from "../TaskChild"

export default function  TaskField() {
  const [task,setTask] = useState([])
  const [string,setString] = useState('')
  const [id,setId] = useState(0)  


    return (
    <>
        <InpuElement 
        onChange={e => setString(e.target.value)} 
        value={string}
        onClick={()=>inputButtonLogic(setTask,id,string,setString,task,setId)}
        />
        <TaskBox>
        {task.map((item)=>{
            return <TaskChild 
             key={item.key} 
             val={item.name}
             onClickDeleted={()=>deletedClick(setTask,task,item)}
             >
             </TaskChild>
        })}
       </TaskBox>
    </>
  )
}
