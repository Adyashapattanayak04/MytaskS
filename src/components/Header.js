import React from "react";
import logo from '../images/logo.png';



function Header () {
    return (
       <div className="header">
          <img src={logo} alt="logo"  width='70' height='50' className="logo" />
          <h1 className="heading">Todozz</h1> 

       </div>
    );
}

export default Header;