import React from 'react'

const Profile=()=> {
  return (
    <>
    <div>
    <p>CREATE AN ACCOUNT</p>
        <form>
          <input placeholder="name" />
          <br></br>
          <input placeholder="last name" />
          <br></br>
          <input placeholder="username" />
          <br></br>
          <input placeholder="email" />
          <br></br>
          <input placeholder="password" />
          <br></br>
          <input placeholder="confirm password" />
          <br></br>
          <p>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </p>
          <br></br>
          <button>CREATE</button>
        </form>
    </div>
    
    </>

  )
}
export default Profile