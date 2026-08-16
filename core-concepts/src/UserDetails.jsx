// React 19 Tutorial - 10 - Conditional Rendering

import { Button } from "./Button"


export const UserDetails = ({ 
    name, 
    isOnline, 
    hideOffline, 
    isPremium, 
    isNewUser,
    role 
}) => {


    if (hideOffline && !isOnline) {
        return null;
    }

    // using variables for complex logic that would make your jsx messy
    let roleBadge = null;
    if( role === "admin") {
        roleBadge = <span>Admin</span>
    } else if (role === "moderator") {
        roleBadge = <span>Moderator</span>
    } else if (role === "vip") {
        roleBadge = <span>VIP</span>
    }

    return (
        <div>
            <h3>{name}</h3>
            {/* Using the 'and' operator when you want to render some jsx that's true and nothing otherwise. 
            this means if isPremium is true, render a star */}
            {isPremium && <span>star</span>}
            {isNewUser && <span>party</span>}
            {roleBadge}

            {/* ternary operator */}
            <span>{isOnline ? "Online" : "Offline"}</span>
            <p>{isOnline ? "Available for chat" : "Not available"}</p>
            {
                isOnline ? (
                <button>Send Message</button>
                ) : (
                <small>Check back later</small>
                )
            }
        </div>
    )


    // this is not using the ternary operator
    /**
    if (isOnline){
        return (
            <div>
                <h3>{name}</h3>
                <span>Online</span>
                <p>Available for chat {isOnline}</p>
                <Button></Button>
            </div>
        )
    }

    return (
        <div>
            <h3>{name}</h3>
            <span>Offline</span>
            <p>Not available</p>
            <small>Check back later</small>
        </div>
    )
    */
}

