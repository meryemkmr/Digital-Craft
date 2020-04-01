import React, { Component } from 'react'
import Child from './Child'
export class Parent extends Component {
    render() {
        return (
            <div>
               Parent Component 
               <Child />
            </div>
        )
    }
}

export default Parent
