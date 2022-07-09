import React from 'react';
import "./Styles.css"

export default function Add() {
  return (
    <>
     <div>
    <p>Place an Order</p>
        <form>
          <input placeholder="phone" />
          <br></br>
          <input placeholder="first name" />
          <br></br>
          <input placeholder="Last Name" />
          <br></br>
          <input placeholder="email" />
          <br></br>
          <input placeholder="Address" />
          <br></br>
          <br></br>
          <button>BUY NOW</button>
        </form>
    </div>
    
    </>
  )
}
