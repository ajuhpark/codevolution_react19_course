// React 19 Tutorial - 15 - Event Handling

// we're going to give CustomButton a prop called text
export const CustomButton = ( { text }) => {

    // define function that should be executed when event occurs
    // every event handler has an even object as its first parameter. we usually call it 'e'.
    const handleClick = (e) => {
        // console.log("Clicked element", e.target)
        // console.log("Click coordinates", e.clientX, e.clientY)
        console.log("Which mouse button?", e.button)

        console.log(`Hey ${name}, you clicked ${text}`);

        alert("Thanks for liking!")
    }

    // assign function to special prop that starts with 'on'.
    // then we assign handleClick to onClick.
    return <button onClick={handleClick}>
        {text}
    </button>
}