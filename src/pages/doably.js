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

      {/* Personas */}
      <section className="personas">
        <div className="personas-width">
          <h2 className="paragraph-subtitle all-project-title">Personas</h2>
          <div>
            <p className="paragraph no-p-m">
              Based on the user research I set up three personas. There are 3
              types of our user:
            </p>
            <ul className="list-item">
              <li className="doably-mt-8">
                <b>Visionary.</b> A person, who thinks about the big picture.
                They strategize and plan projects and tend to dream big.
              </li>
              <li className="doably-mt-8">
                <b>Project manager.</b> This person is diplomatic, willing to
                compromise. These types of people are patient, compassionate,
                and value group success over individual competition
              </li>
              <li className="doably-mt-8">
                <b>Doer.</b> A person who acts, rather then talking or thinking.
                The doer is all about action. They focus on productivity rather
                than the big picture.
              </li>
            </ul>
          </div>
          <div>
            <p className="paragraph persons-mt-24">
              Each persona had a scenario that identified a realistic goal the
              user might have when working with this app. I referred to them
              throughout the entire product development process.
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
              src="../images/doably-personas-1.jpg"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/doably-personas-2.jpg"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/doably-personas-3.jpg"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      {/* User Journey Map */}
      <section className="user-flow">
        <div className="user-flow-width">
          <h2 className="paragraph-subtitle all-project-title">
            User Journey Map
          </h2>
          <div>
            <p className="paragraph">
              After researching and creating personas, we proceeded to create a
              User Journey Map. It allowed us to answer the question of how our
              users will use our application, what emotions they will feel, and
              what problems they may encounter while using it.
            </p>
          </div>
          <div>
            <p className="paragraph">
              After creating a map we decided to add templates to our product.
              It's really helpful for users to see ready-made templates so they
              can get started easily too.
            </p>
          </div>
        </div>

        <div className="about-img">
          <StaticImage
            src="../images/customer-journey-map.png"
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
              Based on User Flows, we designed the first low-fidelity mockups.
              Usability tests carried out on them allowed to identify elements
              that are non-intuitive and require improvement.
            </p>
          </div>
          <div>
            <p className="paragraph">
              In addition, it helped us to be on the same page with our
              customers without spending a lot of time developing high-fidality
              screens.
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
              src="../images/doably-wireframes-1.png"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/doably-wireframes-2.png"
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
            As a final step, we’ve created high-fidelity mockups. We removed
            unnecessary UI elements and kept all design elements consistent
            throughout the application to ensure a clean and well-spaced design.
            Strong typographic hierarchy contributes to high readability and
            orientation in the application.
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
              src="../images/doably-ui-screens-1.png"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/doably-ui-screens-2.png"
              width={1140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/doably-ui-screens-3.png"
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
