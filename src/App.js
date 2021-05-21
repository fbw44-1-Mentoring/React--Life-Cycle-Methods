import React,{useState} from 'react'
import Timer from "./Timer"

export default function App ()  {

    const [show,setShow]=useState(true)

        return (
            <div>
                <h1>Hello World</h1>
                  {show && <Timer/> }  
                <button onClick={()=>setShow(!show)}>Show/Hide</button>
            </div>
        )
    }

