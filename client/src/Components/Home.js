import React from 'react'
import {useLocation} from 'react-router-dom'

function Home() {

let loc = useLocation();
console.log(loc);

  return (
    <div>
        <h1>Home</h1>
        <h2>Welcome {loc.state.name}</h2>
        <h2>Your Email is- {loc.state.email}</h2>
        <h2>Your BatchId is-  {loc.state.batchId}</h2>
        <h2>Your MobileNo is-  {loc.state.mobileNo}</h2>
        <img src= { "http://localhost:6767/"+loc.state.profilePic}></img>
        
    </div>
  )
}

export default Home