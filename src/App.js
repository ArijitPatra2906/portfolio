import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";



function App() {
  return (
    <>

    <Header />
    <Nav />
    <About />
    <Education />
    <Experience />
    <Services />
    <Portfolio />
    {/*<Testimonial />*/}
    <Contact />
      <Footer />
    </>
  );
}

export default App;
