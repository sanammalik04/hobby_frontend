import React, {Component} from 'react'
import TrashDetails from './TrashDetails'
import { Link } from 'react-router-dom';
import './App.css';
import { Card, Grid, Image, Button, Container, Segment } from 'semantic-ui-react'

class TrashCard extends Component {

    handleClicker = () =>{
        this.props.history.push({
            pathname:`/find-supplies/${this.props.trash.post_id}`,
            trash: this.props.trash
            })
    }


    render(){
        return(

    <div className="grid">
                    {this.props.trash ?
        <div class="grid-item">
                <div>
                <Card.Header>{this.props.trash.title}</Card.Header><br></br>
                <div className = 'ui buttons'>
                    <Button onClick={this.handleClicker} basic color = 'black' >
                        More Details
                    </Button>
                </div>
                </div>
                </div>
                : null }

        </div>


    

           
                    

            


               

            
       

          
        )
    }
}

export default TrashCard

// <Grid verticalAlign='middle' columns={5} centered >
//             <Grid.Row>
//                 <Grid.Column>
//                 <Card>
//                 <div>
//                     {this.props.trash ?
//                 <div>
//                 <h1>{this.props.trash.title}</h1>
//                 {this.props.trash.photos?
//                 <img onClick={this.handleClicker} src={this.props.trash.photos[0].thumbnail} onError="" alt='' height="340px" width="265px"></img>
//                 : <br></br>}
//                 {/* <h4>{this.props.trash.content}</h4><br></br> */}
//                 </div>
//                 : null }
//                 </div>
//                 </Card>
//             </Grid.Column>
//             </Grid.Row>
//             </Grid>