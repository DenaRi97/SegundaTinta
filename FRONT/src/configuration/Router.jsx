import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Detail from "../pages/Detail";
import Contact from "../pages/Contact";


function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/gallery" element={<Gallery/>}></Route>
            <Route path="/detail" element={<Detail/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Router