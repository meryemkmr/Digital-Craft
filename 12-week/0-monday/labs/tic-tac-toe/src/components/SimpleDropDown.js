import React, { Component } from 'react'
class SimpleDropDown extends Component {
    constructor(props) {
        super(props)
    }
    optionList = () => {
        return this.props.days.map((day, index) => {
            return <option key={index}>{day}</option>
        })
    }
    render() {
        console.log(this.props.days);
        // let optionList = this.props.days.map((day, index) => {
        //     return <option key={index}>{day}</option>
        // })
        return (
            <>
                <select>
                    {/* {this.props.days.map((day, index) => {
                        return <option key={index}>{day}</option>
                    }
                    )} */}
                    {this.optionList()}
                </select>
            </>
        )
    }
}
export default SimpleDropDown

