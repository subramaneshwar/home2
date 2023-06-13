import React from 'react'
import Navs from './Navs'

function Home() {
  return (
    <div style={{height:"100vh",width:"100%"}}>
        <Navs/>
        <div style={{backgroundImage:'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3zKQglQQ2Un5C4t5t3-iagPHHOAfS1XNTl12cCnQ3yaAoq49P")',height:"95%",backgroundRepeat: "no-repeat",backgroundSize:"cover",display:"flex",justifyContent:"space-between",flexDirection:"column",alignItems:"center"}}>
        <h1>Home</h1>
        <p style={{fontSize:"1.2rem",fontWeight:"bold"}}>Made with 💛 by <span style={{color:"red"}}>

        S.Reddy
        </span>
        </p>
        </div>
    </div>
  )
}

export default Home