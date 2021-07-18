import * as React from "react"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"

const Srecwriter = () => {
  return (
    <Layout>
      <div className="about-block">
        <div className="front-block">
          <StaticImage
            src="../images/specwriter-big.png"
            width={700}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <p className="subtitle-doably">SpecWriter</p>
        <h1 className="paragraph-doably">
          Specification tool for desktop, web, mobile and API software products
        </h1>
        <div>
          <h3 className="title-doably">Goal</h3>
          <p>
            Create a tool for product teams that helps manage all the project
            stages from user stories to relieses.
          </p>
        </div>
        <div>
          <h3 className="title-doably">Team</h3>
          <p>
            I worked with a large team of programmers, QA engineers, PM and one
            designer also worked with me.
          </p>
        </div>
        <div>
          <h3 className="title-doably">Responsibilities </h3>
          <p>
            Large-scale analysis of competitors and other research, Maintaining
            documentation (mostly detailed user story), UX Design, Visual
            Design, Prototyping and Testing
          </p>
        </div>
        <div>
          <h3 className="title-doably">
            What I have learned from this project?
          </h3>
          <p>
            Usability on the first place. The primary goal is to understand
            users, their problems and then come up with a design. This way you
            can not just create a good-looking application, but also help users
            to solve their problems.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Srecwriter
