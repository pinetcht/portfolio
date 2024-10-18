import React from 'react'
import { Navbar } from "../components/Navbar.jsx"
import "../styles/Styles.css";
import pic from "../assets/pcip.jpg"

export const Root = () => {
  return (
    <>
    <Navbar />
      <div className="page">
        <h1 className="header">Home</h1>
        <img src={pic} id="pic"/>
        <p>Welcome to Pine's Webpage!</p>
      </div>
  </>
  )
}
