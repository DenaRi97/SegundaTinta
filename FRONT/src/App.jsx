import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
// import Header from "./components/header/navdropdown";
import Showcase from './pages/Showcase';
import Product from './pages/Product';
import Contact from './pages/Contact';
// import Footer from "./components/footer/footer"
import Landing from './pages/Landing';
// import Router from './configuration/Router'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/gallery" element={<Showcase/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
