//Import the Link API to support client-side navigation
import Link from "next/link";
import Layout from "../components/MyLayout";
import { Jumbotron, Container, Button, Media } from "react-bootstrap";
import InfoIcon from '@material-ui/icons/Info';


//Landing Page
const Index = () => (
  <Layout>
    <Jumbotron fluid>
      <Container>
        <div className="container text-center">
          <h2 className="text-dark display-5">Hello, I'm Bafana Mahamba,I am a Full Stack Web Developer, Living in Johannesburg, ZA
		  </h2>
          <small className="text-muted">A MERN stack Developer</small>
        </div>
      </Container>
      <div className="container text-center">
        <Link href="/about">
          <Button className=" btn-sm" variant="dark">
			<InfoIcon />
          </Button>
        </Link>
      </div>
    </Jumbotron>
  </Layout>
);

export default Index;
