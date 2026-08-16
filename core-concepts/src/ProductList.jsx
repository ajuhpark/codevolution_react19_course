
// React tutorial 11 - Rendering Lists
// React 19 Tutorial - 12 - Lists and Keys
// using keys allows React to track by key even if they're in diff order

import React from "react"

export const ProductList = () => {

    // array and each item is represented as an object
    // each product has a name, an id and a price
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 999
        },
        {
            id: 2,
            name: "Phone",
            price: 699
        },
        {
            id: 3,
            name: "Tablet",
            price: 499
        }
    ]

    const productElements = products
    .filter((product) => {
        return product.price > 500;
    }) 
    .map((product) => {
        return (
            // rule for key: the key prop goes on the outermost repeated element
            // so if you were to wrap it in a react fragment, you would import react and then put the key in there.
            <React.Fragment key={product.id}>
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        // <div>
        //     <h2>Our Products</h2>
        //     {
        //         // map method takes a callback function that will be called for each item in the array
        //         products.map((product) => {
        //             return (
        //                 <div key={product.id}>
        //                     {/* // when you write html inside js function, you have to use curly braces again */}
        //                     <h3>{product.name}</h3>
        //                     <p>Price: ${product.price}</p>
        //                 </div>
        //             )
        //         })
        //     }
        // </div>
        <div>
            <h2>Our Products</h2>
            {productElements}
        </div>
    )
}

