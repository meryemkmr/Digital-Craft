import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'
import AddProject from './AddProject'
import ProjectItem from './ProjectItem'
// import Project from './Project'

export class ProjectManagment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects:[]
        }
        
    }
    componentWillMount(){
        this.setState({
            projects:[
                {id:uuidv4(),
                title: "JavaScript",
                category: "Front-End"},
                {id:uuidv4(),
                title: "NodeJS",
                category: "Back-End"},
                {id:uuidv4(),
                title: "ReactJS",
                category: "Front-End"},
            ]
        })
    }
    handleAddProject = (newProject) => {
        let oldProjects = this.state.projects;
        oldProjects.push(newProject);
        this.setState({
            projects:oldProjects

        })
        
    }
    handleDeleteProject = (id) => {
        let oldProjects = this.state.projects;
        let index = oldProjects.findIndex((pObj)=>{
            return pObj === id
        })
       oldProjects.splice(index,1);
       this.setState({
           project:oldProjects
       })
    }
    
    render() {
        console.log(this.state.projects)
        return (
            <div>
                <AddProject addProject={
                    (project)=>{this.handleAddProject()}}/>
                <Project projects={this.state.project} onDelete={(id)=>{this.handleDeleteProject()}}/>
            </div>
        )
    }
}

export default ProjectManagment
