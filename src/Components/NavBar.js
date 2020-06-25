import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/bobalogo.png';

const NavBar = () => {
    return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src={Logo} style={{height:'75px'}} class="navbar-brand" alt="Boba Logo"></img>

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/">
        <h5  className="nav-link" style={{color:'#577053', fontFamily:"Pacifico"}}>  Thirs-Tea Thursdays 
        <span class="sr-only">(current)</span></h5>
        </Link>
      </li>
      <li className="nav-item">
      <Link to="/menu">
        <a className="nav-link" >Menu</a>
      </Link> 
      </li>


      <li className="nav-item">
      <Link to="/order">
        <a className="nav-link">Order</a>
      </Link> 
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Locations
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <h6 className="dropdown-item" href="#">Irvine</h6>
          <h6 className="dropdown-item" href="#">Costa Mesa</h6>
          <h6 className="dropdown-item" href="#">Los Angeles</h6>
        </div>
      </li>
    </ul>
  </div>
</nav>
    
    
    
    </div>    
    );
}

export default NavBar; 

