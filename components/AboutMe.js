import Link from "next/link";
import { Media, Badge } from "react-bootstrap";

//About me commponent
const AboutMe = () => (
  <div className="container">
    <h2 className="display-5 text-secondary shadow p-3  bg-white rounded">
      About me
    </h2>
    <Media className="mt-0">
      <img
        width={480}
        height={300}
        className="mr-3 img-thumbnail"
        src="/static/images/Bafana.PNG/"
        alt="my Image"
      />
    </Media>
    <Media>
      <Media.Body>
        <h4>Brief</h4>
        <div className="Lead ">
          <p className="text-info">Technologies/Skills</p>
          <div>
            <Badge variant="primary">React</Badge>{" "}
            <Badge variant="secondary">Next.js</Badge>{" "}
            <Badge variant="success">MongoDB/Mongoose</Badge>{" "}
            <Badge variant="success">Node.js/Express</Badge>{" "}
            <Badge variant="danger">Git</Badge>{" "}
            <Badge variant="warning">Javascript/Jquery</Badge>{" "}
            <Badge variant="info">Agile Development</Badge>{" "}
            <Badge variant="light">Authentication with JWT</Badge>{" "}
            <Badge variant="dark">Github</Badge>
          </div>
        </div>
        <p className="Lead">
          I am Full Stack Web Developer, detail oriented ,organized and a
          problem solver. An ardent follower of technology. I am always
          available to discuss projects that might be of interest to you and may
          need assistance in. These Days I am interested in learning to design, create and deploy
          minimalistic applications with a focus in the user experience.
        </p>
        <Link href="/contact">
          <button type="button" className="btn btn-dark m-2">
            Reach me
          </button>
        </Link>
        <Link href="/static/files/BafanaMahambaCV.pdf">
          <button type="button" className="btn btn-secondary m-2">
            Download CV
          </button>
        </Link>
      </Media.Body>
    </Media>
  </div>
);

export default AboutMe;
