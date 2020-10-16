import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Popup } from 'semantic-ui-react'


const HomePage = (props) => {
    return (
       
        <div className= 'welcome'>
            <h1>Welcome!</h1>
            <Popup
                trigger={<Button
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