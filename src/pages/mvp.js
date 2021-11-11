import * as React from "react"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"

const Mvp = () => {
  return (
    <Layout>
      {/* Main Title */}
      <section className="all-project-title">
        <h1 className="paragraph-focalpoint">MVP Now</h1>
        <p className="subtitle-focalpoint">
          No code platform best suited for non-tech startup founders
        </p>
      </section>
      {/* Image FocalPoint */}
      <div className="about-img">
        <StaticImage
          src="../images/mvp-big.jpg"
          width={1140}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      {/* Project overview */}
      <section className="project-overview">
        <h2 className="paragraph-subtitle">Project overview</h2>
        <div>
          <h3 className="title-h3">Overview</h3>
          <p className="paragraph">
            MVP Now is a no code platform. The main goal of this product is to
            help non-tech domain experts build web and mobile apps without
            developers.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Goal</h3>
          <p className="paragraph">
            Create a tool that can help non-tech founders create working
            prototype for their product in an hour. This approach is useful when
            it comes to startups and MVP.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Team</h3>
          <p className="paragraph">
            I worked on this project with 2 designers, business owner, qa team
            and developers.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Responsibilities</h3>
          <p className="paragraph">
            Low-fi prototypes to provide a usability testing.{" "}
          </p>
        </div>
        <div>
          <h3 className="title-h3">What I have learned from this project? </h3>
          <p className="paragraph">
            Keep doing different tests and validating the ideas before launching
            any features. Defining a proper measurements for success is one of
            the keys to validate the test results.
          </p>
        </div>
        <div>
          <h3 className="title-h3 mb-8">Link to Behance</h3>
          <a
            rel="noreferrer"
            className="link-focalpoint"
            target="_blank"
            href="https://www.behance.net/gallery/114254591/Social-Network-MVP"
          >
            https://www.behance.net/gallery/114254591/Social-Network-MVP
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default Mvp
