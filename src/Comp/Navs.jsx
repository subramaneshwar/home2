import React from 'react'

function Navs() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",background:"black",color:"white",height:"5vh",padding:"0 20px"}}>
        <div>
            <div className="logo"><h1>LOGO</h1></div>
        </div>
        <ul style={{display:"flex",alignItems:"center",gap:"30px"}}>
            <button style={{backgroundColor:"#ffcfd1",color:"white",border:"none",padding:"1rem,.8rem",borderRadius:"2px",fontSize:"1.2rem"}} >Home</button>
            <button style={{backgroundColor:"black",color:"white",border:"none",padding:"1rem,.8rem",borderRadius:"2px",fontSize:"1.2rem"}} >About</button>
            <button style={{backgroundColor:"black",color:"white",border:"none",padding:"1rem,.8rem",borderRadius:"2px",fontSize:"1.2rem"}} >Menu</button>
            <button style={{backgroundColor:"black",color:"white",border:"none",padding:"1rem,.8rem",borderRadius:"2px",fontSize:"1.2rem"}} >Order</button>
            <button style={{backgroundColor:"black",color:"white",border:"none",padding:"1rem,.8rem",borderRadius:"2px",fontSize:"1.2rem"}} >Contact</button>
        </ul>
    </div>
  )
}

export default Navs