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
      <div className="col align-self-center bg-dark m-2">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Minesweeper</Card.Title>
            <Card.Text>Minesweeper, built with react.</Card.Text>
            <Link href="https://github.com/mahambabp/minesweeper-react.git">
              <Button variant="dark">Github-source code</Button>
            </Link>
            <Link href="https://evening-peak-00237.herokuapp.com/">
              <Button className="m-2" variant="success">
                Deployed site
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col align-self-center bg-secondary m-2">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Shopping Cart</Card.Title>
            <Card.Text>Shopping cart buit using javascript</Card.Text>
            <Link href="https://github.com/mahambabp/Javascript-Shopping-Cart">
              <Button variant="secondary ">Github-Source</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
    <div className="row">
      <div className="col align-self-center bg-dark m-2">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>ITunes Search Api</Card.Title>
            <Card.Text>
              An application that interfaces with the iTunes Searc API:.
            </Card.Text>
            <Link href="https://github.com/mahambabp/iTunes-Search-Api">
              <Button variant="dark">Github-source code</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col align-self-center bg-secondary m-2">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>HTML website</Card.Title>
            <Card.Text>Shopping cart buit using javascript</Card.Text>
            <Link href="https://github.com/mahambabp/HTMLsite">
              <Button variant="secondary ">Github-Source</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col align-self-center bg-secondary m-2">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>StarWars API</Card.Title>
            <Card.Text>Star wars API, Built using Next.js</Card.Text>
            <Link href="https://github.com/mahambabp/starWarsApp.git">
              <Button variant="secondary ">Github-Source</Button>
            </Link>
            <Link href="http://star-wars-api-git-master.mahambabp.vercel.app/">
              <Button className="m-2" variant="success">
                Deployed site
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
);

export default MyProjects;
