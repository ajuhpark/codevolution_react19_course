// React 19 Tutorial - 20 - How State Updates Work

import { useState } from "react"

// How setCount update works
//
// 1. You call setCount(count + 1)                                  (trigger phase)
// 2. React marks your component as needing an update                (trigger phase)
// 3. React calls your component function again                      (render phase)
// 4. Your function returns new JSX with the updated count            (render phase)
// 5. React compares this render with the previous one and figures
//    out what changed                                                (render phase)
// 6. React updates only what changed in the actual DOM                (commit phase)
export const SimpleCounter = () => {

    // console.log("SimpleCounter component rendered")
    
    const [count, setCount] = useState(0)
    console.log("Render phase: Component rendering with count = ", count)
    
    /**
     * The snapshot concept: every time SimpleCounter renders, React creates a brand new handleClick function, and inside that function count is just a plain number captured from that render's useState(0) call — it's "frozen" for the lifetime of that function. Calling setCount(...) never reaches back into that closure and mutates it; it only tells React "please re-render this component with a new value next time." So within a single click, no matter how many times you call setCount, the local count variable you're logging stays exactly what it was when that render happened. That's why your two logs — "Before setCount" and "Still in trigger phase, after setCount" — both print the same number: they're reading the same snapshot variable, not the live state.
     */
    const handleClick = () => {
        console.log("Before setCount, count is: ", count)
        setCount(count + 1)
        console.log("Still in trigger phase. After setCount, count is:", count)
        setCount(count + 5);
        console.log("After setCount(count + 5), count is: ", count)

    }

    return <div>
        <h2>Count: {count}</h2>
        {/* <button onClick={() => setCount( count + 1)}>Increment</button> */}
        <button onClick={handleClick}>Increment</button>
    </div>

}
