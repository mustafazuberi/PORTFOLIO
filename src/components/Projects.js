import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "SMIT Discount Store",
      description: "This web application on React.js allows users to order products and view their orders in the profile section. Users can also update their full name, as well as view the status of their orders (pending, delivered, rejected) in their profile. Admins can add categories, products, and change the status of orders.",
      imgUrl: "https://imgtr.ee/images/2023/02/15/OIjcA.png",
      siteUrl: "https://smit-discount-store-mrz.netlify.app/",
      code: "https://github.com/MustafaRazaZuberi/SMIT-discount-store-Final-Hackaton"
    },
    {
      title: "Foodpanda Clone",
      description: "This is web-app on React.js ,As a user, you can order food from any restaurant and view your order status in the cart. To place an order, your current location must be accessible. As a restaurant, you can update your restaurant info and add/edit/delete items. You can also view available orders in the cart and accept/reject orders.",
      imgUrl: "https://i.ibb.co/fnS3hbn/food-Panda-Clone2.png",
      siteUrl: "https://foodpanda-clone-mrzuberi.netlify.app/",
      code: "https://github.com/MustafaRazaZuberi/foodpanda-clone-"
    },
    {
      title: "DARAZ Clone",
      description: "Utilizing the latest technologies such as MongoDB, React.js, Express.js, and Node.js, this platform provides an intuitive and user-friendly interface that simplifies the process of setting up an online store, creating product listings, and managing orders. With Daraz Clone, users can easily create their own virtual store and start selling products in no time.",
      imgUrl: "https://imgtr.ee/images/2023/02/15/OIP92.png",
      siteUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7031321133127806976/",
      code: "https://github.com/MustafaRazaZuberi/DARAZ-Clone-MERN"
    },
    {
      title: "TURO Landing Page",
      description: "I developed this landing page using REACTJS functional components with a responsive design, utilizing UI libraries such as Ant Design and Material UI.This project allowed me to further develop my skills in web design and development",
      imgUrl: "https://imgtr.ee/images/2023/02/15/OIzKz.png",
      siteUrl: "https://turo-mrzuberi-clone.netlify.app/",
      code: "https://github.com/MustafaRazaZuberi/Turo-Landing-Page"
    },
    {
      title: "WHATSAPP Clone",
      description: "Chat App developed using HTML, CSS, JavaScript, and Firebase, creating a WhatsApp-like interface with responsive design, Firebase-based chat functionality, image sending, and Emoji support.",
      imgUrl: "https://imgtr.ee/images/2023/02/15/OIHIx.png",
      siteUrl: "https://chatapp-whatsapp-mustafa.netlify.app/",
      code: "https://github.com/MustafaRazaZuberi/chat-app-whatsapp-JS"
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Welcome to my portfolio project section! Here you can find some of the projects I have worked on in the past.  I hope you enjoy exploring my portfolio projects!I developed all these projects using a range of technologies including HTML, CSS, Bootstrap, Firebase,Javascript, React.js, Node.js, Express.js, MongoDB and some other libraries.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}

                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
