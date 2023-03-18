import React, { useState } from "react";
import "./Header.css";
function Header() {
  const [LTFR, setLTFR] = useState(true);
  const blur = () => {
    setLTFR(!LTFR);
    console.log(LTFR);
  };
  return (
    <div className="mainHeader">
      {LTFR ? (
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
              <a href="#">Album</a>
            </li>
            <li onClick={blur}>
              <a href="#">LTFR </a>
            </li>
          </ul>
          <div className="user">
          <span className='Login'></span>
          <span className='registration'></span>
          </div>
        </header>
      ) : (
        <header>
          <div className="logo">
            <h1>KAYA</h1>
          </div>
          <ul className="headerList">
            <li>
              <a href="#">Luna997</a>
            </li>
            <li>
              <a href="#">TurboHikari</a>
            </li>
            <li>
              <a href="#">Feway</a>
            </li>
            <li>
              <a href="#">Dila</a>
            </li>
            <li onClick={blur} style={{color:"red"}}>
              <a href="#">LTFR </a>
            </li>
          </ul>
          <div className="user">
          <span className='Login'></span>
          <span className='registration'></span>
          </div>
        </header>
      )}
    </div>
  );
}

export default Header;
