import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

const TrashDetails = (props) => {

    return(
        <div>
            {props.location.trash ?
            <div>
            <h1>{props.location.trash.title}</h1>
            
            <img src={props.location.trash.photos[0].thumbnail} alt="" height="340px" width="265px"></img>
            <p>{props.location.trash.content}</p>
            </div>
            : null}

        </div>
    )
}

export default TrashDetails