import { UserInfo } from "./UserInfo"

// can user props directly instead of destructuring.
// export const UserCard = ({ name, age, city, email }) => {
// export const UserCard = ({ props }) => {

    // you can also put 1 prop and and use the rest operator.    
export const UserCard = ({ id, ...rest }) => {
    return (
        <div>
            <h2>User {id} Details</h2>

            {/* can use spread operator instead of props object. 
            This forwards all of the UserCard props to the UserInfo without listing them individually.            
            */}
            {/* <UserInfo name={name} age={age} city={city} email={email}/> */}
            {/* <UserInfo {...props}/> */}

            {/** This is if you use 1 prop and want the rest passed here */}
            <UserInfo {...rest}/>
        </div>
    )
}