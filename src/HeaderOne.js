import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const HeaderOne = (props) => {
    return(
        <div className="header3">
            <Header as='h1' icon>
                <Icon name='paint brush' color= 'red' />
                Craftsy
                <Header.Subheader className='subheader'>
                    One Man's Trash is Another Man's Treasure.
                </Header.Subheader>
        </Header>

        </div>
    )
}

export default HeaderOne