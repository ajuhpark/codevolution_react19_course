import React from "react";

export const Hello = () => {
    return (<
        div id="container">
            <h1>Hello Andrew</h1>
        </div>
    )
}

{/* the createElement method needs three arguments. 
    1. html element to be rendered.
    2. properties or attributes for that element
    3. children of that element.
     */}

export const HelloWithoutJSX = () => {
    return React.createElement("div", {id: "container"}, 
        React.createElement("h1", null, "Hello Andrew")
    );
}