import Header from "../components/header/navdropdown";
import AboutUs from "../components/aboutus/about";
import Home from "../components/home/home";
import Footer from "../components/footer/footer";


const Homepage = () => {
    
    return (
      <>
        <Header />
        <div className="home">
          <Home />
        </div>
        <div className="aboutUs">
          <AboutUs />
        </div>
        <Footer />
      </>
    )
  };

  export default Homepage;