import React, { Component } from "react";
import Header from "../common/Header";
import image from "../assets/img/about.jpg"

// Re-usable components
import Footer from "../common/Footer";
import Timeline from "../common/Timeline";
import ScrollToTop from "../common/ScrollToTop";

class About extends Component {
  render() {
    return (
      <div>
        <ScrollToTop />
        <Header
          title="About Us"
          subtitle="IT'S REALLY A GREAT STORY"
          showButton={false}
          image={image}
        />
        <Timeline />
        <Footer />
      </div>
    );
  }
}

export default About;
