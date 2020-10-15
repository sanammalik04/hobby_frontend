import React from 'react';

class TrashCard extends React.Component {


    render(){




        return(
            <div>

                <h3>{this.props.title}</h3>
                <div>
                    <img src={this.props.url} alt='' height="340px" width="265px"></img>
                </div>

            </div>
        )
    }
}

export default TrashCard