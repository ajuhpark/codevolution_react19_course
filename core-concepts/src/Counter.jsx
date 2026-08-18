// React 19 Tutorials - 17 - Introduction to State
// React 19 Tutorial - 18 - useState Hook

// hooks are still functions whose names starts with use
import { useState } from "react"

export const Counter = () => {

    // this useState has an argument that's the initial value of the state - useState(initialValue)
    // and it returns the currentValue of the state
    // and a function that can update that state - setterFunction    const [count, setCount] = useState()
    // for the current value of the useState(), we'll add 'count' and then a function that can update it, setCount(). We'll add const keyword and wrap value in square brackets. This syntax is called array destructuring.
    // so now we have a state variable initialized to 0 and a method capable of changing it

    // const [count, setCount] = useState(0)
    // can also pass the function as the initial value. 
    // this pattern is called lazt initialization. 
    const [count, setCount] = useState( ()=> {
        console.log("Initial state function called");
        return 0;
    })



    console.log("Counter component rendered with count:", count)

    // let count = 0 

    const handleClick = () => {
        // count = count + 1;
        setCount(count + 1)
        // console.log(count)
    }

    return <button onClick={handleClick}>Count: {count}</button>
}