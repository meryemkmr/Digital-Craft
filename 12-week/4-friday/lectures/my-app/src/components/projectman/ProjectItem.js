import React, { Component } from 'react'

export class ProjectItem extends Component {
    render() {
        return (
            <div>
                <li>
                    {this.props.project.title}
                    {this.props.project.category}
                    <button onClick ={()=>{this.props.onDelete}}>X</button>
                </li>
                
            </div>
        )
    }
}

export default ProjectItem
