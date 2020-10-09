import React from 'react'

let home = 'http://localhost:3001/home'

export const Navbar = (props) => {
    // console.log(props)

    let logout = () => {
        window.localStorage.clear();
        window.location.href = home
    }
    return(
        <div>
             {/* <div className={`ui inverted ${props.color} menu`}>
                <a className='item'>
                <h2 className="ui header">
                    <i className={`${props.icon} icon`}></i>
                    <div className="content">
                        {props.text}
                    </div>
                </h2>
                </a>
            </div>  */}
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Navbar