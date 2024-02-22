import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from "./components/header/navdropdown";
// import Home from './pages/Landing';
import Showcase from './pages/Showcase';
// import Detail from './pages/Detail';
// import Contact from './pages/Contact';
// import Footer from "./components/footer/footer"
// import Router from './configuration/Router'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home/>}></Route> */}
      <Route path="/gallery" element={<Showcase/>}></Route>
      {/* <Route path="/detail" element={<Detail/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route> */}
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
