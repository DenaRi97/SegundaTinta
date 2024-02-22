import Header from "../components/header/navdropdown";
import Gallery from "../components/gallery/showbooks";

const Showcase = () => {
    
    return (
      <>
        <Header />
        <div className="home">
          <Gallery />
        </div>

        {/* <Footer /> */}
      </>
    )
  };

  export default Showcase;