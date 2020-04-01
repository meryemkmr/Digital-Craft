import React, { Component } from 'react'
import Grandchild from '../exercise2/Grandchild'

export class Child extends Component {
    render() {
        return (
            <div style = {{backgroundColor: 'green',padding: "10px"}}>
                Child
                < Grandchild />
            </div>
        )
    }
}

export default Child
