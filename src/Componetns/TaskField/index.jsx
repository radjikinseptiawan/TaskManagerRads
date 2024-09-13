/* eslint-disable react/jsx-key */
import { useState } from "react"
import InpuElement from "../Input"
import TaskBox from "../TaskBox"
import { deletedClick, inputButtonLogic,EditTaskSelect } from "../logical"
import TaskChild from "../TaskChild"
import EditingMode from "../EditMode"

export default function  TaskField() {
  const [task,setTask] = useState([])
  const [string,setString] = useState('')
  const [id,setId] = useState(0)  
  const [selectEdit, setSelectEdit] = useState([])
  const [editMode, setEditMode] = useState(false)


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
             thisKey={item.idNo} 
             val={item.name}
             onClickDeleted={()=>deletedClick(setTask,task,item)}
             onClickEdited={()=>{
              setSelectEdit(item.idNo)
              setString(item.name)
              setEditMode(true)
             }}
             >
             </TaskChild>
        })}
       </TaskBox>
       { editMode ? (
        <>
        <div className="w-96 bg-amber-900 p-2 my-2 mx-auto"> 
<EditingMode 
          value={string} 
          setStrings={e => setString(e.target.value)} 
          clicked={()=>{
            setEditMode(false)
            EditTaskSelect(selectEdit,setTask,setSelectEdit,setString,task,string)
          }}/>
        </div>
     </>
      ) : null}
    </>
  )
}
