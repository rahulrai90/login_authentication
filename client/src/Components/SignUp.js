import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {

let nameInputRef = useRef();
let emailInputRef = useRef();
let passwordInputRef = useRef();
let mobileNoInputRef = useRef();
let batchIdInputRef = useRef();
let profilePicRef = useRef();


let sendFormDataToServer = async()=>{

let dataToSend = new FormData();

dataToSend.append("name", nameInputRef.current.value);
dataToSend.append("email", emailInputRef.current.value);
dataToSend.append("password", passwordInputRef.current.value);
dataToSend.append("mobileNo", mobileNoInputRef.current.value);
dataToSend.append("batchId", batchIdInputRef.current.value);
dataToSend.append("profilePic", profilePicRef.current.files[0]);


console.log(profilePicRef.current.files)

    let reqOptions = {

        method:"POST",
        body:dataToSend,
    }

    console.log(dataToSend);

let JSONData = await fetch("http://localhost:6767/signup", reqOptions);

let JSOData = await JSONData.json();

console.log(JSOData)
}

  return (
  <div>
<form>
    <h2>SignUp Your Account</h2>
  <div>
    <label>Name</label>
    <input ref={nameInputRef}></input>
  </div>
  <div>
    <label>Email</label>
    <input ref={emailInputRef}></input>
  </div> 
  <div>
    <label>Password</label>
    <input ref={passwordInputRef}></input>
  </div> 
  <div>
    <label>MobileNo</label>
    <input ref={mobileNoInputRef}></input>
  </div> 
  <div>
    <label>Batch d</label>
    <input ref={batchIdInputRef}></input>
  </div> 
  <div>
    <label>Profile Pic</label>
    <input ref={profilePicRef} type='file'></input>
  </div> 
  <button type='button' onClick={()=>{

          sendFormDataToServer();

  }}
  
  
  
  >SignUp</button>
</form>
<br></br>
<Link to="/" >Login</Link>

</div>


  )
}

export default SignUp