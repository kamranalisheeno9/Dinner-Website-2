import React from "react";
import { Container } from "react-bootstrap";
import "./HeadNavbar.css";
import Navbar from "./Header";
const HeadNavbar = (props) => {
  const {id, pageName, bgImg } = props;
  return (
    <Container id={id}  fluid  className="header-content">
    <div className="overlay"></div>
      <img className="banner-img" src={bgImg} alt="Snow" style={{width:"100%"}} />
      <div className="top-left">
     <Navbar menuClass="menu-color-change" />
        
      </div>
      <div className="bottom-left">
  {pageName}        
      </div>
     
    </Container>
  
  );
};

export default HeadNavbar;
