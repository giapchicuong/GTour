import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import PopularDestinations from "../../components/PopularDestinations/PopularDestinations";
import BestValueTrips from "../../components/BestValueTrips/BestValueTrips";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";
import {
  NavbarItems,
  BestValueTripsItems,
  PopularDestinationsItems,
  BlogItems,
  TestimonialsItems,
} from "../../dummyData";
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
      <Header navbarItems={NavbarItems} cartBadgeCount={4} />
      <Hero />
      <PopularDestinations
        title="Popular Destinations"
        description="World's best tourist destinations"
        destinations={PopularDestinationsItems}
      />
      <BestValueTrips
        title="Best Value Trips"
        description="Best offers trips from us"
        BestValueTripsItems={BestValueTripsItems}
      />
      <Testimonials
        title="Why Choose Us"
        description="Here are reasons you should plan trip with us"
        testimonialItems={TestimonialsItems}
      />
      <Blog
        title="Articles & Tips"
        description="Explore some of the best tips from around the world"
        blogItems={BlogItems}
      />
      <Footer />
    </div>
  );
};
export default Home;
