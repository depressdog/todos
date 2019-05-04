import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
export default class New extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            date: '',
            startDate: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
    }
    onSubmit = () => {
        this.props.onNew(this.state.name, this.state.date)
    }
    handleChange(date) {
        this.setState({
            startDate: date,
            date: date
        });
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    render() {
        return(
            <form className="ui form segment" onSubmit={this.onSubmit}>
                <div className="ui field">
                    <input  name="name"
                            type="text"
                            placeholder="Name..."
                            required
                            onChange={this.handleInput}
                    />
                </div>
                <div className="ui field">
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
                <button className="ui button green">создать</button>
            </form>
        )
    }
}