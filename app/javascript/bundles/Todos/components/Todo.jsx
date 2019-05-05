import React, { Component } from 'react'
import axiosClient from "../../axiosClient";

export default class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            colorName: ''
        }
    }
    dateGet = (e) => {
        if(e != null){
            var str =  e.replace('T', ' ')
            return str.replace('.000Z', ' ')
        }
    }
    componentDidMount(){
        axiosClient.get(`colors/${this.props.todo.color_id}`)
            .then(response => {
                this.setState({
                    colorName: response.data.name
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        var tagLabel = 'yellow';
        var dateLabel = this.state.colorName;
        return(
            <div className={`ui ${tagLabel} segment`} key={this.props.todo.id}>
               <div className="card">
                   <div className="content">
                       <div className="meta">
                           <div className={`ui tag large label ${tagLabel}`}>work {this.props.todo.color_id}</div>
                           <div className={`ui tag large label ${dateLabel}`}>{this.dateGet(this.props.todo.date)}</div>
                       </div>
                       <div className="ui header">
                           <span>{this.props.todo.name}</span>
                       </div>
                       <div className="ui bottom attached icon buttons">
                           <button className="ui green button" onClick={() => { this.props.onDone(this.props.todo.id)}}><i className="check icon"></i></button>
                           <button className="ui orange button" onClick={() => { this.props.onUpdate(this.props.todo.id)}}><i className="pencil alternate icon"></i></button>
                           <button className="ui red button" onClick={() => { this.props.onDelete(this.props.todo.id)}}><i className="times icon"></i></button>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}