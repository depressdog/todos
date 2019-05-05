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
        this.updateTodo = this.updateTodo.bind(this);
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

    addNew(name, date, color_id) {
        axiosClient.post( `todos`, { todo: {name: name, date: date, color_id: color_id } })
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
    done = (id) => {

        axiosClient.put(
            (`todos/${id}`),
            {
                todo: {isDone: true}
            }
        )
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

    updateTodo = (todo) => {
        const todoIndex = this.state.todos.findIndex(x => x.id === todo.id)

        const todos = update(this.state.todos, {
            [todoIndex]: {$set: todos}
        })
    }
    render() {
        var todolist = this.state.todos.map( (todo) => {
                if(this.state.editId === todo.id){
                    return (
                        <Update todo={todo} key={todo.id} onUpdate={this.Update} updateTodo={this.updateTodo} onDelete={this.delete} onDone={this.done} />
                    )
                } else {
                    return(
                        <Todo todo={todo} key={todo.id} onUpdate={this.Update} onDelete={this.delete} onDone={this.done} />
                    )
                }
        })
        return(
            <div>
                <New onNew={this.addNew}/>
                <div className="ui">
                    {todolist}
                </div>
            </div>
        )
    }
}