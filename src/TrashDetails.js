import React from 'react'

const TrashDetails = (props) => {

    return(
        <div>
            {props.trash ?
            <div>
            <h1>{props.trash.title}</h1>
            </div>
            
            : null}

        </div>
    )
}

export default TrashDetails