import React from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
function Home(){
  const navigate=useNavigate();
  return(
    <div className="bg-Home-page">
   <div style={{textAlign:"center",marginTop:"50px"}}>
      <img src="/images/newlogo.png"
      alt="StyleMe logo"
      width="180px"
      height="auto"
      margin-bottom="20px"/>
      
      <h1 style={{color:"#ffffff",
        fontSize:"4.5rem",
        fontWeight:"800",
        margin:'0px,0px,1.5rem,0px',
        letterSpacing:'-1px',
        textShadow:'0px,4px,20px,rgba(0,0,0,0.2)',
        textAlign:"center",
        fontFamily:'Playball'
      }}>StyleMe</h1>
      <p style={{color:"#eeaeae", fontSize:"1.25rem",
        lineHeight:'1.7',fontWeight:'400',maxWidth:'550px',textAlign:'center',
        marginLeft:"auto",marginRight:'auto'
      }}>Discover the perfect outfits, footwear, makeup and 
        hairstyles for every occasion.</p>
    </div>
  
    <div className="hero-cta-group">
      <button className="btn-primary" onClick={()=>navigate('/Clothing')}>Explore Looks</button>
    </div>
   
    </div>
  );
}
export default Home;