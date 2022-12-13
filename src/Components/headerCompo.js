import React from "react";
import { Button } from "react-bootstrap";

import bgSectionImg from "../assets/images/Rectangle 143.png";
import downloadImg from "../assets/images/download.png";
import playImg from "../assets/images/Play.png";
const Header = () => {
  return (
    <>
      <header className="position-relative w-100">
        <img
          className="w-100 total-header"
          style={{ opacity: "20%" }}
          src={bgSectionImg}
          alt="bg section"
        />
        <div className=" d-flex flex-column justify-content-center contains position-absolute">
          <h1 className=" txt-header " id="home">
            Rest assured of the workflow
          </h1>
          <h5 className="paragraph  mx-auto">
            Zari Falcon is the most important app in the world of sales
            Therefore, we are interested in developing the feature of designing
            itineraries because of its utmost importance in raising the sales
            efficiency in the company.
          </h5>
          <div className="  d-flex justify-content-center mx-auto">
            <Button className="get-app-btn d-flex justify-content-center align-items-center  btns">
              <img alt="get app" src={downloadImg} />
              <span className="mx-1">Get App</span>
            </Button>
            <Button className="player-btn d-flex justify-content-center align-items-center  btns">
              <img alt="play icon " src={playImg} />
              <span className="mx-1">Watch Video</span>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
