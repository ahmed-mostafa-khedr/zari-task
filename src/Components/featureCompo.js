import React from "react";
import { useState } from "react";
import featureimg from "../assets/images/advantages.png";
import trackingAppImg from "../assets/images/tracking-app.png";
import trackingImg from "../assets/images/tracking.png";
import artboardImg from "../assets/images/artboard.png";
import timeImg from "../assets/images/back-in-time.png";
import iconImg from "../assets/images/icon.png";
import { Container } from "react-bootstrap";

const Feature = () => {
  const [featureItem, setFeatureItem] = useState([
    {
      id: 1,
      img: trackingAppImg,
      description: "Geographical tracking of your employee.",
    },
    {
      id: 2,
      img: timeImg,
      description: "Follow up the time of each visit.",
    },
    {
      id: 3,
      img: trackingImg,
      description: "Verify the completion of the itinerary.",
    },

    {
      id: 4,
      img: iconImg,
      description: "Saving customer data instantly.",
    },
    {
      id: 5,
      img: artboardImg,
      description:
        "Send reports to the employee even when the phone data is cut off.",
    },
  ]);
  return (
    <>
      <section id="features" className="py-5">
        <div className="container">
          <div className="row pt-5 g-5 d-flex justify-content-center align-items-center">
            <div className="col-lg-4">
              <div className="feature-banner mx-auto py-4 text-center">
                <h2 className="w-bold  mb-4 text-white ">Features</h2>
                <img src={featureimg} className="fw-100" alt="features-img" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="cont mx-auto">
                <div className="row gx-5">
                  {featureItem.map((item) => (
                    <div key={item.id} className="col-md-6">
                      <div
                        className="items p-3 mx-auto bg-light"
                        data-aos-duration="500"
                      >
                        <span className="me-3">
                          <img src={item.img} alt="feature" />
                        </span>
                        <h6 className="mb-0 ">{item.description}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
