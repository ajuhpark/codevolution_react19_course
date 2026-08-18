// React 19 Tutorial - 16 - Event Handlers as Props

// we're passing this onClick event handler as a prop
// and we're passing it directly as the onClick event handler of the button.
export const ActionButton = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>
}

