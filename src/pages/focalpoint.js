import * as React from "react"
import Layout from "../components/layout"

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

const Focalpoint = () => {
  return (
    <Layout>
      <section className="focalpoint-title">
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
      {/* Prioritization Plotting */}
      <section className="prioritization">
        <div className="prioritization-width">
          <h2 className="paragraph-subtitle focalpoint-title">
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
    </Layout>
  )
}

export default Focalpoint
