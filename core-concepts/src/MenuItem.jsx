// React 19 Tutorial - 16 - Event Handlers as Props

export const MenuItem = ({ name, price, onOrder }) => {
    return (
        <div>
            <span>{name} - ${price}</span>

            {/*onClick is going to be an arrow function that returns the name and price. */}
            <button onClick={() => onOrder (name, price)}>Order</button>
        </div>
    )
}