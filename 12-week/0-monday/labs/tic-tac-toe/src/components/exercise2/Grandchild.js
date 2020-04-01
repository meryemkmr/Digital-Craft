import React, { Component } from 'react'

export class Grandchild extends Component {
    render() {
        return (
            <div style = {{backgroundColor: 'purple',padding : "10px"}}>
               Grandchild 
            </div>
        )
    }
}

export default Grandchild
