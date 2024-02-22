import Header from "../components/header/navdropdown";
import Footer from "../components/footer/footer";
import Detail  from "../components/detail/detail";

const Product = () => {
  return (
    <>
      <Header />
      <div className="detail">
        <Detail/>
      </div>
      <Footer />
    </>
  );
};

export default Product