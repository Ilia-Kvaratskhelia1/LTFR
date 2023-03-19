import React, { useState } from "react";
import "./Header.css";
function Header() {
  const [LTFR, setLTFR] = useState(true);
  const [burger, setBurger] = useState(true);
  const blur = () => {
    setLTFR(!LTFR);
    console.log(LTFR);
  };
  const burgerActive = ()=>{
    setBurger(!burger)
  }
  return (
    <div className="mainHeader">
        <header>
          
          <div className="logo">
            <h1>KAYA</h1>
          </div>
          <ul className="headerList">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Albums</a>
            </li>
            <li onClick={blur} >
              <a href="#" className="drop">LTFR </a>
            </li>
          </ul>
          <div className="user">
          <span className='Login'></span>
          <span className='registration'></span>
          </div>
          <div className="burgerMenu" onClick={burgerActive}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="mainBurgboard" style={{top:burger ? "" : "0%"}}>
          <ul className="burgerBoard "  >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Albums</a>
            </li>
            <li onClick={blur} >
              <a href="#" className="drop">LTFR </a>
            </li>
          </ul>
          </div> 

        </header>
          </div>
  );
}

export default Header;
