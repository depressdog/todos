import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default class New extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            date: '',
            color_id: "12",
            startDate: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
    }
    onSubmit = () => {
        this.props.onNew(this.state.name, this.state.date, this.state.color_id)
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
    onColored = (e) => {
        this.setState({color_id: e.target.value})
    }
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
                <div className="ui two fields">
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
                    <div className="ui field">
                        <label htmlFor="color_id">Приоритет</label>
                        <select name="color_id" id="color_id" onChange={this.onColored}>
                            <option value="">Выбор приоритета</option>
                            <option value="1">высокий</option>
                            <option value="2">средний</option>
                            <option value="12">низкий</option>
                        </select>
                    </div>
                </div>
                <button className="ui button green">создать</button>
            </form>
        )
    }
}