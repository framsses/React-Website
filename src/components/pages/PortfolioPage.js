import React, {Component} from "react";
import image from "../assets/img/projects.jpg"

// Re-usable pages
import Header from "../common/Header";
import Portfolio from "../common/Portfolio"
import Footer from "../common/Footer";
import ScrollToTop from "../common/ScrollToTop";

class PortfolioPage extends Component{
    render(){
        return(
            <div>
                <ScrollToTop />
                <Header 
                title="Portfolio"
                subtitle="See Our Projects"
                showButton={false}
                image={image}
                />
                <Portfolio />
                <Footer />
            </div>
        )
    }
}

export default PortfolioPage;