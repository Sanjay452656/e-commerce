import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

/*
src/
 ┣ components/
 ┃ ┣ Navbar.jsx
 ┃ ┣ ProductCard.jsx
 ┃ ┗ CartItem.jsx
 ┣ pages/
 ┃ ┣ Home.jsx
 ┃ ┣ Cart.jsx
 ┃ ┗ ProductDetails.jsx
 ┣ context/
 ┃ ┗ CartContext.jsx
 ┣ services/
 ┃ ┗ api.js
 ┣ App.jsx
 ┗ main.jsx

*/

function App() {

  return (
    <div>
    <Home/>
    </div>
  )
}

export default App
