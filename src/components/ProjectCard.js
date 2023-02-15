import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, siteUrl, code }) => {
  return (
    <Col size={12} sm={12} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} className='cardImages' />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br />
          <a href={siteUrl} target="blank" ><button className="viewSite" >View Site</button></a>
          <a href={code} target='blank'><button className="viewCode">View Code</button></a>

        </div>
      </div>
    </Col>
  )
}
