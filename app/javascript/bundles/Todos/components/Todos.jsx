import React, { Component } from 'react';
import axiosClient from '../../axiosClient';
import update from 'immutability-helper'

import Todo from './Todo'
import New from './New'
import Update from './Update'

export default class Todos extends Component{
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            editId: ""
        };

        this.addNew = this.addNew.bind(this);
        this.Update = this.Update.bind(this);
    }
    componentDidMount() {
        axiosClient.get('todos')
            .then(response => {
                this.setState({
                    todos: response.data
                })
            })
            .catch(error => console.log(error))

    }
    addNew(name) {
        axiosClient.post( `todos`, { todo: {name: name} })
            .then(response => {
                const todos = update(this.state.todos, {
                    $splice: [[0, 0, response.data]]
                });
                this.setState({todos})
            })
            .catch(error => {
                console.log(error)
            })
    }
    delete = (id) => {
        axiosClient.delete(`todos/${id}`)
            .then(response => {
                const todoIndex = this.state.todos.findIndex(x => x.id === id);
                const todos = update(this.state.todos, { $splice: [[todoIndex, 1]]});
                this.setState({todos: todos})
            })
            .catch(error => console.log(error))
    }
    Update(e){
        this.setState({editId: e})
    }


    render() {
        var todolist = this.state.todos.map( (todo) => {
                if(this.state.editId === todo.id){
                    return (
                        <Update todo={todo} key={todo.id} onUpdate={this.Update} onDelete={this.delete} />
                    )
                } else {
                    return(
                        <Todo todo={todo} key={todo.id} onUpdate={this.Update} onDelete={this.delete} />
                    )
                }
        })
        return(
            <div>
                <New onNew={this.addNew}/>
                <div className="ui relaxed divided list">
                    {todolist}
                </div>
            </div>
        )
    }
}