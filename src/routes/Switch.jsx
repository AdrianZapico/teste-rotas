import {  Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Code from "../pages/Code";
import Musicas from "../pages/Musicas";
import Contato from "../pages/Contato";
import Bonus from "../pages/Bonus";
import NotFound from "../pages/NotFound"


export default function Switch() {

    return(
        <Routes>
            <Route>
                <Route path="/"element={<Home />} />
                <Route path="home"element={<Home />} />
                <Route path="code" element={<Code />} />
                <Route path="musicas" element={<Musicas />} />
                <Route path="contato" element={<Contato />} />
                <Route path="bonus" element={<Bonus />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )

}

