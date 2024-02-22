import Header from "../components/header/navdropdown";
import AboutUs from "../components/aboutus/about";
import Home from "../components/home/home";
import Footer from "../components/footer/footer";
import Form from "../components/form/form";

const Contact = () => {
    return (
        <>
        <Header />
        <div className="contact">
         <Form />
        </div>
        <Footer />
        </>
    );
};

export default Contact;
