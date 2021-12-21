import React,{useState,useEffect} from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

const EditTask = ({modal,toggle, updateTask, item}) => {

    const [task, setTask] = useState('')
    const [discription, setDiscription] = useState('')


    useEffect(()=>{
      setTask(item.Name)
      setDiscription(item.Description)
    },[])

    const handler = (e) => {
        const {name, value} = e.target

        if(name === 'createTask'){
            setTask(value)
        }else{
            setDiscription(value)
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        let taskObj = {Name: task, Description:discription}
        updateTask(taskObj)
    }
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    Update Task
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group'>
                            <label>Task Name</label>
                            <input 
                              className='form-control'
                              type="text"
                              name="createTask"
                              value={task}
                              onChange={handler}/>
                        </div>
                        <div className='form-group'>
                            <label>Task Description</label>
                            <textarea 
                              className='form-control'
                              rows="5"
                              value={discription}
                              onChange={handler}
                              name="createDiscription"></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button className='btn btn-primary' onClick={handleUpdate}>Update</Button>
                    <Button className='btn btn-danger' onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditTask
