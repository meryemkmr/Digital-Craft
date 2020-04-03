import React, { Component } from 'react'
import ProjectItem from './ProjectItem'

export class Project extends Component {
    
    render() {
        let ProjectItem = this.props.projects.map((projectObj)=>{
            return <ProjectItem project ={projectObj}/>
        })
        return (
            <ul>
               {ProjectItem}
            </ul>
        )
    }
}

export default Project
