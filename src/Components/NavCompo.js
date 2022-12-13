import React, { useState, useEffect } from "react";
import Logo from "../assets/images/navlogo.png";

import { Button, Navbar, Nav, Container } from "react-bootstrap";

const NavBarCompo = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar expand="md" className="  nav-total ">
        <Container className="container-fluid container-xl ">
          <Navbar.Brand href="#" className="navbar-brand">
            <img src={Logo} alt="zari logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-links navbar-nav    d-flex align-items-center">
              <li className="homee  active nav-item" htmlFor="#home">
                <Nav.Link
                  aria-current="page"
                  href="#home"
                  className={` 
                    { active
                      activeLink === "home"
                      ? "active navber-link"
                      : "navbar-link"
                    }`}
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </Nav.Link>
              </li>
              <li className="featuress  nav-item" htmlFor="#features">
                <Nav.Link
                  href="#features"
                  className={
                    activeLink === "features"
                      ? "active navber-link"
                      : "navbar-link "
                  }
                  onClick={() => onUpdateActiveLink("features")}
                >
                  Features
                </Nav.Link>
              </li>
              <li className=" appp nav-item" htmlFor="#ourapp">
                <Nav.Link
                  href="#ourapp"
                  className={
                    activeLink === "ourapp"
                      ? "active navber-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("ourapp")}
                >
                  {" "}
                  Our App
                </Nav.Link>
              </li>
              <li className=" planss nav-item" htmlFor="#plans">
                <Nav.Link
                  href="#plans"
                  className={
                    activeLink === "plans"
                      ? "active navber-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("plans")}
                >
                  {" "}
                  Plans
                </Nav.Link>
              </li>

              <Button className="language ">
                <i className="fa-solid fa-globe "></i>
                <span className="mx-1">En</span>
              </Button>
              <Button className="signup-btn">Sign Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarCompo;
