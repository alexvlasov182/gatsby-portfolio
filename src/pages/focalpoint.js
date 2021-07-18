import * as React from "react"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"

const Focalpoint = () => {
  return (
    <Layout>
      <div className="about-block">
        <div className="front-block">
          <StaticImage
            src="../images/focalpoint-big.png"
            width={700}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <p className="subtitle-doably">Focal Point</p>
        <h1 className="paragraph-doably">Tool for procurement management</h1>
        <div>
          <h3 className="title-doably">Overview</h3>
          <p>
            Focal Point automates and formalizes procurement best practices in a
            simple to use solution to develop strategies and plans for maximum
            value creation.
          </p>
        </div>
        <div>
          <h3 className="title-doably">Goal</h3>
          <p>
            Create a product that helps procurement teams to control company
            budgets, pay easily, and track all company spends.
          </p>
        </div>
        <div>
          <h3 className="title-doably">Team</h3>
          <p>
            I worked in a cross-functional team. As the main UX/UI designer, I
            was involved in all phases of the project, from mapping out the
            problem to delivering final designs.
          </p>
        </div>
        <div>
          <h3 className="title-doably">Responsibilities </h3>
          <p>UX Design, Visual Design, Prototyping and Testing</p>
        </div>
        <div>
          <h3 className="title-doably">
            What I have learned from this project?
          </h3>
          <p>
            This CRM system’s taught me to work with large databases. We have
            automated the process of analyzing data on purchases of giant
            companies. The project was successfully presented to customers.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Focalpoint
