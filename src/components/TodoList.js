import React,{useState,useEffect} from 'react'
import Card from './card/Card'
import CreateTask from './modal/CreateTask'


const TodoList = () => {
    const [modal, setModal] = useState(false)
    const [taskList, setTaskList] = useState([])


    useEffect(() => {

        let arr = localStorage.getItem('taskListKey')
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
        console.log('err')
        } ,[])


    const toggle = () => {
        setModal(!modal)
    }

    const saveTask = (obj) =>{
        let tempList = taskList
        tempList.push(obj)
        localStorage.setItem('taskListKey',JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    const deleteTask = (index) => {
          let templist = taskList
          templist.splice(index,1)
          localStorage.setItem('taskListKey',JSON.stringify(templist))
          setTaskList(templist)
          window.location.reload()
    }

    const updateTaskList = (obj,index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem('taskListKey',JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
   
    console.log(taskList)
    return (
        <>
         <div className=" header text-center">
            <h3 className='pt-5' >Todo App</h3>
            <button className="btn btn-success mt-2" onClick={toggle}>Add Todo</button>
         </div>
         <div className='container mt-5 d-flex flex-wrap'>
             {taskList.map((item, index)=>{
                 return(
                     <Card key={index} item={item} index={index} deleteTask={deleteTask}  updateTaskList={ updateTaskList}/>
                 )
             })}
         </div>
         <CreateTask modal={modal} toggle={toggle} save={saveTask}/>
       </>
    )
}

export default TodoList
