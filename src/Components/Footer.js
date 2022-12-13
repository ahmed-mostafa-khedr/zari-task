import React, { useState, useEffect } from "react";
import imgFooter from "../assets/images/footerLogo.png";
import facebookImg from "../assets/images/facebook icon.png";
import twiterImg from "../assets/images/Twitter icon.png";
import instgramImg from "../assets/images/Instagram icon.png";
import linkedInImg from "../assets/images/Linkedin icon.png";
import phone from "../assets/images/Phone icon.png";
import whats from "../assets/images/Whatsapp icon.png";
import site from "../assets/images/Website icon.png";
import email from "../assets/images/Email icon.png";
import { Container, Nav } from "react-bootstrap";

const Footer = () => {
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
      <footer
        id="footer"
        className="footer  main-bg position-relative"
        style={{ marginTop: "100px" }}
      >
        <Container>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="logo-footer">
                <div className="cont-imgFooter foot">
                  <img src={imgFooter} alt="zari logo" className="imgFooter" />
                </div>
                <div className="icons-footer d-flex align-items-center ">
                  <img
                    src={facebookImg}
                    alt="zari logo"
                    className="facebookImg"
                    style={{ margin: "0 6px 0 0" }}
                  />
                  <img
                    src={twiterImg}
                    alt="zari logo"
                    className="twiterImg"
                    style={{ margin: "0 6px" }}
                  />
                  <img
                    src={instgramImg}
                    alt="zari logo"
                    className="instgramImg"
                    style={{ margin: "0 6px" }}
                  />
                  <img
                    src={linkedInImg}
                    alt="zari logo"
                    className="linkedInImg"
                    style={{ margin: "0 0 0 6px" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className=" navigate-cont">
                <h5 className=" ">Navigate</h5>
                <div
                  className="   justify-content-center flex-column"
                  style={{ marginTop: "16px" }}
                >
                  <li className="nav-item " htmlFor="#home">
                    <a
                      aria-current="page"
                      href="#home"
                      className={` 
                    {
                      activeLink === "home"
                      ? "active navber-link"
                      : "navbar-link"
                    }`}
                      onClick={() => onUpdateActiveLink("home")}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item " htmlFor="#features">
                    {" "}
                    <a
                      href="#features"
                      className={
                        activeLink === "features"
                          ? "active navber-link"
                          : "navbar-link "
                      }
                      onClick={() => onUpdateActiveLink("features")}
                    >
                      Features
                    </a>
                  </li>
                  <li className="nav-item " htmlFor="#ourapp">
                    {" "}
                    <a
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
                    </a>
                  </li>
                  <li className=" nav-item " htmlFor="#plans">
                    <a
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
                    </a>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className=" nav-contact">
                <h5 className=" contact">Contact Us</h5>
                <div
                  className="  d-flex flex-column"
                  style={{ marginTop: "16px" }}
                >
                  <li className=" d-flex justify-content-start align-items-center ">
                    <img src={phone} alt="phone" />
                    <p className="my-auto">+966 92 002 4403 </p>
                  </li>
                  <li className=" d-flex justify-content-start align-items-center ">
                    <img src={whats} alt="phone" />
                    <p className="my-auto">+966 56 677 0235</p>
                  </li>
                  <li className=" d-flex justify-content-start align-items-center ">
                    <img src={site} alt="phone" className="site " />
                    <p className="my-auto">https://zariapps.com/</p>
                  </li>
                  <li className=" d-flex justify-content-start align-items-center ">
                    <img src={email} alt="phone" />
                    <p className="my-auto">Sales@aznetsul.com</p>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
