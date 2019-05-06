import React, { Component } from 'react'
import axiosClient from '../../axiosClient'
import ColorSelect from "../../Colors/components/ColorSelect";

export default class Update extends Component{
    constructor(props){
        super(props)
        this.state = {
            color_id: this.props.project.color_id,
            name: this.props.project.name
        }
        this.handleInput = this.handleInput.bind(this)
    }
    onSubmit = () => {
        const project = {
            name: this.state.name,
            color_id: this.state.color_id
        };
        axiosClient.put(
            (`projects/${this.props.project.id}`),
            {
                project: project
            }
        )
            .then(response => {
                this.props.updateProject(response.data)
            })
            .catch(error => console.log(error))
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    onColored = (e) => {
        this.setState({color_id: e})
    }
    render() {
        return(
            <div className="item">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="ui field">
                        <input name="name"
                               value={this.state.name}
                               type="text"
                               required
                               onChange={this.handleInput}/>
                    </div>
                    <div className="ui field">
                        <ColorSelect onColored={this.onColored} selected={this.props.project.color_id} />
                    </div>
                    <button className="fluid ui button green">сохранить</button>
                </form>
            </div>
        )
    }
}