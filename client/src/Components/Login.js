import React,{useRef} from 'react';
import {Link,useNavigate} from 'react-router-dom';

function Login() {

let navigate = useNavigate();
let emailInputRef = useRef();
let passwordInputRef = useRef();


let sendCredentials = async()=>{

let dataToSend = new FormData();

dataToSend.append("email",emailInputRef.current.value);
dataToSend.append("password",passwordInputRef.current.value);


let reqOptions = {

 method:"POST",
 body: dataToSend,

};

let JSONData = await fetch("http://localhost:6767/validateLogin",reqOptions);

let JSOData = await JSONData.json();


if(JSOData.status == "Failure"){
  alert(JSOData.details);
}else{
  navigate("/home",{state:JSOData.details});
}

console.log(JSOData);

}

  return (
    <div>
    <form>
        <h2>Login Authentication</h2>
      <div>
        <label>User</label>
        <input ref={emailInputRef}></input>
      </div> 
      <div>
        <label>Password</label>
        <input ref={passwordInputRef}></input>
      </div>  
      <button type='button' onClick={()=>{

            sendCredentials();
      }}
      
      >Login</button>
    </form>
    <br></br>
    <Link to="/SignUp">SignUp</Link>
    </div>
  )
}

export default Login