import React from 'react'
import TrashCard from './TrashCard'

const TrashNothing = (props) => {
console.log(props)
    return(
        <div>
            {props.showTrash?
            <div>

            {props.showTrash.map(trash => 
            <TrashCard 
            key={trash.id}
            trash={trash}
            history={props.history}
            />)}
            </div>

             : null} 
        
        </div>
    )
}

export default TrashNothing