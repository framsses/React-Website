import React, { Component } from "react";
import image from "../assets/img/services.jpg";

// Re-usable components
import Header from "../common/Header";
import Service from "../common/Service";
import Footer from "../common/Footer";
import ScrollToTop from "../common/ScrollToTop";

class Services extends Component {
  render() {
    return (
      <div>
        <ScrollToTop />
        <Header
          title="Services"
          subtitle="We provide great value"
          showButton={false}
          image={image}
        />
        <Service />
        <Footer />
      </div>
    );
  }
}

export default Services;
