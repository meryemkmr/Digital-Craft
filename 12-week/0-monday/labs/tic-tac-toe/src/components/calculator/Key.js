import React, { Component } from 'react'
import './styles.css'

class Key extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

            // if(this.props.bgc){
            //     "keypad specialKey"
            // }
            // else{
            //     "keypad"
            // }

            !this.props.zero ?
                <div className={this.props.bgc ? "keypad specialKey" : "keypad"}>
                    {this.props.num}
                </div>
                :
                <div className="zero keypad">
                    {this.props.num}
                </div>
        )
    }
}

export default Key



