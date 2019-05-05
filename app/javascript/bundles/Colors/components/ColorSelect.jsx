import React from 'react'
import axiosClient from '../../axiosClient'

class ColorSelect extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            colors: []
        }
    }
    componentDidMount() {
        axiosClient.get('colors')
            .then(response => {
                this.setState({
                    colors: response.data
                })
            })
            .catch(error => console.log(error))

    }
    onColor = (e) => {
        this.props.onColored(e.target.value)
    };
    render() {
        var colors = this.state.colors.map( (color) => {
            return(
                <option key={color.id} value={color.id}>{color.name}</option>
            )
        })
        return(
            <select name="color_id" id="color_id" onChange={this.onColor}>
                {colors}
            </select>
        )
    }
}
export default ColorSelect;