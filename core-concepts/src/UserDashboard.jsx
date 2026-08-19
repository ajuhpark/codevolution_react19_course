// React 19 Tutorial - 19 - Rules of Hooks

// useState is a React "hook" - a special function that lets a function
// component hold on to (and update) its own state between renders.
// Without it, a plain JS variable inside the component would just reset
// to its initial value every time the component re-rendered.
import { useState } from 'react'

// we're going to use isPremium prop to conditionally create a credits state
export const UserDashboard = ({ isPremium }) => {

    // this needs to be at top level.
    // useState(100) does two things:
    //   1. On the very first render, it creates a piece of state initialized to 100.
    //   2. On every render after that, it hands back the CURRENT value of that
    //      state (React remembers it for you behind the scenes).
    //
    // It returns an array with exactly two items, which we destructure:
    //   - credits: the current value of the state (starts at 100)
    //   - setCredits: a function used to UPDATE that value
    //
    // Calling setCredits(...) does not just change the variable - it tells
    // React "this state changed," which triggers the component to re-render
    // with the new value.
    const [credits, setCredits] = useState(100)

    // Why "this needs to be at top level" matters (Rules of Hooks):
    // Hooks must be called in the same order on every single render, so React
    // can correctly match each useState call to its stored state. That means
    // hooks can NOT be called inside conditions, loops, or after an early
    // return. Notice useState(100) above happens BEFORE the `if` check below -
    // if we tried to move it after this condition (i.e. only create the state
    // when isPremium is true), the hook would sometimes run and sometimes not,
    // which breaks React's ability to track it and throws an error.
    if (!isPremium) {
        return <div>Upgrade to premium to see credits</div>
    }

    return <div>
        {/* Reading the state value - just use the `credits` variable directly */}
        <p>You have {credits} credits</p>

        {/* Updating the state - call setCredits with the new value.
            This schedules a re-render; on that re-render, `credits` above
            will be 0 instead of 100. */}
        <button onClick={() => setCredits(0)}>Spend all credits</button> 
        </div>
}