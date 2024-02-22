import Header from "../components/header/navdropdown";
import AboutUs from "../components/aboutus/about";
import Home from "../components/home/home";


const Landing = () => {
    
    return (
      <>
        <Header />
        <div className="home">
          <Home />
        </div>
        <div className="aboutUs">
          <AboutUs />
        </div>
        {/* <Footer /> */}
      </>
    )
  };

  export default Landing;