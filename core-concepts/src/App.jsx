import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from "./Welcome"
import { Button } from "./Button"
import {Hello, HelloWithoutJSX} from "./Hello"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">

        <Hello />
        <HelloWithoutJSX />

        {/* this references the Welcome component in this file. */} 
        <Welcome />
        {/* references button component created. */}
        <Button />
 
      </section>
    </>
  )
}

export default App
