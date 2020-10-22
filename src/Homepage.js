// import React from 'react'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Button, Popup} from 'semantic-ui-react'





const HomePage = (props) => {

   
    return (
       

            <div className='welcome'>
            <h1>Welcome!</h1>


            <Popup
                trigger={<Button
                        color='red'
                        type="button"
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href='/login';
                        }}
                        > Login</Button>}
                content = 'Start Crafting'
                on = 'click'
                hideOnScroll  
                />

                <Popup

                trigger={<Button
                        type="button"
                        color='red'
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href='/signup';
                        }}
                > Sign Up</Button>}
                content= 'Sign Up now!'
                on = 'click'  
                hideOnScroll
                />

            </div> 
    )
}

export default HomePage 


// <Segment placeHolder>
// <Grid columns={2} relaxed='very' stackable>

// <Grid.Column verticalAlign='middle'>

//      <Button content='Login' icon='login' size='big' onClick={(e) => {e.preventDefault(); window.location.href='/login'; }}/>

// </Grid.Column>

// <Grid.Column verticalAlign='middle'>

//     <Button content="Sign Up" size='big' onClick={(e) => {e.preventDefault(); window.location.href='/signup'; }}/>

// </Grid.Column>

// </Grid>

// </Segment>