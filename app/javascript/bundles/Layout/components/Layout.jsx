import React, {Component} from 'react'

import Projects from '../../Projects/components/Projects'
import Todos from '../../Todos/components/Todos'

export default class Layout extends Component{
    render() {
        return(
            <div className="ui grid">
                <div className="two wide column">
                    <div className="ui left fixed vertical inverted menu scrolled">
                        <a className="item">Features</a>
                        <div className="item">
                            <Projects />
                        </div>
                    </div>
                </div>
                <div className="fourteen wide column scrolled">
                    <Todos />
                </div>
            </div>
        )
    }
}