//Import the Link API to support client-side navigation
import Link from "next/link";
import { Card, Button } from "react-bootstrap";

//Projects component
const MyProjects = () => (
  <div className="container ">
    <h2 className="display-5 text-secondary shadow p-3  bg-white rounded">
      Projects
    </h2>
    <div className="row">
      <div className="col align-self-center bg-secondary m-3">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Minesweeper</Card.Title>
            <Card.Text>Minesweeper, built with react.</Card.Text>
            <Link href="https://github.com/mahambabp/minesweeper-react.git">
              <Button variant="secondary">Source-Code</Button>
            </Link>
            <Link href="https://evening-peak-00237.herokuapp.com/">
              <Button className="m-2" variant="success">
                Active
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col align-self-center bg-secondary m-3">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>StarWars API</Card.Title>
            <Card.Text>Star wars API, Built using Next.js</Card.Text>
            <Link href="https://github.com/mahambabp/starWarsApp.git">
              <Button variant="secondary ">Source-Code</Button>
            </Link>
            <Link href="http://star-wars-api-git-master.mahambabp.vercel.app/">
              <Button className="m-2" variant="success">
                Active
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col align-self-center bg-secondary m-3">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Shopping Cart</Card.Title>
            <Card.Text>Shopping cart buit using javascript</Card.Text>
            <Link href="https://github.com/mahambabp/Javascript-Shopping-Cart">
              <Button variant="secondary ">Source-Code</Button>
            </Link>
            <Link href="#">
              <Button className="m-2" variant="warning">
                Pending 
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>

    <div className="row">
      <div className="col align-self-center bg-secondary m-3">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>ITunes Search Api</Card.Title>
            <Card.Text>
               iTunes Search API, built with React
            </Card.Text>
            <Link href="#">
              <Button variant="secondary">Source-Code</Button>
            </Link>
            <Link href="#">
              <Button className="m-2" variant="warning">
                Pending
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col align-self-center bg-secondary m-3">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>HTML website</Card.Title>
            <Card.Text>Website built using HTML,CSS and JS</Card.Text>
            <Link href="https://github.com/mahambabp/HTMLsite">
              <Button variant="secondary ">Source-Code</Button>
            </Link>
            <Link href="#">
              <Button className="m-2" variant="warning ">Pending</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      
 
    </div>
  </div>
);

export default MyProjects;
