import React from "react";
import { useSelector} from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "./FirebaseSetup";
import { useHistory } from "react-router";
const Header =()=>{const cart = useSelector((state)=> state.allProducts);
  const history = useHistory();
  const signOut = async()=>{
   await auth.signOut();
   localStorage.setItem('token',false);
   history.replace("/");
  }
  const [cartCount,setCartCount] = useState(0);

   useEffect(() => {
     let count =0;
     cart.cart.forEach(element => {
       count+=element.qty;
     });
     setCartCount(count);
   }, [cart,cartCount])
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">FootStyle</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
              <li className="nav-item">
                <Link to="/" style={{textDecoration:'none',color:'white'}}>Products</Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Link
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Link</a>
              </li> */}
            </ul>
            <Link to="/cart" style={{textDecoration:'none',color:'white'}}>
        <h5>Cart : {cartCount} </h5>
        
        </Link>
        <button  onClick={() => signOut()} style={{marginLeft:"20px"}} className="btn btn-primary">Signout</button>
          </div>
         
        </div>
      
      </nav>
    )
}

export default Header;