/* eslint-disable react/no-unescaped-entities */
import * as React from "react"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import ScrollToTop from "../components/ScrollToTop"

// import Swiper and modules styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
const sliderParams = {
  slidesPerView: "auto",
  centeredSlides: true,
}

const SmartCart = () => {
  return (
    <Layout>
      {/* Main Title */}
      <section className="focalpoint-title">
        <div className="header"></div>
        <h1 className="paragraph-focalpoint">Smart cart</h1>
        <p className="subtitle-focalpoint">
          Tool that helps users to choose and buy healthy food
        </p>
      </section>
      {/* Image FocalPoint */}
      <div className="about-img">
        <StaticImage
          src="../images/main-image-smartcart.jpg"
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
          <h3 className="title-focalpoint">General</h3>
          <p className="paragraph">
            Smart cart is a tool that helps people eat healthier and buy food
            based on their preferences.
          </p>
        </div>
        <div>
          <h3 className="title-focalpoint">Challenge</h3>
          <p className="paragraph">
            Since people use our app during shopping and don’t have much time to
            understand how it works, we need to keep the design simple and cut
            it down to the most important elements, so that users can focus on
            their shopping rather than learning how to use the application.
            Furthermore, it was crucial to find a way to keep users motivated.
          </p>
        </div>
        <div>
          <h3 className="title-focalpoint">Goal</h3>
          <p className="paragraph">
            Create an application that helps users read information about all
            products in a few clicks. Encourage people to revise their shopping
            lists and buy healthier foods.
          </p>
        </div>
        <div>
          <h3 className="title-focalpoint">Team</h3>
          <p className="paragraph">
            This application was created as a practical task for students. I was
            the only designer on the project, so my responsibilities included
            defining the problem, providing the final design to the developers,
            and performing user testing.
          </p>
        </div>
        <div>
          <h3 className="title-focalpoint">Responsibilities </h3>
          <ul className="list-item">
            <li>- Product strategy,</li>
            <li>- User research & Analysis,</li>
            <li>- Persona creation,</li>
            <li>- MVP definition,</li>
            <li> - Wireframes,</li>
            <li> - UI Design & Prototyping.</li>
          </ul>
        </div>
        <div>
          <h3 className="title-focalpoint mb-8">Link to product</h3>
          <a rel="noreferrer" className="link-focalpoint" target="_blank">
            no link yet
          </a>
        </div>
      </section>
      {/* Competitive Analysis */}
      <section className="competitive">
        <h2 className="paragraph-subtitle focalpoint-title">
          Competitive Analysis
        </h2>
        <div>
          <p className="paragraph">
            At the initial stage, I conducted a SWOT analysis of our direct and
            indirect competition. Then I assessed the key features and
            functionality of competing applications in the context of our
            project.
          </p>
        </div>
        <div>
          <p className="paragraph">
            I chose the opportunity to combine the team communication within
            each project (comments, chat) with procurement functionalities such
            as: the ability to request everything you need in one click,
            flexible request forms form and milestones.
          </p>
        </div>
      </section>

      {/* Personas */}
      <section className="personas">
        <div className="personas-width">
          <h2 className="paragraph-subtitle focalpoint-title">Personas</h2>
          <div>
            <p className="paragraph">
              The analysis of the in-depth interviews allowed me to create 2
              user archetypes, thanks to which I could better empathize with our
              potential customers. During the further stages of designing, I
              often referred to the figures of Kristin and Robert.
            </p>
          </div>
        </div>
      </section>
      {/* User Flow */}
      <section className="user-flow">
        <div className="user-flow-width">
          <h2 className="paragraph-subtitle focalpoint-title">User Flow</h2>
          <div>
            <p className="paragraph">
              It is important to figure out how the people we design for will
              make the best use of this product. So, I decided to create a user
              flow because it is easy to do and also easy to explain. <br /> I
              divided our application into 10 panels, for which I created user
              flows, there are a couple of them.
            </p>
          </div>
          <div className="create">
            1. I as a user want to create a new project.
          </div>
          <div className="know">
            2. I as a user want to know if the supplier fits my project.
          </div>
        </div>
      </section>
      {/* Wireframes */}
      <section className="wireframes">
        <div className="wireframes-width">
          <h2 className="paragraph-subtitle focalpoint-title">Wireframes</h2>
          <div>
            <p className="paragraph">
              Before moving onto high fidelity wireframes, I wanted to get a
              feel for what the core of the app would look like when put in
              front of me. Our product manager and I have created wireframes in
              Balsamiq in order to have a clearer idea of our future product.
            </p>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          {...sliderParams}
        >
          <SwiperSlide>
            <StaticImage
              src="../images/frame-1.png"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/frame-2.png"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/frame-3.png"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      {/* UI screens */}
      <section className="screens">
        <h2 className="paragraph-subtitle focalpoint-title">UI screens</h2>
        <div className="screens-width">
          <p className="paragraph">
            After a few more iterations, I designed the final screens with
            Figma. I conducted A/B testings during the process to define the
            design pattern, elements and colours. My aim was a clean, modern
            look that helps users fulfil their goals quickly.
          </p>
        </div>
      </section>
      {/* Takeaways */}
      <section className="takeaways">
        <h2 className="paragraph-subtitle focalpoint-title">Takeaways</h2>
        <div className="takeaways-width">
          <p className="paragraph">
            This project took nearly a year to ideate, design, test, and
            implement. It was a huge learning experience for me and the entire
            FocalPoint team.
          </p>
          <p className="paragraph">
            In my opinion, the perfect motto for this project should be{" "}
            <b>
              “It’s easy to come up with design ideas, but it’s hard to solve
              the right problem.”
            </b>{" "}
            It's important to take the time to research and interview users so
            that you know exactly who you are creating for.
          </p>
          <p className="paragraph">
            This CRM system’s taught me to work with large databases. We have
            automated the process of analyzing data on purchases of giant
            companies. The project was successfully presented to customers and
            now is in use by large companies.
          </p>
        </div>
      </section>
      <ScrollToTop />
    </Layout>
  )
}

export default SmartCart
