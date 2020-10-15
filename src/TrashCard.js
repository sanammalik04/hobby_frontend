import React, {Component} from 'react'
import TrashDetails from './TrashDetails'
import { Card } from 'semantic-ui-react'

class TrashCard extends Component {

    handleClick = () =>{
        this.props.history.push({
            pathname:`/find-supplies/${this.props.trash.post_id}`,
            })
    }


    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.trash.photos?

                <div>

                <h1>{this.props.trash.title}</h1>
                <img onClick={this.handleClick} src={this.props.trash.photos[0].url} alt='' height="340px" width="265px"></img>
                <h4>{this.props.trash.content}</h4><br></br>
                </div>

                : null}

            </div>
       

          
        )
    }
}

export default TrashCard