
/** 
 * This is using the 'props' in the function
 * 
export const Product = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>Price: ${props.price}</p>
            // If props.inStock is true, render yes. if not, render no.
            <p>In stock: {props.inStock ? "Yes" : "No"}</p>
            <p>Categories: {props.categories.join(",")}</p>
        </div>
    )
}

*/

// This is using the actual property names.
export const Product = ({title, price, inStock, categories}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>In stock: {inStock ? "Yes" : "No"}</p>
            <p>Categories: {categories.join(",")}</p>
        </div>
    )
}


