import React from 'react'

const Card = ({item,index}) => {

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]
    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{ "background-color": colors[index % 5].primaryColor }}></div>
            <div className="task-holder">
                <span className="card-header" style={{ "background-color": colors[index % 5].secondaryColor, "border-radius": "10px" }}>{item.Name}</span>
                <p className="mt-3">{item.Description}</p>

                <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
                    <i className="far fa-edit mr-3" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={() => setModal(true)}></i>
                    <i className="fas fa-trash-alt" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={handleDelete}></i>
                </div>
            </div>
        </div>
    )
}

export default Card
