//Import the Link API to support client-side navigation
import Link from "next/link";
import { Card, Button } from "react-bootstrap";

//Projects component
const MyProjects = () => (
  <div className="container-fluid">
    <h2 className="display-5 text-success shadow p-3  bg-light rounded">
      Projects
    </h2>

    <div className="row">
      <div className="col  m-3">
        <Card border="success" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Minesweeper</Card.Title>
            <Card.Text>
              Minesweeper Game, built with <em>React</em>.
            </Card.Text>
            <Link href="https://github.com/mahambabp/minesweeper-react.git">
              <Button variant="dark">Source-Code</Button>
            </Link>
            <Link href="https://evening-peak-00237.herokuapp.com/">
              <Button className="m-2" variant="success">
                Active
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col  m-3">
        <Card border="success" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>StarWars API</Card.Title>
            <Card.Text>
             Website that is created using data retrieved from an API
            </Card.Text>
            <Link href="https://github.com/mahambabp/starWarsApp.git">
              <Button variant="dark">Source-Code</Button>
            </Link>
            <Link href="http://star-wars-api-git-master.mahambabp.vercel.app/">
              <Button className="m-2" variant="success">
                Active
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col  m-3">
        <Card border="success" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Digital-archiving-app</Card.Title>
            <Card.Text>A full-stack digital-archiving-app</Card.Text>
            <Link href="https://github.com/mahambabp/digital-archiving-app.git">
              <Button variant="dark">Source-Code</Button>
            </Link>
            <Link href="https://hungry-newton-463191.netlify.app/">
              <Button className="m-2" variant="success">
                Active
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col  m-3">
        <Card border="success" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>React Weather Api</Card.Title>
            <Card.Text>App that display's the weather in a city of the user’s choice</Card.Text>
            <Link href="https://github.com/mahambabp/reactweather.git">
              <Button variant="dark">Source-Code</Button>
            </Link>
            <Link href="https://dry-eyrie-15864.herokuapp.com/">
              <Button className="m-2" variant="success">
                Active
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col  m-3">
        <Card border="warning" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Shopping Cart</Card.Title>
            <Card.Text>Shopping cart built using <em>Javascript,HTML and CSS</em></Card.Text>
            <Link href="https://github.com/mahambabp/Javascript-Shopping-Cart">
              <Button variant="dark">Source-Code</Button>
            </Link>
            <Link href="#">
              <Button className="m-2" variant="success" disabled>
                active
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col m-3">
        <Card border="warning" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>ITunes Search Api</Card.Title>
            <Card.Text>
              A web application that interfaces with the iTunes
               API
               </Card.Text>
            <Link href="https://github.com/mahambabp/iTunes-Search-Api.git">
              <Button variant="dark">Source-Code</Button>
            </Link>
            <Link href="#">
              <Button className="m-2" variant="success" disabled>
                Active
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col m-3">
        <Card border="warning" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>HTML website</Card.Title>
            <Card.Text>Site built using HTML,CSS and JS</Card.Text>
            <Link href="https://github.com/mahambabp/HTMLsite">
              <Button variant="dark">Source-Code</Button>
            </Link>
            <Link href="#">
              <Button className="m-2" variant="success" disabled>
                Active
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
);

export default MyProjects;
