import React,{useState} from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

const CreateTask = ({modal,toggle, save}) => {

    const [task, setTask] = useState('')
    const [discription, setDiscription] = useState('')

    const handler = (e) => {
        const {name, value} = e.target

        if(name === 'createTask'){
            setTask(value)
        }else{
            setDiscription(value)
        }
    }

    const handleSave = () => {
        let taskObj = {Name: task, Description:discription}
        // taskObj['Name'] = task
        // taskObj['Description'] = discription
        save(taskObj)
    }
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    Create Taskj
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
                    <Button className='btn btn-primary' onClick={handleSave}>Create</Button>
                    <Button className='btn btn-danger' onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CreateTask
