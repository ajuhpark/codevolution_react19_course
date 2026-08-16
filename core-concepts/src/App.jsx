import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from "./Welcome"
import { Button } from "./Button"
import {Hello, HelloWithoutJSX} from "./Hello"
import { UserProfile } from './UserProfile'
import { ContactForm } from './ContactForm'
import { StyledForm } from './StyledForm'
import { CandidateProfile } from './CandidateProfile' // passing variables
import { Product } from './Product' //props concept
import { Greeting } from './Greeting' // prop concept
// import { UserCard } from './UserCard' // rest concept
import { CardWrapper } from "./CardWrapper" // children concept
import { UserDetails } from "./UserDetails" // conditional Rendering


function App() {
  const [count, setCount] = useState(0) 

  return (
    <>
      <section id="center">
        
        <UserDetails 
          name="Bruce Wayne" 
          isOnline={true} 
          isPremium={true} 
          isNewUser={true}
        />
        <UserDetails 
          name="Clark Kent" 
          isOnline={true} 
          hideOffline={true} 
          role="vip"
        />

        <CardWrapper title="User Profile">
            <p>Bruce Wayne</p>
            <p>batman@jl.com</p>
            <p>Edit Profile</p>
        </CardWrapper>

        <Greeting name="Bruce" message="Good morning" />
        <Greeting name="Clark"/>
        <Greeting message="Welcome"/>
        <Greeting />


        <Product 
        title="Gaming laptop" 
        price={1299.99} 
        inStock={true}
        categories={["Electronics", "Computers", "Gaming"]}
         />
        {/* Trying out props */}
        <Welcome name="Bruce" alias="Batman" />
        <Welcome name="Clark" alias="Superman"/>
        <Welcome name="Diana" alias="Wonder Woman"/>


        <Hello />
        <HelloWithoutJSX />
        <UserProfile />
        <ContactForm />
        <StyledForm />
        <CandidateProfile />


        {/* this references the Welcome component in this file. */} 
        <Welcome />



        {/* references button component created. */}
        <Button />
 
      </section>
    </>
  )
}

export default App
