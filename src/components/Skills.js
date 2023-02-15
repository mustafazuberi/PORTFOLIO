import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I am a MERN stack developer with a strong proficiency in React.js. I have experience building complex user interfaces and making sure that the code is optimized for performance and scalability. I also have experience with state management libraries like Redux and React-Router.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Mongodb</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Debugging and problem solving </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
