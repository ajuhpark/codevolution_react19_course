// React 19 Tutorial - 14 - Styling React Components
// import "./Alert.css"
// now since we're importing from Alert.module.css, the import changes a little. 
import styles from "./Alert.module.css"


export const Alert = ({ children, type = "success" }) => {
    // this is how to write inline styling for div. 
    // outer curly bract is for jsx to know we're writing js. innter curly braces is the actual js object.
    return (
    // use template literal for alert and then bind the type prop
    // <div className={`alert ${type}`}>
    // the 'styes' import is a js object now so we're going to use template literal to combine base alert and type. We need to use bracket notation for type because it's a dynamic value.
    <div className={`${styles.alert} ${styles[type]}`}>
        {children}
    </div>
    )   
}