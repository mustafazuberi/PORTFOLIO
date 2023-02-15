import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 className="NabarName">&lt;Mustafa Zuberi/&gt;</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end p-5">
        


            <div className="social-icon">
              <a href="https://github.com/MustafaRazaZuberi?tab=repositories/" className="githubA" target={'blank'}><GitHubIcon className="githubIcon" /></a>
              <a href="https://www.linkedin.com/in/mustafa-zuberi-475334231/" target={'blank'}><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/mustafa.zuberi.716" target={'blank'}><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/mustafa.raza.zuberi._/" target={'blank'}><img src={navIcon3} alt="" /></a>
              <a style={{ cursor: "pointer" }} target={'blank'} href="mailto:mustafazuberi986@gmail.com" className="githubA"><EmailIcon className="githubIcon" /></a>

            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
