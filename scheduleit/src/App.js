import React from "react"
import Auth from "./components/Auth/Auth"
import { GlobalStyles } from "./GlobalStyles"

function App() {
    return(
    <>
        <GlobalStyles />
        <Auth />
        <h1>Hello from App!</h1>
    </>)
}

export default App