import Header from "../components/header/navdropdown";
import Footer from "../components/footer/footer";
import Sale from "../components/sale/sale";


const Selling = () => {
    
    return (
      <>
        <Header />
        <div className="selling">
          <Sale />
        </div>
        <Footer />
      </>
    )
  };

  export default Selling;