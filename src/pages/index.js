import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const Main = () => (
  <Layout>
    <div className="about-block">
      <div className="front-block">
        <StaticImage
          src="../images/front-img.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />

        <h1 className="main-header">
          Hi, my name is Anastasiia and I’m a UX/UI designer with more than 4
          years of experience.
        </h1>
      </div>

      <p className="paragraph">
        <strong>
          Passionate about designing technologies to enrich people’s quality of
          life.
        </strong>
        <br />I grew up as a multi-disciplinary designer with a broad approach.
        But for the last 4 years with{" "}
        <Link
          className="hover-link"
          rel="noreferrer"
          target="_blank"
          to="https://mvpnow.studio/team"
        >
          LeanSquad.
        </Link>{" "}
        I have focused on being a T-shaped UX/UI and Product designer.
      </p>

      <p className="paragraph paragraph-bottom">
        I mainly developed large CRM systems and company products. In addition
        to creating complex systems with a simple user experience, I have
        experience working <br /> with:
      </p>
      <ul className="list-item">
        <li>- Creating journey maps, personas and wireframes,</li>
        <li>- UX research and testing,</li>
        <li>- Information architecture,</li>
        <li>- Style guides and atomic design systems,</li>
        <li> - Design concepts, prototypes.</li>
      </ul>
      <p className="paragraph paragraph-margin">
        When it comes to work, my motto is `Simple is better`. Therefore, I
        prefer clean and minimalist design. I try to create simple and fun
        experiences for people who appreciate elegant and dynamic efficiency.
      </p>
    </div>
  </Layout>
)

export default Main
