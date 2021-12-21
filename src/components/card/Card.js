import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import EditTask from '../modal/EditTask';


const Card = ({ item, index, deleteTask, updateTaskList }) => {

    const [modal, setModal] = useState(false)

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal)
    }

    const handleDelete = (index) => {
        deleteTask(index)
    }

    const updateTask = (obj) => {
        updateTaskList(obj,index)
    }
    return (
        
        <>
        <div className="card">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">{item.Name}</h5>
                <p className="card-text">{item.Description}</p>
                <div className='row'>
                    <div className='col'>
                        <FontAwesomeIcon 
                         icon={faTrash} 
                         style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} 
                         className='icon'
                         onClick={handleDelete} />
                    </div>
                    <div className='col'></div>
                    <div className='col'>
                        <FontAwesomeIcon 
                         icon={faEdit} 
                         style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }}
                         onClick={toggle} />
                    </div>
                </div>
            </div>
        </div>
        <EditTask modal={modal} toggle={toggle} updateTask={updateTask} item={item}/>
        </>
    )
}

export default Card
