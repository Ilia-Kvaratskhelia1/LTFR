import "./Header.css";
import  { useState } from "react";
import { motion } from "framer-motion"

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
        <header >
       
          <motion.div  className="logo"
          initial={{x:-100 }}
          animate={{x:0 }}
          transition={{duration:2,delay:1}}
          >
            <h1>KAYA</h1>
          </motion.div>
          <motion.ul className="headerList"
          initial={{y:-100 }}
          animate={{y:0 }}
          transition={{duration:1,delay:1}}
          >
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
          </motion.ul>
          <motion.div className="user"
             initial={{x:100 }}
             animate={{x:0 }}
             transition={{duration:1,delay:1}}
          >
          <span className='Login'></span>
          <span className='registration'></span>
          </motion.div>
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
