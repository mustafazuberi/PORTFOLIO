import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

const Result = () => {
  return (
    <p>Your message has been successfully sent.I will contact you soon</p>
  )
}



export const Contact = () => {

  const [result, setResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9trer5j', 'template_rtte3el', e.target, 'vlKtXiDmDq-v0xClP')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
    setResult(true)

  };
  setTimeout(() => {
    setResult(false)
  }, 4000);


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} className="px-1">
                        <input type="text" placeholder="fullname" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="lastname" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" placeholder="Email Address" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" placeholder="Phone No." />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" placeholder="Message"></textarea>
                        <button type="submit"><span>Send</span></button>
                      </Col>

                    </Row>
                  </form>
                  <div className="result my-2">{result ? <Result /> : null}</div>
                </div>}

            </TrackVisibility>

          </Col>

        </Row>

      </Container>

      <div className="ext">
        <h1> Reach Out to me!</h1>
        <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
        <div className="social-icon">
          <a href="https://github.com/MustafaRazaZuberi?tab=repositories/" className="githubA" target={'blank'}><GitHubIcon className="githubIcon" /></a>
          <a href="https://www.linkedin.com/in/mustafa-zuberi-475334231/" target={'blank'}><img src={navIcon1} alt="" /></a>
          <a href="https://www.facebook.com/mustafa.zuberi.716" target={'blank'}><img src={navIcon2} alt="" /></a>
          <a href="https://www.instagram.com/mustafa.raza.zuberi._/" target={'blank'}><img src={navIcon3} alt="" /></a>
          <a style={{ cursor: "pointer" }} target={'blank'} href="mailto:mustafazuberi986@gmail.com" className="githubA"><EmailIcon className="githubIcon" /></a>

        </div>
      </div>
    </section>

  )
}
