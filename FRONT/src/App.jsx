import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Showcase from './pages/Showcase';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Selling from './pages/Selling';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/gallery" element={<Showcase/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/sale" element={<Selling/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
