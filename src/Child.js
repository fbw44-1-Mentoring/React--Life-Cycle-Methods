import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log("constructor in child")
    }


    static getDerivedStateFromProps(props,state){
        console.log("static method in child")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount in child")
    }
    
    render() {
        console.log("render in child")
        return (
            <div>
                <h2>This is Child Component</h2>
            </div>
        )
    }
}
