import React, { Component } from "react";
import Child from "./Child"

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor Method In App");
       //react will call this method only once
    //state initialization
    this.state={
      count:3,
      users:[],
      loading:true
    }

 
    //bind your custom methods here
    /* this.incrementCounter = this.incrementCounter.bind(this) */
  }

 /*  static getDerivedStateFromProps(props,state){
    //filter
    console.log("Static Method in App")
    if(state.count===5){
      return {count:6}
    }
    return {count:10}  
  } */


  componentDidMount(){
    //just like on load
    //API
    //this method react will call after render
    //react will call this method only once
    console.log("componentDidMount in App")
    fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(result=>this.setState({users:result}))
  }


  //custom method
  incrementCounter=()=>{
    console.log(this)
    this.setState({count:this.state.count+1})
    console.log(this.state.count)
  }


  //required method in class component
  render() {
    console.log("Render Method In App");
    return (
      <div>
        <h1>My React App</h1>
    <h2>{this.state.count}</h2>
    <button onClick={this.incrementCounter}>increment</button>
    <Child/>
      </div>
    );
  }
}
