import React from 'react'
import {Link} from 'react-router-dom'


const HomePage = (props) => {
    return (
       
        <div>
            <h1>Welcome!</h1>
                <button
                        type="button"
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href='/login';
                        }}
                > Login</button>
            
                <button
                        type="button"
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href='/signup';
                        }}
                > Sign Up</button>

        </div>
    )
}

export default HomePage 