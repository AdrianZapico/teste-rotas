
import { BrowserRouter } from "react-router-dom";
import Switch from "./routes/Switch";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Main from "./components/Main";


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Switch/>
      <Main/>
      <Footer/>
    </BrowserRouter>
    <GlobalStyle/>
    </>
  );
}
