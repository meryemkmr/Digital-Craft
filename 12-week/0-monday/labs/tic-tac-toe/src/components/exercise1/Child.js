import React, { Component } from 'react'
import Grandchild from './Grandchild'

export class Child extends Component {
    render() {
        return (
            <div>
               Child 
               < Grandchild />
            </div>
        )
    }
}

export default Child
