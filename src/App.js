import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import PortfolioPage from "./components/pages/PortfolioPage";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route exact={true} path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />

          <Route path="/portfolio" element={<PortfolioPage />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
