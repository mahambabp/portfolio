import emailjs from "emailjs-com";
import React from "react";
import { Container, Row, Col, Card, Form,Button } from "react-bootstrap";
import Link from "next/link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MapIcon from "@material-ui/icons/Map";
import PhoneIcon from "@material-ui/icons/Phone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rdc3ieh",
        "template_nptaplg",
        e.target,
        "user_Y6HOZ5ocX07AQp4FJcSLP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="container-fluid">
      <h2 className="display-5 text-secondary shadow p-3  bg-secondary rounded">
        Contact Me
      </h2>
      <Container>
        <Row>
          <Col sm={6}>
            <div className="container center ">
              <Form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                  <div className="col-12 form-group mx-auto">
                    <h4 className="text-center">Mail Me</h4>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  <div className="col-12 form-group pt-2 mx-auto">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                  <div className="col-12 form-group pt-2 mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>
                  <div className="col-12 form-group pt-2 mx-auto">
                    <textarea
                      className="form-control"
                      id=""
                      cols="30"
                      rows="8"
                      placeholder="Your message"
                      name="message"
                    ></textarea>
                  
                      <Button
                        type="submit"
                        variant="success"
                        className="mt-2"
                      >Send Message</Button>

                  </div>
                </div>
              </Form>
            </div>
          </Col>

          <Col sm={6}>
            <div className="row pt-5 mx-auto">
              <div className="col-12 form-group mx-auto ">
                <h4 className="text-center ">Address</h4>
                <Card style={{ width: "23rem", marginLeft: "50px" }}>
                  <Card.Body>
                    <Card.Text>
                      <span>
                        <MapIcon className="m-2" />
                        Honeydew,Johannesburg,ZAR
                      </span>
                      <br />
                      <span>
                        <PhoneIcon className="m-2" />
                        +27 74 916 2239
                      </span>
                      <br />
                      <span>
                        <AlternateEmailIcon className="m-2" />
                        mahambabp@gmail.com
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "23rem ", marginLeft: "50px" }}
                  className="mt-5"
                >
                  <Card.Body>
                    <Card.Title>
                      <h4>Let's Chat</h4>
                    </Card.Title>
                    <Card.Text>
                      <Link href="https://github.com/mahambabp/">
                        <GitHubIcon />
                      </Link>
                      <Link href="https://www.linkedin.com/in/bafana-mahamba-5858a3156/">
                        <LinkedInIcon />
                      </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
