import React, {Component} from "react";
import Header from "../common/Header";
import image from "../assets/img/header-bg.jpg"

// Re-usable components
import Service from "../common/Service";
import Portfolio from "../common/Portfolio";
import Team from "../common/Team";
import Clients from "../common/Clients";
import Footer from "../common/Footer";
import Timeline from "../common/Timeline";
import ScrollToTop from "../common/ScrollToTop";

class Home extends Component{

    render(){
        return(
            <div>
                <ScrollToTop />
                <Header 
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />

                <Service />
                <Portfolio />
                <Timeline />
                <Team />
                <Clients />
                <Footer />
            </div>
        )
    }
}

export default Home;