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

const Srecwriter = () => {
  return (
    <Layout>
      {/* Main Title */}
      <section className="all-project-title">
        <div className="header"></div>
        <h1 className="paragraph-specwriter">SpecWriter</h1>
        <p className="subtitle-specwriter">
          Specification tool for desktop, web, mobile and API software products
        </p>
      </section>
      {/* Image FocalPoint */}
      <div className="about-img">
        <StaticImage
          src="../images/specwriter-main.jpg"
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
            SpecWriter is designed to help product owners, qa engineers, and
            developers manage software products from the beginning to releases.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Challenge</h3>
          <p className="paragraph">
            The biggest challenge was creating the right MVP with limited
            resources. We had a lot of data, information to implement in as
            simple and clear way as possible.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Goal</h3>
          <p className="paragraph">
            Create a tool for product teams that helps manage all the project
            stages from user stories to relieses.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Team</h3>
          <p className="paragraph">
            I worked with a large team of programmers, QA engineers, PM and one
            designer also worked with me.
          </p>
        </div>
        <div>
          <h3 className="title-h3">Responsibilities </h3>
          <p className="paragraph">
            Large-scale analysis of competitors and other research, Maintaining
            documentation (mostly detailed user story), UX Design, Visual
            Design, Prototyping and Testing
          </p>
        </div>
        <div>
          <h3 className="title-h3 mb-8">Link to Dribble</h3>
          <a
            rel="noreferrer"
            className="link-specwirter"
            target="_blank"
            href="https://dribbble.com/shots/9099792-SpecWriter"
          >
            https://dribbble.com/shots/9099792-SpecWriter
          </a>
        </div>
      </section>
      {/* Research & Problem definition */}
      <section className="competitive">
        <h2 className="paragraph-subtitle all-project-title">
          Research & Problem definition
        </h2>
        <div>
          <p className="paragraph">
            To start building MVP, we needed to know the problems and needs of
            our users. We started with audits of various applications from the
            management area. Our aim was to gather insights about strategies and
            best practices.
          </p>
        </div>
        <div>
          <h3 className="title-h3 mb-24">Results & Takeaways:</h3>
          <ul className="list-item">
            <li>
              Most applications created team views to engage and retain users.
            </li>
            <li>
              They all focus on sales and user needs, and have a clear user
              journey that allows users to take action with ease.
            </li>
            <li>
              Almost all applications have a timeline for managing the progress
              of a project, which is an important management tool.
            </li>
            <li>
              Users can share project pages with people outside of the team,
              which really helps when dealing with clients.
            </li>
          </ul>
        </div>
      </section>
      {/* Prioritization matrix */}
      <section className="prioritization">
        <div className="prioritization-width">
          <h2 className="paragraph-subtitle all-project-title">
            Prioritization matrix
          </h2>
          <div>
            <p className="paragraph">
              After defining a list of features from other applications, we
              began to create our own. Plotting a list of the possible features
              onto a graph helped narrow down what was{" "}
              <b> absolutely crucial for delivering the mvp </b> and would could
              be built upon further down the road.
            </p>
          </div>
          <div>
            <p className="paragraph">
              After creating the priority matrix with the team, we found that
              there are 4 feautures in the block with high priority and low
              effort. So, we decided to start our MVP with them.
            </p>
          </div>
        </div>
        <div className="about-img">
          <StaticImage
            src="../images/prioritization-matrix-img.png"
            width={765}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </section>
      {/* Empathy map */}
      <section className="personas">
        <div className="personas-width">
          <h2 className="paragraph-subtitle all-project-title">Empathy map</h2>
          <div>
            <p className="paragraph">
              To know if all of these features will meet the user needs, we
              decided to create an empathy map. <br /> There are 3 types of our
              potential users: product owners, qa engineers, and developers. To
              align new key functionalities with all users needs, we set up {""}
              <b>multiple-user empathy map.</b>
            </p>
          </div>
          <div>
            <p className="paragraph">
              While developing this map, we reached out to consumers who use
              project management tools and analyzed their behavior, motivation,
              and pain points.
            </p>
          </div>
        </div>
        <div className="about-img">
          <StaticImage
            src="../images/empathy-map-img.png"
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
            It’s important to take the time to research and interview users so
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

export default Srecwriter
