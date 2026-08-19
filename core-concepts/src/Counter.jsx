// React 19 Tutorials - 17 - Introduction to State
// React 19 Tutorial - 18 - useState Hook

// hooks are still functions whose names starts with use
import { useState } from "react"

export const Counter = () => {

    /**
     * Mount → React has no stored value yet → calls your function → gets 0 back → stores 0 → count = 0.

    Click → setCount(1) → React overwrites its stored value with 1 → schedules re-render.

    Re-render → React already has stored state → skips calling your function entirely → just returns the stored 1 → count = 1.
     */
    // this useState has an argument that's the initial value of the state - useState(initialValue)
    // and it returns the currentValue of the state
    // and a function that can update that state - setterFunction    const [count, setCount] = useState()
    // for the current value of the useState(), we'll add 'count' and then a function that can update it, setCount(). We'll add const keyword and wrap value in square brackets. This syntax is called array destructuring.
    // so now we have a state variable initialized to 0 and a method capable of changing it

    // const [count, setCount] = useState(0)
    // can also pass the function as the initial value. 
    // this pattern is called lazy initialization. initializer function only ever runs once, on the very first render (when the component mounts). It does not run again on subsequent re-renders.

    // The "only run once" behavior isn't something you coded — it's baked into how useState is implemented internally by React, not visible anywhere in your file.

    const [count, setCount] = useState( ()=> {
        console.log("Initial state function called");
        return 0;
    })

    console.log("Counter component rendered with count:", count)

    // let count = 0 

    /** 
     * When you click the button, handleClick fires. Inside it, setCount(count + 1) is called — at that moment count is still 0 from this render's closure, so this is setCount(1). Calling setCount doesn't mutate count directly (you can't reassign a const, and React state doesn't work that way anyway). Instead, it tells React: "the next time you render this component, use 1 as the state value."
    */

    /**
     * When you call setCount(1), that function doesn't return anything to you and doesn't touch your local count variable at all. Instead, it reaches into React's internal bookkeeping and does two things: it updates the value stored in that component's slot to 1, and it marks the component as "needs to re-render," queuing that work up (React batches these when it can).
     * 
     * On the next render, when your component function body runs again and hits useState(...), React doesn't create a new slot — it looks up the existing one for this component instance (React keeps track of hooks by the order they're called in, which is why hooks can't be called conditionally) and returns whatever value is currently stored there, along with a setter function pointing at that same slot.
     * 
     * Inside handleClick, you're not defining setCount — you're calling it (i.e., using it, the same way you'd call console.log(...)). Line 29, setCount(count + 1), is a function call: you're handing setCount an argument (count + 1, i.e. 1 on the first click) and asking it to do its job. The "adds 1" part isn't logic you wrote — it's just arithmetic you did yourself (count + 1) before handing the result off. setCount's own internal job (which React wrote, not you) is simpler than "add 1" — it's really just "take whatever value you're given and store it as the new state."
     * 
     * you should stop thinking of setCount(count + 1) as a call whose return value matters. You don't use its return value anywhere — there's no const result = setCount(...) in your code. What matters isn't what it returns, it's the side effect it causes: it tells React "update this component's stored state to 1, and schedule a re-render." Its return value (undefined) is irrelevant and unused.
     */
    const handleClick = () => {
        // count = count + 1;
        setCount(count + 1)
        // console.log(count)
    }

    return <button onClick={handleClick}>Count: {count}</button>
}