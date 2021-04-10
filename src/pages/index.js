import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Main = () => (
  <Layout>
    <h1 className="main-header">
      This is start Page(Main)
    </h1>

    <p>
      Passionate about designing technologies to enrich people’s quality of life
      — I’m currently conducting user and market research, creating prototypes,
      visual and design at <Link to="#">LeanSquad</Link> and pursuing my
      Master’s in Computer Science at the{" "}
      <Link to="#">Kharkiv National University of Radio Electronics.</Link>
    </p>

    <p>
      I’m a multitasker with an excellent eye for design, imaginative, flexible
      and well-organized. I am the one, who could bring an advanced
      understanding of visually pleasant and user friendly design, typography,
      composition and color theory.
    </p>
    <Link to="#">Learn about me &rarr;</Link>
  </Layout>
)

export default Main;