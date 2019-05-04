import React, { Component } from 'react'
import axiosClient from '../../axiosClient'
import DatePicker from 'react-datepicker'

export default class Update extends Component{
    constructor(props){
        super(props);
        this.state={
            name: this.props.todo.name,
            date: this.props.todo.date,
            startDate: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    onSubmit = () => {
        const todo = {
            name: this.state.name,
            date: this.state.date
        };
        axiosClient.put(
            (`todos/${this.props.todo.id}`),
                {
                    todo: todo
                }
            )
            .then(response => {
                this.props.updateTodo(response.data);
            })
            .catch(error => console.log(error))
    }
    handleChange(date) {
        this.setState({
            date: date
        });
    }
    render() {
        return(
            <div className={`ui segment`} key={this.props.todo.id}>
                <form className='ui form' onBlur={this.onSubmit}>
                    <div className="card">
                        <div className="content">
                            <div className="meta">
                                <div className={`ui tag large label`}>work</div>
                                <div className={`ui tag large label`}>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={30}
                                        dateFormat="yyyy-MM-dd HH:mm"
                                        timeCaption="time"
                                    />
                                </div>
                            </div>
                            <div className="ui header ">
                                <input type="text" name="name" value={this.state.name} onChange={this.handleInput}/>
                            </div>
                            <div className="ui bottom attached icon buttons">
                                <button className="ui green button" onClick={() => { this.props.onDone(this.props.todo.id)}}><i className="check icon"></i></button>
                                <button className="ui orange button" onClick={() => { this.onSubmit}}><i className="save alternate icon"></i></button>
                                <button className="ui red button" onClick={() => { this.props.onDelete(this.props.todo.id)}}><i className="times icon"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}