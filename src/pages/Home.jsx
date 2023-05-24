import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import Nick from "../assets/images/nick.png";
import { Discord, Facebook, Github, Linkedin } from "react-bootstrap-icons";
import "./Home.css";

function Home() {
  return (
    <>
      <NavigationBar />
      <div className="homeContent">
        <Container>
          <div className="content">
            <Row>
              <Col className="intro">
                <h1>Hello There,</h1>
                <h1>
                  I&rsquo;m <span>Nick Anthony</span>
                </h1>
                <h3>Junior FrontEnd Web Developer</h3>
                <div className="btn-abtme">
                  <Button>About me</Button>
                </div>
                <Nav className="icons">
                  <Nav.Link
                    href="https://www.facebook.com/nickanthony199x"
                    target="_blank"
                  >
                    <Facebook size="40" />
                  </Nav.Link>
                  <Nav.Link
                    href="https://github.com/nickanthony-escobido"
                    target="_blank"
                  >
                    <Github size="40" />
                  </Nav.Link>
                  <Nav.Link
                    href="https://www.linkedin.com/in/nickanthony-escobido/"
                    target="_blank"
                  >
                    <Linkedin size="40" />
                  </Nav.Link>
                  <Nav.Link
                    href="https://discord.com/users/0352"
                    target="_blank"
                  >
                    <Discord size="40" />
                  </Nav.Link>
                </Nav>
              </Col>
              <Col>
                <img src={Nick} className="nickImg" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
