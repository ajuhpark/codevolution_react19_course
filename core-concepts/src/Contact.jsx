// React 19 Tutorial - 16 - Event Handlers as Props

import { ActionButton } from "./ActionButton"

export const Contact = () => {
    // we're creating this function to pass as the onClick prop 
    const handleSendMessage = () => {
        alert("Sending your message")
    }

    return (
        <div>
            <h2>Contact us</h2>
            <ActionButton text="Send Message" onClick={handleSendMessage}/>
        </div>
    )
}