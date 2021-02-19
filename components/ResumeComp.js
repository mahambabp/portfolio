
import { Accordion, Card, Button, Badge } from "react-bootstrap"

//CV component 
const ResumeComp = () => (
  <div className="container ">
    <h2 className="display-5 text-dark shadow p-3  bg-white rounded">Resume</h2>
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            PROFESSIONAL SUMMARY
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="container">
              To establish myself in a rewarding position which offers
              fulfilling career path in which my active participation in the
              decision-making process of the organisation is meaningful and
              leads to commercial success.
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            SKILLS
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <ul className="list-group">
              <Badge variant="info">HTML,CSS and BOOTSTRAP</Badge>
              <li className="list-group-item">
                Css-Grid, Bootstrap, Responsive Development
              </li>
              <Badge variant="warning">Javascript/Jquery</Badge>
              <li className="list-group-item">
                Knowledge of vanilla js and various frameworks/Libraries
              </li>
              <Badge variant="success">Node.js/Express</Badge>
              <li className="list-group-item">
                Use for both frontend/Backend development
              </li>
              <Badge variant="success">MongoDB/Mongoose</Badge>
              <li className="list-group-item">Develop NoSQL database</li>
              <Badge variant="light">Authentication with JWT</Badge>
              <li className="list-group-item">For user authentication</li>
              <Badge variant="danger">Git</Badge>{" "}
              <Badge variant="dark">Github</Badge>
              <li className="list-group-item">Version Control</li>
              <Badge variant="primary">React</Badge>{" "}
              <Badge variant="secondary">Next.js</Badge>{" "}
              <li className="list-group-item">
                Libraries/Framework for Frontend Development
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            WORK HISTORY
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <ul className="list-group">
              <li className="list-group-item">
                Contract and Commercials Officer-
                <em>AYO Technology Solutions</em> -2018-2020
              </li>
              <li className="list-group-item">
                Solutions Administrator- <em>TrillCom Pty Ltd </em>-2018-2018
              </li>
              <li className="list-group-item">
                Administrative Clerk- <em>Aurecon </em> -2017-2017
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            EDUCATION
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <h4>Certificates</h4>
            <ul className="list-group">
              <li className="list-group-item">
                Full Stack Web Development - <em>HyperionDev</em>-2020-Current
              </li>
              <li className="list-group-item">
                Project Management Fundamentals -{" "}
                <em>The Learning Organisation</em>-2017-2018
              </li>
              <li className="list-group-item">
                ICT End User Computing -<em>The Learning Organisation</em>
                -2018-2019
              </li>
              <h4>Degree</h4>
              <li className="list-group-item">
                BA(Organisational Psychology and Linguistics) -<em>WITS</em>
                -2014-2017
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
);

export default ResumeComp;
