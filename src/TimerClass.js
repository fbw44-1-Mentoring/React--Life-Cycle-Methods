import React, { Component } from 'react'

export default class Timer extends Component {
    state={
        time: new Date().toLocaleTimeString() 
    }

    interval;
    fetch; 
    componentDidMount(){
        console.log("ComponentDidMount method")

       this.interval =  setInterval(()=>{
            console.log("timer running in background")
            this.setState({time :new Date().toLocaleTimeString() })
        },1000)
    }

    componentWillUnmount(){
        //cleanup all running codes in background
        //clear interval
            clearInterval(this.interval)
    }



 /*    shouldComponentUpdate(prevProps,prevState){
        //in updating phase ,react will execute this method just before render
        if(this.state.userInput===prevState.userInput){
            return true  
        }
        return false
    } */


    render() {
        return (
            <div>
              <h1>Time : {this.state.time} </h1>  
            </div>
        )
    }
}
