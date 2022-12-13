import React from "react";
import iphoneImg from "../assets/images/Our app .png";
import appleImg from "../assets/images/apple.png";
import googleImg from "../assets/images/google.png";
import { Container, Button } from "react-bootstrap";

const OurApp = () => {
  return (
    <>
      <section className="py-5" id="ourapp">
        <Container>
          <div className="row d-flex justify-content-center align-items-center gy-5">
            <div className="col-lg-6">
              <div className="our-app">
                <h2 className=" mb-4">Our App</h2>
                <h6 className="mb-4 ">
                  A new application to facilitate the follow-up of the external
                  work team of shipping representatives or external sales
                  personnel, and to measure the production capacity of the
                  individual and the working hours. Zari Falcon enables you to
                  view everything that happens with your employee outside the
                  company during working hours through its various services.
                </h6>

                <button className="btn apple-btn d-flex justify-content-center align-items-center mb-4 ">
                  <img
                    src={appleImg}
                    className="me-3 fa-2x"
                    alt="apple iPhone"
                  />

                  <div className="  text-start ">
                    {" "}
                    <span className="available ">
                      Available on the App Store
                    </span>
                  </div>
                </button>
                <button className="btn  google-btn d-flex justify-content-center align-items-center">
                  <img
                    src={googleImg}
                    className="google-play me-3"
                    alt="google play"
                  />
                  <div className=" text-start">
                    <span className="get-on">Get on the Google Play</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="iphone-imgs ms-auto">
                <img src={iphoneImg} className="" alt="sales app" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurApp;
