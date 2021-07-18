import "bootstrap/dist/css/bootstrap.min.css"
import * as React from "react"
import { Link } from "gatsby"
import { Container, Card, Button, Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <Container>
      <h2 className="title-text  ">
        {" "}
        When it comes to work, <br /> my motto is “Simple is better"{" "}
        <span className="smile">&#10024;</span>
      </h2>
      <Row>
        <Col lg={6}>
          <Link to="/doably">
            <Card>
              <StaticImage
                src="../images/doably.png"
                width={548}
                height={424}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
              <Card.Body>
                <Card.Title className="text-center">Doably</Card.Title>
                <Card.Text className="text-center">
                  Tool for managing personal and business life
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col lg={6}>
          <Link to="/specwriter">
            <Card>
              <StaticImage
                src="../images/spec-writer.png"
                width={548}
                height={424}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
              <Card.Body>
                <Card.Title className="text-center">SpecWriter</Card.Title>
                <Card.Text className="text-center">
                  Specification tool for desktop, web, mobile and API software
                  products
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={6}>
          <Link to="/focalpoint">
            <Card>
              <StaticImage
                src="../images/focal-point.png"
                width={548}
                height={424}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
              <Card.Body>
                <Card.Title className="text-center">Focal Point</Card.Title>
                <Card.Text className="text-center">
                  Tool for procurement management
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={6}>
          <Link to="/mvp">
            <Card>
              <StaticImage
                src="../images/mvp.png"
                width={548}
                height={424}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
              <Card.Body>
                <Card.Title className="text-center">MVP Now</Card.Title>
                <Card.Text className="text-center">No code platform</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default SecondPage
