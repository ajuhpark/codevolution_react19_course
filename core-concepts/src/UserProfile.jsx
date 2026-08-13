// this shows fragment example
// instead of div tag, put in <React.Fragment>
// react.fragment doesn't add any extra html to the dom.
// you can also put in <></> as a shorthand for React.Fragment

import React from "react";

export const UserProfile = () => {
    return (
        // <React.Fragment>
        <>
            <h1>Codevolution React Course</h1>
            <p>Author: Andrew</p>
        </>
        // </React.Fragment>
    )
}