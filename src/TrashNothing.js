import React from 'react'
import TrashCard from './TrashCard'

const TrashNothing = (props) => {

    return(
        <div>
            {props.TrashNothing?
            <div>

            {props.TrashNothing.map(item => 
            <TrashCard 
            key={item.id}
            item={item}
            trash={props.trash}
            />)}
            </div>

            : null}
        
        </div>
    )
}

export default TrashNothing