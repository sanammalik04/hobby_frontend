import React, {Component} from 'react'
import TrashDetails from './TrashDetails'

class TrashCard extends Component {


    render(){
        console.log(this.props)
        return(
            <div>

                <h3>{this.props.trash.title}</h3>
                <div>
                    {this.props.trash.photos?
                    <img src={this.props.trash.photos[0].url} alt='' height="340px" width="265px"></img> 
                    :null}
                </div>

            </div>
        )
    }
}

export default TrashCard