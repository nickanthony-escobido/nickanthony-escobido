import { Button, Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import DevNick from "../assets/images/abtme.png";
import "./About.css";
import { Download } from "react-bootstrap-icons";

function About() {
  return (
    <>
      <NavigationBar />
      <Container className="aboutContent">
        <Row>
          <Col>
            <img src={DevNick} className="abtmeImg" alt="Me" />
          </Col>
          <Col className="abtmeInfo">
            <h1>
              I&rsquo;m <span>Nick Anthony Escobido</span>
            </h1>
            <h5>FullStack Web Development | KodeGo Graduate</h5>
            <h4>
              As a recent graduate in Web Development, I am excited to apply my
              skills and knowledge to create innovative and impactful digital
              experiences. With a solid foundation in HTML, CSS, JavaScript, and
              experience in modern web development frameworks, I am confident in
              my ability to contribute to a team&rsquo;s success. My passion for
              coding and eagerness to learn new technologies and techniques make
              me an ideal candidate for any Junior Web Developer position.
            </h4>
            <h3>
              <span>Email:</span> nickanthony.escobido@gmail.com
            </h3>
            <div className="abtmeBtn">
              <Button>
                Resume <Download />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
