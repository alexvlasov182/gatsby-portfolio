import * as React from "react"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"

const Doably = () => {
  return (
    <Layout>
      <div className="about-block">
        <div className="front-block">
          <StaticImage
            src="../images/doably-big.png"
            width={700}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <p className="subtitle-doably">Doably</p>
        <h1 className="paragraph-doably">
          Tool for managing personal and business life
        </h1>
        <div>
          <h3 className="title-doably">Goal</h3>
          <p>
            Create an easy-to-use and multifunctional to-do application. Make it
            easy not only to manage personal tasks, but also to manage big
            projects, create collections and share it with a team.
          </p>
        </div>
        <div>
          <h3 className="title-doably">Team</h3>
          <p>
            I worked in a cross-functional team. With one another designer on
            this project we were involved in all phases of the project, from
            mapping out the problem to delivering final designs
          </p>
        </div>
        <div>
          <h3 className="title-doably">Responsibilities </h3>
          <p>
            Qualitative Research, UX Design, Visual Design, Prototyping and
            Testing
          </p>
        </div>
        <div>
          <h3 className="title-doably">
            What I have learned from this project?
          </h3>
          <p>
            For complex UX problems research is a must. I couldn’t have designed
            a product users love without the help of people who will actually
            use it. The user interviews revealed unexpected information.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Doably
