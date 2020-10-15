import React from 'react'
import TrashCard from './TrashCard'

const TrashNothing = (props) => {

    return(
        <div>
            {props.Trash?
            <div>

            {props.Trash.map(item => 
            <TrashCard 
            key={item.id}
            item={item}
            trash={props.trash}
            history={props.history}
            />)}
            </div>

            : null}
        
        </div>
    )
}

export default TrashNothing