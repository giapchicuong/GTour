import React, { useEffect } from "react";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import PopularDestinations from "../../components/PopularDestinations/PopularDestinations";
import BestValueTrips from "../../components/BestValueTrips/BestValueTrips";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";

export const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container">
      <Header />
      <Hero />
      <PopularDestinations />
      <BestValueTrips />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
};
export default Home;
