import React, { useState } from "react";
import { Navbar, Container, FormControl, Nav } from "react-bootstrap";
import useDarkMode from "./DarkModeBtn";
import CartItem from "../Cart/CartItem";
import { motion } from "framer-motion";

const NavBarLogin = () => {
  const [, toggleDarkMode, isLogo] = useDarkMode();
    const [hovered, setHovered] = useState(false);
  
  return (
    
    <Navbar
      className="sticky-top ps-0  ps-lg-5 "
      expand="sm"
    >
      <Container>
        <Navbar.Brand style={{ maxWidth: "120px" }}>
  <a href="/">
    <img src={isLogo} alt="Logo" className="logo"  />
  </a>
</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
  <div className="d-flex w-100 justify-content-between align-items-center">
    {/* Center: Search */}
    <div className="flex-grow-1 d-flex justify-content-center">
    <FormControl
  type="search"
  placeholder="Search..."
  className="text-center cor search mx-2 mx-md-5 w-75 w-md-50"
  aria-label="Search"
/>

    </div>

    {/* Right: Nav Items */}
    <Nav className="d-flex flex-row align-items-center">
      <Nav.Link href="/login" className="nav-text d-flex align-items-center mx-2">
        <i className="fa-solid fa-user fs-5 mx-1"></i>
       
      </Nav.Link>

      <Nav.Link  onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)} href="/Cart" className="nav-text d-flex align-items-center mx-2">

       <div className="position-relative">
  <i className="fa-solid fa-cart-shopping fs-5 mx-1 d-flex"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info cor">99</span>
</div>
{hovered ? <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    > <div style={{ right:"1%" , top:"40%"}} className="position-absolute">  <CartItem/></div> </motion.div> : <div></div>}
             </Nav.Link>

      <Nav.Link className="nav-text d-flex align-items-center mx-2">
        <i
          onClick={toggleDarkMode}
          className="fa-solid fa-circle-half-stroke fs-4"
        ></i>
      </Nav.Link>
    </Nav>
  </div>
</Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
