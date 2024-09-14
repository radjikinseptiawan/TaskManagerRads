/* eslint-disable react/jsx-key */
import { useCallback, useState } from "react"
import InpuElement from "../Input"
import TaskBox from "../TaskBox"
import { deletedClick, inputButtonLogic,EditTaskSelect,completedStatus } from "../logical"
import TaskChild from "../TaskChild"
import EditingMode from "../EditMode"

export default function  TaskField() {
  const [task,setTask] = useState([])
  const [string,setString] = useState('')
  const [id,setId] = useState(0)  
  const [selectEdit, setSelectEdit] = useState([])
  const [editMode, setEditMode] = useState(false)
  // const [status,setStatus] = useState([])

  const inputButtonLogical = useCallback(()=>{
    inputButtonLogic(setTask,id,string,setString,task,setId)
  },[setTask,id,string,setString,task,setId])

  const editClickLogic = useCallback(()=>{
    setEditMode(false)
    EditTaskSelect(selectEdit,setTask,setSelectEdit,setString,task,string)
  },[selectEdit,setTask,setSelectEdit,setString,task,string])

    return (
    <>
        <InpuElement 
        onChange={e => setString(e.target.value)} 
        value={string}
        onClick={inputButtonLogical}
        />
        <TaskBox>
        {task.map((item)=>{
            return (<TaskChild 
             thisKey={item.idNo} 
             val={item.name}
             onClickDeleted={()=>deletedClick(setTask,task,item,setEditMode)}
             onClickEdited={()=>{
              setSelectEdit(item.idNo)
              setString(item.name)
              if(!item.completed){
              setEditMode(true)}
             }}
             onClickCompleted={()=>completedStatus(item.idNo,setTask,task)}
             childrenCompleteButton={item.completed ? "Uncompleted" : "Completed"}
             textColor={item.completed ? "text-slate-600" : "text-lime-600"}
             bgColor={item.completed ? "bg-slate-500" : "bg-lime-500"}
             >
             </TaskChild> 
            )
       })}
       </TaskBox>
       { editMode ? (
        <>
        <div className="w-96 bg-amber-900 p-2 my-2 mx-auto"> 
<EditingMode 
          value={string} 
          setStrings={e => setString(e.target.value)} 
          clicked={editClickLogic}
          cancel={()=>setEditMode(false)}
          />
        </div>
     </>
      ) : null}
    </>
  )
}
