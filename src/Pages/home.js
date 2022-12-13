import React from "react";
import Header from "../Components/headerCompo";
import Feature from "../Components/featureCompo";
import OurApp from "../Components/ourAppCompo";
import { Plans } from "../Components/plansCompo";

const Home = () => {
  return (
    <>
      <Header />
      <Feature />
      <OurApp />
      <Plans />
    </>
  );
};

export default Home;
