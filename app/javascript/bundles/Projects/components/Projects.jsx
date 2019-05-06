import React, { Component } from 'react';
import axiosClient from "../../axiosClient";

import Project from './Project'
import update from "immutability-helper";
import New from "./New";

export default class Projects extends Component{
    constructor(props){
        super(props)
        this.state = {
            projects: []
        }
        this.addNew = this.addNew.bind(this);
    }
    componentDidMount() {
        axiosClient.get('projects')
            .then(response => {
                this.setState({
                    projects: response.data
                })
            })
            .catch(error => console.log(error))

    }
    addNew(name, color_id) {
        axiosClient.post( `projects`, { project: {name: name, color_id: color_id } })
            .then(response => {
                const projects = update(this.state.projects, {
                    $splice: [[0, 0, response.data]]
                });
                this.setState({projects})
            })
            .catch(error => {
                console.log(error)
            })
    }
    delete = (id) => {
        axiosClient.delete(`projects/${id}`)
            .then(response => {
                const projectIndex = this.state.projects.findIndex(x => x.id === id);
                const projects = update(this.state.projects, { $splice: [[projectIndex, 1]]});
                this.setState({projects: projects})
            })
            .catch(error => console.log(error))
    }
    render() {
        var projects = this.state.projects.map(project =>{
            return(
                <Project key={project.id} project={project} onDelete={this.delete} />
            )
        })
        return(
            <React.Fragment>
                <New onNew={this.addNew}/>
                {
                    projects
                }
            </React.Fragment>

        )
    }
}