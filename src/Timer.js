import React, { useEffect, useState } from 'react'

export default function Timer () {
  
        const [time,setTime]=useState(new Date().toLocaleTimeString())

        useEffect( ()=>{
            //componentDidMount 
            //react executes it only once after render
            console.log("useEffect")
           const interval =  setInterval(()=>{
                console.log("timer running")
                setTime(new Date().toLocaleTimeString())
            },1000)

            //componentWillUnmount
            return ()=>{
                console.log("react is calling this function just before unmounting your component")
                        clearInterval(interval)
            }

        }, [] )
        // useEffect(()=>{ return ()=>{  }},[])

        return (
            <div>
              <h1>Time : {time} </h1>  
            </div>
        )
   
}
