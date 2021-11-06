/* eslint-disable react/no-unescaped-entities */
import * as React from "react"
import Layout from "../components/layout"
import ScrollToTop from "../components/ScrollToTop"

import { StaticImage } from "gatsby-plugin-image"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper and modules styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
const sliderParams = {
  slidesPerView: "auto",
  centeredSlides: true,
}
const Doably = () => {
  return (
    <Layout>
      {/* Main Title */}
      <section className="all-project-title">
        <h1 className="paragraph-focalpoint">Doably</h1>
        <p className="subtitle-focalpoint">
          Tool for managing personal and business life
        </p>
      </section>
      {/* Image FocalPoint */}
      <div className="about-img">
        <StaticImage
          src="../images/doably-main.jpg"
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
            Doably is a tool that helps people to keep all objects and
            activities under control. Our users can manage their business and
            personal projects, time and information.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Challenge</h3>
          <p className="paragraph">
            The target audience is very large and design just can’t solve all
            their problems. So the first thing to do was to split it into small
            groups and find the main target group for our product.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Goal</h3>
          <p className="paragraph">
            Create an easy-to-use and multifunctional to-do application. Make it
            easy not only to manage personal tasks, but also to manage big
            projects, create collections and share it with a team.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Team</h3>
          <p className="paragraph">
            I worked in a cross-functional team. With one another designer on
            this project we were involved in all phases of the project, from
            mapping out the problem to delivering final designs
          </p>
        </div>
        <div>
          <h3 className="title-h3">Responsibilities </h3>
          <p className="paragraph">
            Qualitative Research, UX Design, Visual Design, Prototyping and
            Testing
          </p>
        </div>
        <div>
          <h3 className="title-h3 mb-8">Link to product</h3>
          <a
            rel="noreferrer"
            className="link-focalpoint"
            target="_blank"
            href="https://dribbble.com/shots/9179196-Doably-Web-Application"
          >
            https://dribbble.com/shots/9179196-Doably-Web-Application
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
            We used Lean UX principles in the development of "Doably" to focus
            on users and their needs at each phase of the design process. At
            first, we had to formulate and validate the hypothesis:
          </p>
        </div>
        <div>
          <p className="paragraph">
            <b>
              {" "}
              “We believe that clear statement of daily tasks and analysis of
              the achievement of goals for our users will make users feel more
              productive and motivated”
            </b>
          </p>
        </div>
        <div>
          <p className="paragraph">
            We conducted a user survey to prove this hypothesis and gain user
            insight. Results:
          </p>
          <ul className="list-item">
            <li className="doably-mt-8">
              75% said they would feel more effective if they saw results of
              their work.
            </li>
            <li className="doably-mt-8">
              60% agree that it is easier to combine work and personal life if
              you book time for yourself in advance.
            </li>
            <li className="doably-mt-8">
              80% said they would like to share some information or tasks with
              their family or team. It’s also a good way not to lose useful
              contacts.
            </li>
          </ul>
        </div>
      </section>
      {/* Prioritization Plotting */}
      <section className="prioritization">
        <div className="prioritization-width">
          <h2 className="paragraph-subtitle all-project-title">
            Prioritization Plotting
          </h2>
          <div>
            <p className="paragraph">
              In order to build a successful and solid MVP for Focal Point, I
              had to identify the most important problems. So, I have created a
              prioritization matrix that shows the relative importance of a set
              of items based on two weighted criteria - Priority and Effort.
            </p>
          </div>
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
      </section>
      {/* Personas */}
      <section className="personas">
        <div className="personas-width">
          <h2 className="paragraph-subtitle all-project-title">Personas</h2>
          <div>
            <p className="paragraph">
              The analysis of the in-depth interviews allowed me to create 2
              user archetypes, thanks to which I could better empathize with our
              potential customers. During the further stages of designing, I
              often referred to the figures of Kristin and Robert.
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
              src="../images/slide-1.png"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/slide-2.png"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      {/* User Flow */}
      <section className="user-flow">
        <div className="user-flow-width">
          <h2 className="paragraph-subtitle all-project-title">User Flow</h2>
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
              src="../images/user-flow-1.png"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/user-flow-2.png"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      {/* Wireframes */}
      <section className="wireframes">
        <div className="wireframes-width">
          <h2 className="paragraph-subtitle all-project-title">Wireframes</h2>
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
        <h2 className="paragraph-subtitle all-project-title">UI screens</h2>
        <div className="screens-width">
          <p className="paragraph">
            After a few more iterations, I designed the final screens with
            Figma. I conducted A/B testings during the process to define the
            design pattern, elements and colours. My aim was a clean, modern
            look that helps users fulfil their goals quickly.
          </p>
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
              src="../images/ui-3.png"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/ui-2.png"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/ui-1.png"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      {/* Takeaways */}
      <section className="takeaways">
        <h2 className="paragraph-subtitle all-project-title">Takeaways</h2>
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
            Its important to take the time to research and interview users so
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

export default Doably
