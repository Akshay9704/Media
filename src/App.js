import Navbar from "../src/Component/navbar";
import Blog from "./Component/blog";
import Footer from "./Component/footer";
import Projects from "./Component/projects";
import About from "./Component/about";
import Services from "./Component/services";

function App() {
  return (
    <>
      <Navbar/>
      <Services/>
      <About/>
      <Projects/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
