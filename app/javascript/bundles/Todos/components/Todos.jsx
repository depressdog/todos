import React, { Component } from 'react';
import axiosClient from '../../axiosClient';
import update from 'immutability-helper'

import Todo from './Todo'
import New from './New'

export default class Todos extends Component{
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };

        this.addNew = this.addNew.bind(this);
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
    render() {
        var todolist = this.state.todos.map( (todo) => {
            return(
                <Todo todo={todo} key={todo.id} />
            )
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