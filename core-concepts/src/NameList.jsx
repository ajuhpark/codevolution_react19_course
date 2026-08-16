// React 19 Tutorial - 13 - Index as Key Anti-Pattern

export const NameList = () => {

    const names = ["Bruce", "Clark", "Diana"]

    // since the function body is a one liner, we can omit the return key word
    // the map index gives us access to a second parameter in the callback function called index and we can use this as the key.
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)

    return <div>{nameList}</div>
}