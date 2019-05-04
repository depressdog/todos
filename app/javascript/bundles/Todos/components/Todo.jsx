import React, { Component } from 'react'

export default class Todo extends Component{
    render() {
        var tagLabel = 'yellow';
        var dateLabel = 'purple';
        return(
            <div className={`ui ${tagLabel} segment`} key={this.props.todo.id}>
               <div className="card">
                   <div className="content">
                       <div className="meta">
                           <div className={`ui tag large label ${tagLabel}`}>work</div>
                           <div className={`ui tag large label ${dateLabel}`}>{this.props.todo.date}</div>
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