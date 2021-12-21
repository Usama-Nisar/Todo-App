import React,{useState} from 'react'
import Card from './card/Card'
import CreateTask from './modal/CreateTask'


const TodoList = () => {
    const [modal, setModal] = useState(false)
    const [taskList, setTaskList] = useState([])

    const toggle = () => {
        setModal(!modal)
    }

    const saveTask = (obj) =>{
        let tempList = taskList
        tempList.push(obj)
        setTaskList(tempList)
        setModal(false)
    }
   
    console.log(taskList)
    return (
        <>
         <div className=" header text-center">
            <h3 className='pt-5' >Todo App</h3>
            <button className="btn btn-primary mt-2" onClick={toggle}>Add Todo</button>
         </div>
         <div className='text-container'>
             {taskList.map((item)=>{
                 return(
                     <Card item={item} index={index}/>
                 )
             })}
         </div>
         <CreateTask modal={modal} toggle={toggle} save={saveTask}/>
       </>
    )
}

export default TodoList
