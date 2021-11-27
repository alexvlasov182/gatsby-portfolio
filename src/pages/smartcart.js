/* eslint-disable react/no-unescaped-entities */
import * as React from "react"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"
import ScrollToTop from "../components/ScrollToTop"

const SmartCart = () => {
  return (
    <Layout>
      {/* Main Title */}
      <section className="all-project-title">
        <div className="header"></div>
        <h1 className="paragraph-focalpoint">Smart cart</h1>
        <p className="subtitle-focalpoint">
          Tool that helps users to choose and buy healthy food
        </p>
      </section>
      {/* Image FocalPoint */}
      <div className="about-img">
        <StaticImage
          src="../images/smartcart-main.jpg"
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
          <h3 className="title-h3">General</h3>
          <p className="paragraph">
            Smart cart is a tool that helps people eat healthier and buy food
            based on their preferences.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Challenge</h3>
          <p className="paragraph">
            Since people use our app during shopping and don’t have much time to
            understand how it works, we need to keep the design simple and cut
            it down to the most important elements, so that users can focus on
            their shopping rather than learning how to use the application.
            Furthermore, it was crucial to find a way to keep users motivated.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Goal</h3>
          <p className="paragraph">
            Create an application that helps users read information about all
            products in a few clicks. Encourage people to revise their shopping
            lists and buy healthier foods.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Team</h3>
          <p className="paragraph">
            This application was created as a practical task for students. I was
            the only designer on the project, so my responsibilities included
            defining the problem, providing the final design to the developers,
            and performing user testing.
          </p>
        </div>
        <div>
          <h3 className="title-h3 smart-cart">Responsibilities </h3>
          <ul className="list-item">
            <li>Product strategy,</li>
            <li>User research & Analysis,</li>
            <li>Persona creation,</li>
            <li>MVP definition,</li>
            <li>Wireframes,</li>
            <li>UI Design & Prototyping.</li>
          </ul>
        </div>
        <div>
          <h3 className="title-h3 mb-8 mt-24">Link to product</h3>
          <a rel="noreferrer" className="link-focalpoint" target="_blank">
            no link yet
          </a>
        </div>
      </section>
      {/* Competitive Analysis */}
      <section className="competitive">
        <h2 className="paragraph-subtitle all-project-title">
          Research & Problem definition
        </h2>
        <div>
          <p className="paragraph">
            In order to get to know the problems and needs of our users, I
            conducted 10 in-depth interviews. I wanted to get to know our target
            group better, understand its needs and concerns.
          </p>
        </div>
        <div>
          <h3 className="title-h3 mb-24">What I have learned:</h3>
          <ul className="list-item">
            <li>
              People with food intolerance struggle to decide what and where to
              eat on a daily basis.
            </li>
            <li>
              Users use multiple blogs, websites to find the products and
              recipes they need and can eat.
            </li>
            <li>
              People usually buy extra food when they don't have a shopping
              list.
            </li>
            <li>
              It's easier to give up an unhealthy product when you know how to
              replace it.
            </li>
          </ul>
        </div>
      </section>

      {/* Personas */}
      <section className="personas">
        <div className="personas-width">
          <h2 className="paragraph-subtitle all-project-title">Personas</h2>
          <div>
            <p className="paragraph">
              I've studied about the potential users by doing a user research,
              but to delve deeper and better understand our potential users, I
              created two personas.
            </p>
          </div>
          <div>
            <p className="paragraph">
              The information about each persona focused on its goals and
              frustrations with the product as well as their interaction with
              it, which drastically ыaffected my design decisions.
            </p>
          </div>
        </div>
        <div className="about-img">
          <StaticImage
            src="../images/personas-smartcart.png"
            width={1140}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </section>
      {/* User Flow */}
      <section className="user-flow">
        <div className="user-flow-width">
          <h2 className="paragraph-subtitle all-project-title">User flow</h2>
          <div>
            <p className="paragraph">
              I've created a user flow diagram to map every step of the user
              interaction required to achieve the main goal of this app:{" "}
              <b>
                "As a user, I want to choose and buy healthy foods that meet my
                goals.”
              </b>
            </p>
          </div>
        </div>
        <div className="about-img">
          <StaticImage
            src="../images/userfolw-smartcart.png"
            width={1140}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </section>
      {/* Wireframes */}
      <section className="wireframes">
        <div className="wireframes-width">
          <h2 className="paragraph-subtitle all-project-title">Wireframes</h2>
          <div>
            <p className="paragraph">
              I usually start the design process with low fidelity wireframes.
              This is the way I iterate through many design options quickly.
              Whit my wireframes I was able to clearly define the basic features
              and main user journey of the app.
            </p>
          </div>
        </div>
        <div className="about-img">
          <StaticImage
            src="../images/wireframes-smartcart.png"
            width={1140}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </section>
      {/* UI screens */}
      <section className="screens">
        <h2 className="paragraph-subtitle all-project-title">UI screens</h2>
        <div className="screens-width">
          <p className="paragraph">
            On the basis of successive iterations of low fidelity mockups, I
            designed the UI screens for Smart Cart.
          </p>
        </div>
        <div className="screens-width">
          <p className="paragraph">
            As a first part of the UI design process, I experimented with
            different colours and styles. I tried to focus on colours and visual
            elements which can distinct our brand from other apps.
          </p>
        </div>
        <div className="about-img">
          <StaticImage
            src="../images/uiscreens-smartcart.png"
            width={1140}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </section>
      {/* Takeaways */}
      <section className="takeaways">
        <h2 className="paragraph-subtitle all-project-title">Takeaways</h2>
        <div className="takeaways-width">
          <p className="paragraph">
            Despite the fact that I was creating this project as a practice, I
            wanted it to solve business and user problems. So, in my opinion, my
            biggest challenge was to create not just a beautiful picture, but
            also a useful application.
          </p>
          <p className="paragraph">
            This project taught me never to underestimate design conventions.
            Creating something new or different is exciting, especially from a
            designer's point of view, but{" "}
            <b> constant testing is absolutely crucial for success.</b>
          </p>
        </div>
      </section>
      <ScrollToTop />
    </Layout>
  )
}

export default SmartCart
