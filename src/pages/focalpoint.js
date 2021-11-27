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

const Focalpoint = () => {
  return (
    <Layout>
      {/* Main Title */}
      <section className="all-project-title">
        <div className="header"></div>
        <h1 className="paragraph-focalpoint"> Focal Point</h1>
        <p className="subtitle-focalpoint">Tool for procurement management</p>
      </section>
      {/* Image FocalPoint */}
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
      {/* Project overview */}
      <section className="project-overview">
        <h2 className="paragraph-subtitle">Project overview</h2>
        <div>
          <h3 className="title-h3">General</h3>
          <p className="paragraph">
            Focal Point automates and formalizes procurement best practices in a
            simple to use solution to develop strategies and plans for maximum
            value creation.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Challenge</h3>
          <p className="paragraph">
            Procurement managers use many different tools to get their job done
            and save data. The variety of tools is confusing and time-consuming.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Goal</h3>
          <p className="paragraph">
            Create a product that helps procurement teams to control company
            budgets, pay easily, and track all company spends.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Team</h3>
          <p className="paragraph">
            I worked in a cross-functional team. As the main UX/UI designer, I
            was involved in all phases of the project, from mapping out the
            problem to delivering final designs.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Responsibilities</h3>
          <p className="paragraph">
            UX Design, Visual Design, Prototyping and Testing.
          </p>
        </div>
        <div>
          <h3 className="title-h3 mb-8">Link to product</h3>
          <a
            rel="noreferrer"
            className="link-focalpoint"
            target="_blank"
            href="https://www.getfocalpoint.com"
          >
            https://www.getfocalpoint.com
          </a>
        </div>
      </section>
      {/* Research */}
      <section className="research">
        <h2 className="paragraph-subtitle all-project-title">Research</h2>
        <div className="research-width">
          <p className="paragraph">
            As a first step, we started preparing for user research. Since this
            was a new area for our design team, we{" "}
            <b>
              {" "}
              conducted a procurement research and analyzed the main
              competitors.
            </b>
          </p>
          <p className="paragraph">
            The next step was to prepare a list of the features our competitors
            offer and how they meet the needs of our business. We have carried
            out a <b> SWOT analysis of our direct and indirect competitors.</b>{" "}
            We evaluated the key features and functionality of the competing
            applications in the context of our project.
          </p>
          <p className="paragraph">
            To understand user needs and pain points, we{" "}
            <b> conducted 10 user interviews.</b> During the interview, we
            confirmed our assumptions that users are accustomed to working with
            large databases, but are still looking for a way to combine all the
            tools to save their time.
          </p>
        </div>
      </section>
      {/* Personas */}
      <section className="personas">
        <div className="personas-width">
          <h2 className="paragraph-subtitle all-project-title">Personas</h2>
          <div>
            <p className="paragraph">
              The analysis of the in-depth interviews allowed us to create 2
              user archetypes, thanks to which we could better empathize with
              our potential customers. During the further design stages , we
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
      {/* Prioritization Plotting */}
      <section className="prioritization">
        <div className="prioritization-width">
          <h2 className="paragraph-subtitle all-project-title">
            Prioritization plotting
          </h2>
          <div>
            <p className="paragraph">
              In order to build a successful and solid MVP for Focal Point, we
              had to identify the most important features. So, we’ve created a
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
      {/* User Flow */}
      <section className="user-flow">
        <div className="user-flow-width">
          <h2 className="paragraph-subtitle all-project-title">User flow</h2>
          <div>
            <p className="paragraph">
              The pain points of our potential users were mainly associated with
              complex navigation. So, the next step was to create a user flow
              that helps us see all the possible ways for users to achieve the
              goal.
            </p>
            <p className="paragraph">
              Creating a user flow also helped us see gaps in navigation and
              reduce the number of screens. We divided our application into main
              10 panels, for which we created user flows, there are a couple of
              them.
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
              Before moving onto high fidelity wireframes, we wanted to get a
              feel for what the core of the app would look like. Our product
              manager and I have created wireframes in Balsamiq in order to have
              a clearer idea of our future product.
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
      {/* Usability study */}
      <section className="usability">
        <h2 className="paragraph-subtitle all-project-title">
          Usability study
        </h2>
        <div>
          <p className="paragraph">
            I created an interactive prototype to show our future product to
            potential users so that we can test usability before creating
            detailed screens. Here are our findings after conducting a usability
            testing:
          </p>
        </div>
        <div>
          <ul className="list-item">
            <li className="focalpoint-mt-8">
              <b>
                The first thing users want to see is not a list of categories,
                but a dashboard that helps managers measure the effectiveness of
                their work.
              </b>
            </li>
            <li className="focalpoint-mt-8">
              <b>
                Vertical navigation was better because it helped users find the
                page they were looking for faster.
              </b>
            </li>
            <li className="focalpoint-mt-8">
              <b>
                We had to simplify the tables by adding icons and two-line
                strings because they were overloaded with information.
              </b>
            </li>
          </ul>
        </div>
      </section>
      {/* UI screens */}
      <section className="screens">
        <h2 className="paragraph-subtitle all-project-title">UI screens</h2>
        <div className="screens-width">
          <p className="paragraph">
            After a few more iterations, I designed the final screens with
            Figma. We conducted A/B testings with a Figma prototype during the
            process to define the design pattern, elements and colours. My aim
            was a clean, modern look that helps users fulfil their goals
            quickly.
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

export default Focalpoint
