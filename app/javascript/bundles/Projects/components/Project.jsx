import React, { Component } from 'react'
import axiosClient from "../../axiosClient";

export default class Project extends Component {
    constructor(props){
        super(props)
        this.state = {
            colorName: ''
        }
    }
    componentDidMount(){
        axiosClient.get(`colors/${this.props.project.color_id}`)
            .then(response => {
                this.setState({
                    colorName: response.data.name
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        var tagLabel = this.state.colorName;
        return(
            <a className={`ui label ${tagLabel} item`} key={this.props.project.id}>
                {this.props.project.name}
                <i className="delete icon" onClick={() => { this.props.onDelete(this.props.project.id)}}></i>

                <i className="edit outline icon" onClick={() => { this.props.onUpdate(this.props.project.id)}}></i>
            </a>
        )
    }
}