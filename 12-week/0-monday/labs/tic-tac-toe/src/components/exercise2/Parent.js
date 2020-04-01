import React, { Component } from 'react'
import Child from '../exercise2/Child'

export class Parent extends Component {
    render() {
        return (
            <div style = {{backgroundColor: 'yellow',padding : "10px"}}>
                Parent
                < Child />
            </div>
        )
    }
}

export default Parent
