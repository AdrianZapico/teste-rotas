
import { BrowserRouter } from "react-router-dom";
import Switch from "./routes/Switch";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";



export default function App() {
 
 
 
  return (
    <>
    
    <BrowserRouter>
      <Header/>
      <Nav>
      </Nav>
      <Switch/>
      <Main/>
      
      <Footer/>
    </BrowserRouter>
    <GlobalStyle/>
    </>
  );
}
