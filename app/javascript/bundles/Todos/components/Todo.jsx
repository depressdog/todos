import React, { Component } from 'react'

export default class Todo extends Component{
    render() {
        var tagLabel = 'yellow';
        return(
            <div className="item" key={this.props.todo.id}>
                <div className="content">
                    <div className="header">
                        <div className={`ui horizontal label ${tagLabel}`}>work</div>
                        {this.props.todo.name}
                        <div className="ui right floated main menu">
                            <div className="ui icon buttons">
                                <button className="ui green button"><i className="check icon"></i></button>
                                <button className="ui orange button"><i className="pencil alternate icon"></i></button>
                                <button className="ui red button"><i className="times icon"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="description">{this.props.todo.id}</div>
                    <div className="ui orange left ribbon label">{this.props.todo.created_at}</div>
                </div>
            </div>
        )
    }

}