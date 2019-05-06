import React, {Component} from 'react'
import ColorSelect from "../../Colors/components/ColorSelect";

export default class New extends Component{
    constructor(props){
        super(props)
        this.state = {
            color_id: '1'
        }
    }
    onSubmit = () => {
        this.props.onNew(this.state.name, this.state.color_id)
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
                               type="text"
                               placeholder="Project..."
                               required
                               onChange={this.handleInput}/>
                    </div>
                    <div className="ui field">
                        <ColorSelect onColored={this.onColored} />
                    </div>
                    <button className="fluid ui button green">создать</button>
                </form>
            </div>
        )
    }
}