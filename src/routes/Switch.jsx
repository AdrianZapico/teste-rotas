import {  Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound"


export default function Switch() {

    return(
        <Routes>
            <Route>
                <Route path="/"element={<Home />} />
                <Route path="home"element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )

}

