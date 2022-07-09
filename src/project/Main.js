import React from 'react';
import { Link } from 'react-router-dom';
import "./Styles.css"

const Main=()=> {
  return (
    <>
      <div className='cont'>
          <div><h1 className='sir'>E-COMMERCE WEB-APPLICATION</h1></div>
          <div className='bar'>
          <ol>
              <Link to="/home"><li>HOME</li></Link>
              <Link to="/shop"><li>ALL ITEMS</li></Link>
              <Link to="/favourites"><li>FAVOURITES</li></Link>
              <Link to="/orders"><li>ORDERS</li></Link>
              <Link to="/Contact"><li>CONTACT</li></Link>
              <Link to="/profile" ><li>PROFILE</li></Link>
              <Link to="/add" > </Link>
          </ol>
          </div>
      </div> 
    </>
  )
}
export default Main