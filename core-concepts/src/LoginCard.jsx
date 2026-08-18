// React 19 Tutorial - 18 - useState Hook
// using a boolean and a string state

import { useState } from "react"

export const LoginCard = () => {

    // initialize useState to false.
    // this returns an array with two values. 
    // we call the state variable 'isLoggedIn'. the function to set isLoggedIn is setLoggedIn.
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [message, setMessage] = useState("")

    const handleLogin = () => {
       // if the value is true, we set it to false. 
       // if the value is false, we set it to true. 
        setIsLoggedIn(!isLoggedIn)
    }

    const handleChange = (event) => {
        setMessage(event.target.value)
    }

    return (
        // adding an event handler that handles the state.
        <>
        <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
        <input type="text" placeholder="Type a message" value={message} onChange ={handleChange}/>

        <p>{message}</p>
        </>
    )

}