/* eslint-disable react/no-unescaped-entities */
import "bootstrap/dist/css/bootstrap.min.css"
import * as React from "react"
import { Link } from "gatsby"
import { Container, Card, Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <Container>
      <h2 className="title-text">
        {" "}
        When it comes to work, <br /> my motto is “Simple is better"{" "}
        <span className="smile">&#10024;</span>
      </h2>
      <Row>
        <Col lg={6}>
          <Link className="card-link" to="/doably">
            <Card
              className="card-hover"
              data-sal="slide-up"
              data-sal-duration="600"
              data-sal-easing="ease"
            >
              <StaticImage
                src="../images/doably.png"
                width={548}
                height={424}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{}}
              />
              <Card.Body>
                <Card.Title className="text-center darken">Doably</Card.Title>
                <Card.Text className="text-center subtitle-color">
                  Tool for managing personal and business life
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col lg={6}>
          <Link className="card-link" to="/specwriter">
            <Card
              className="card-hover"
              data-sal="slide-up"
              data-sal-duration="900"
              data-sal-easing="ease"
            >
              <StaticImage
                src="../images/spec-writer.png"
                width={548}
                height={424}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
              />
              <Card.Body>
                <Card.Title className="text-center darken">
                  SpecWriter
                </Card.Title>
                <Card.Text className="text-center subtitle-color">
                  Specification tool for desktop, web, mobile and API software
                  products
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={6}>
          <Link className="card-link" to="/focalpoint">
            <Card
              className="card-hover"
              data-sal="slide-up"
              data-sal-duration="600"
              data-sal-easing="ease"
            >
              <StaticImage
                src="../images/focal-point.png"
                width={548}
                height={424}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
              />
              <Card.Body>
                <Card.Title className="text-center darken">
                  Focal Point
                </Card.Title>
                <Card.Text className="text-center subtitle-color">
                  Tool for procurement management
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={6}>
          <Link className="card-link" to="/smartcart">
            <Card
              className="card-hover"
              data-sal="slide-up"
              data-sal-duration="900"
              data-sal-easing="ease"
            >
              <StaticImage
                src="../images/smart-cart-work.png"
                width={548}
                height={424}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
              />
              <Card.Body>
                <Card.Title className="text-center darken">
                  Smart Cart
                </Card.Title>
                <Card.Text className="text-center subtitle-color">
                  Tool that helps users to choose and buy healthy food
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={6}>
          <Link className="card-link" to="/mvp">
            <Card
              className="card-hover"
              data-sal="slide-up"
              data-sal-duration="600"
              data-sal-easing="ease"
            >
              <StaticImage
                src="../images/mvp.png"
                width={548}
                height={424}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
              />
              <Card.Body>
                <Card.Title className="text-center darken">MVP Now</Card.Title>
                <Card.Text className="text-center subtitle-color">
                  No code platform
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default SecondPage
