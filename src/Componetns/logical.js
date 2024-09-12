export const inputButtonLogic = (addState,id,string,stringState,array,idState)=>{
 addState([...array,{key:id++, name:string,completed : false, unCompleted : true}])
 stringState('')
 idState(id + 1)
}

export const deletedClick =  (checkTask,task,item) => {checkTask(task.filter((items)=> items.key !== item.key))}
            