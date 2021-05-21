import React, { Component } from 'react'
import Timer from "./Timer"

export default class App extends Component {

    state={
        show:true
    }

    changeStatus=()=>{
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                 {this.state.show && <Timer/> }   
                <button onClick={this.changeStatus}>Show/Hide</button>
            </div>
        )
    }
}
