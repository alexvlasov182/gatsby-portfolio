import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const About = () => (
  <Layout>
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
        Hi, my name is Anastasiia and I’m a UX/UI designer with more than 3
        years of experience.
      </h1>
    </div>

    <p className="paragraph">
      <strong>Passionate about designing technologies to enrich people’s quality of life </strong>
      — I’m currently conducting user and market research, creating prototypes,
      visual and design at <Link to="https://mvpnow.studio/team">LeanSquad</Link> and pursuing my
      Master’s in Computer Science at the{" "}
      <Link to="https://nure.ua/en/">Kharkiv National University of Radio Electronics.</Link>
    </p>

    <p>
      I’m a multitasker with an excellent eye for design, imaginative, flexible
      and well-organized. I am the one, who could bring an advanced
      understanding of visually pleasant and user friendly design, typography,
      composition and color theory.
    </p>
  </Layout>
)

export default About;
