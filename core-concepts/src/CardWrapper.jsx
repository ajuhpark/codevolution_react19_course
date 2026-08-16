// if you pass a prop called 'children', you can replace that info. it's like a slot.

export const CardWrapper = ({ title, children }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="card-content">{children}</div>
        </div>
    )
}