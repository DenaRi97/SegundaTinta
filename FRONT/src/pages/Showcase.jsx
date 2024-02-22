import Header from "../components/header/navdropdown";
import Footer from "../components/footer/footer";
import Gallery from "../components/gallery/showbooks";
import '../components/home/home.css';

const Showcase = () => {
    
    return (
      <>
        <Header />
        <div className="home">
          <Gallery />
        </div>

        <Footer />
      </>
    )
  };

  export default Showcase;