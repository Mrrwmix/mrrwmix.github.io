import "bootstrap/dist/css/bootstrap.min.css";

import AboutMe from "./components/AboutMe";
import { Container } from "react-bootstrap";
import Intro from "./components/Intro";
import SiteNav from "./components/SiteNav";

function App() {
  return (
    <Container fluid className="bg-dark text-light">
      <SiteNav />
      <Intro />
      <AboutMe />
    </Container>
  );
}

export default App;
