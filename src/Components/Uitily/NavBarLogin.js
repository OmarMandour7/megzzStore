import React from "react";
import { Navbar, Container, FormControl, Nav } from "react-bootstrap";
import useDarkMode from "./DarkModeBtn";
const NavBarLogin = () => {
  const [, toggleDarkMode, isLogo] = useDarkMode();
  
  return (
    <Navbar
      className=" sticky-top"
      
      expand="sm"
    >
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={isLogo} alt="Logo" className="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="Search..."
            className="me-2 w-100 text-center cor search"
            aria-label="Search"
          />
          <Nav className="me-auto">
             
            <Nav.Link
              href="/login"
              className="nav-text merienda d-flex mt-3 justify-content-center"
            >
              <div className="d-flex flex-row ">
                <i class="fa-solid fa-user fs-5 mx-1 d-flex"></i>
                <p style={{ color: "var(--text-color)" }} className="d-flex">Login</p>
              </div>
            </Nav.Link>
            <Nav.Link
              href="/Cart"
              className="nav-text d-flex mt-3 justify-content-center"
            >
              <div className="d-flex flex-row ">
              <i class="fa-solid fa-cart-shopping fs-5 mx-1 d-flex"></i>
                <p style={{ color: "var(--text-color)" }}  className="d-flex">Cart</p>
              </div>
            </Nav.Link>
            <Nav.Link
             
              className="nav-text d-flex mt-3 justify-content-center"
            >
             <div className="d-flex flex-row ">
             <i onClick={toggleDarkMode} class="fa-solid fa-circle-half-stroke fs-4 mx-1"></i>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
