import Link from "next/link";
import { Row,Col, Badge } from "react-bootstrap";

//About me commponent
const AboutMe = () => (
  <div className="container text-justify">
    <h2 className=" display-5 text-dark shadow p-3  bg-secondary rounded ">
      About me
    </h2>
    <Row className="mt-5">
      <Col md="6">
        <img
          width={500}
          height={300}
          className="mr-3 img-thumbnail"
          src="/static/images/Bafana.PNG/"
          alt="my Image"
        />
      </Col>
      <Col md="6">
        <h4 >Brief</h4>
        <div className="Lead ">
          <p className="text-success"><b>Technologies/Skills</b></p>
          <div>
            <Badge variant="info">React</Badge>{" "}
            <Badge variant="primary">Next.js</Badge>{" "}
            <Badge variant="success">MongoDB/Mongoose</Badge>{" "}
            <Badge variant="success">Node.js/Express</Badge>{" "}
            <Badge variant="danger">Git</Badge>{" "}
            <Badge variant="warning">Javascript/Jquery</Badge>{" "}
            <Badge variant="dark">Agile Development</Badge>{" "}
            <Badge variant="info">Authentication with JWT</Badge>{" "}
            <Badge variant="dark">Github</Badge>
            <hr />
          </div>
        </div>
        <p className="Lead text-justify ">
          I am a Full Stack Web Developer, detail-oriented, organized and a
          problem solver. An ardent follower of technology. I am always
          available to discuss projects that might be of interest to you and may
          need assistance in. These Days I am interested in learning to design,
          create and deploy minimalistic applications with a focus in the user
          experience.
        </p>
        <Link href="/contact">
          <button type="button" className="btn btn-dark mr-2 active">
            Reach me
          </button>
        </Link>
        <Link href="/static/files/BafanaMahambaCV.pdf">
          <button type="button" className="btn btn-success mr-2 active">
            Download CV
          </button>
        </Link>
      </Col>
    </Row>
  </div>
);

export default AboutMe;
