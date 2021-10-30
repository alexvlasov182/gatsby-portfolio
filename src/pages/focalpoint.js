import * as React from "react"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"

const Focalpoint = () => {
  console.log("Hello World")
  return (
    <Layout>
      <div className="about-block">
        <h1 className="paragraph-focalpoint"> Focal Point</h1>
        <p className="subtitle-focalpoint">Tool for procurement management</p>
      </div>
      <div className="about-img">
        <StaticImage
          src="../images/focalpoint-main-img.jpg"
          width={1140}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className="about-block">
        <h2 className="paragraph-subtitle">Project overview</h2>
        <div>
          <h3 className="title-focalpoint">General</h3>
          <p className="paragraph">
            Focal Point automates and formalizes procurement best practices in a
            simple to use solution to develop strategies and plans for maximum
            value creation.
          </p>
        </div>
        <div>
          <h3 className="title-focalpoint">Challenge</h3>
          <p className="paragraph">
            Procurement managers use many different tools to get their job done
            and save data. The variety of tools is confusing and time-consuming.
          </p>
        </div>
        <div>
          <h3 className="title-focalpoint">Goal</h3>
          <p className="paragraph">
            Create a product that helps procurement teams to control company
            budgets, pay easily, and track all company spends.
          </p>
        </div>
        <div>
          <h3 className="title-focalpoint">Team</h3>
          <p className="paragraph">
            I worked in a cross-functional team. As the main UX/UI designer, I
            was involved in all phases of the project, from mapping out the
            problem to delivering final designs.
          </p>
        </div>
        <div>
          <h3 className="title-focalpoint">Responsibilities </h3>
          <p className="paragraph">
            UX Design, Visual Design, Prototyping and Testing
          </p>
        </div>
        <div>
          <h3 className="title-focalpoint">
            What I have learned from this project?
          </h3>
          <p className="paragraph">
            This CRM system’s taught me to work with large databases. We have
            automated the process of analyzing data on purchases of giant
            companies. The project was successfully presented to customers.
          </p>
        </div>
        <div>
          <h3 className="title-focalpoint">Link to product</h3>
          <a
            rel="noreferrer"
            className="link"
            target="_blank"
            href="https://focalpointprocurement.com/features"
          >
            https://focalpointprocurement.com/features
          </a>
        </div>
        <h2 className="paragraph-subtitle focalpoint-title">
          Competitive Analysis
        </h2>
        <p className="paragraph">
          At the initial stage, I conducted a SWOT analysis of our direct and
          indirect competition. Then I assessed the key features and
          functionality of competing applications in the context of our project.
        </p>
        <p className="paragraph">
          I chose the opportunity to combine the team communication within each
          project (comments, chat) with procurement functionalities such as: the
          ability to request everything you need in one click, flexible request
          forms form and milestones.
        </p>
        <h2 className="paragraph-subtitle focalpoint-title">
          Prioritization Plotting
        </h2>
        <p className="paragraph">
          In order to build a successful and solid MVP for Focal Point, I had to
          identify the most important problems. So, I’ve created a
          prioritization matrix that shows the relative importance of a set of
          items based on two weighted criteria - Priority and Effort.
        </p>
      </div>
      <div className="about-img">
        <StaticImage
          src="../images/prioritization.png"
          width={1140}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
    </Layout>
  )
}

export default Focalpoint
