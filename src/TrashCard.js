import React, {Component} from 'react'
import TrashDetails from './TrashDetails'
import { Link } from 'react-router-dom';
import { Card, Grid, } from 'semantic-ui-react'

class TrashCard extends Component {

    handleClicker = () =>{
        this.props.history.push({
            pathname:`/find-supplies/${this.props.trash.post_id}`,
            trash: this.props.trash
            })
    }


    render(){
        return(
            <div>

            
        
        <Grid verticalAlign='middle' columns={5} centered >
            <Grid.Row>
                <Grid.Column>
                <Card>
                <div>
                    {this.props.trash ?
                <div>
                <h1>{this.props.trash.title}</h1>
                {this.props.trash.photos?
                <img onClick={this.handleClicker} src={this.props.trash.photos[0].thumbnail} onError="" alt='' height="340px" width="265px"></img>
                : <br></br>}
                {/* <h4>{this.props.trash.content}</h4><br></br> */}
                </div>
                : null }
                </div>
                </Card>
            </Grid.Column>
            </Grid.Row>
            </Grid>

            {/* <Menu.Menu>
                <Menu.Item className= 'search'>
                  <input onChange={(e) => this.props.handleSearch(e.target.value)} icon='search' placeholder='Search Supplies'/> 
                </Menu.Item>
            </Menu.Menu>  */}
                    

            


               

            </div>
       

          
        )
    }
}

export default TrashCard