import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const HeaderOne = (props) => {
    return(
        <div className="header">
            <Header as='h1' icon>
                <Icon name='paint brush' />
                Craftsy
                <Header.Subheader>
                    One Man's Trash is Another Man's Treasure.
                </Header.Subheader>
        </Header>

        </div>
    )
}

export default HeaderOne