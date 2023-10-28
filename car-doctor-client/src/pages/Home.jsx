import React from "react";
import Banner from "../layout/Banner";
import AboutUs from "../layout/AboutUs";
import Service from "../layout/Service";
import Contact from "../layout/Contact";
import Team from "../layout/Team";
import WhyChoose from "../layout/WhyChoose";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Service></Service>
      <Contact></Contact>
      <Team></Team>
      <WhyChoose></WhyChoose>
    </>
  );
};

export default Home;
