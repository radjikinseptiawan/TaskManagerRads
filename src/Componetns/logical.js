export const inputButtonLogic = (addState,id,string,stringState,array,idState)=>{
 addState([...array,{idNo:id++, name:string,completed : false, unCompleted : true}])
 stringState('')
 idState(id + 1)
}


export const deletedClick =  (checkTask,task,item) => {checkTask(task.filter((items)=> items.idNo !== item.idNo))}
            
export const EditTaskSelect = (editId,stateTask,stateSelectEdit,stateString,item,value)=>{
    const updatedTasks =item.map((item)=>item.idNo === editId ? {...item,name:value} : item)
    stateTask(updatedTasks)
    stateString('')
    stateSelectEdit(null)
    }