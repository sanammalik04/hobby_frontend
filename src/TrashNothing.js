import React from 'react'
import TrashCard from './TrashCard'

const TrashNothing = (props) => {
console.log(props)
    return(
        <div>
            {props.trash?
            <div>

            {props.trash.map(trash => 
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