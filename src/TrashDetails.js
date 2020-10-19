import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

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