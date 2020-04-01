import React, { Component } from 'react'

export class SimpleList extends Component {
    render() {
        let days = ['Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday']
            // let formattedDay = days.map((day,index)=>{
            //     return <div key={index}>{day}<br/></div>
            // })

        let listItems = days.map((day,index)=>{
        return <li key={index} >{day}</li>
        })
        return (
            <ul>
               {days.map((day,index)=>{
                   return <li key={index} >{day}</li>
               }
               )}
            </ul>
        )
    }
}

export default SimpleList
