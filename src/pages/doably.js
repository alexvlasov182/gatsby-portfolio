import * as React from 'react'
import Layout from '../components/layout'

import { StaticImage } from 'gatsby-plugin-image'

const Doably = () => {
  return (
    <Layout>
      <div className="about-block">
        <div className="front-block">
          <StaticImage
            src="../images/doably-big.jpg"
            //width={900}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <p className="subtitle-doably">Doably</p>
        <h1 className="paragraph-doably">
          Tool for managing personal and business life
        </h1>
        <div>
          <h3 className="title-doably">Goal</h3>
          <p className="paragraph">
            Create an easy-to-use and multifunctional to-do application. Make it
            easy not only to manage personal tasks, but also to manage big
            projects, create collections and share it with a team.
          </p>
        </div>
        <div>
          <h3 className="title-doably">Team</h3>
          <p className="paragraph">
            I worked in a cross-functional team. With one another designer on
            this project we were involved in all phases of the project, from
            mapping out the problem to delivering final designs
          </p>
        </div>
        <div>
          <h3 className="title-doably">Responsibilities </h3>
          <p className="paragraph">
            Qualitative Research, UX Design, Visual Design, Prototyping and
            Testing
          </p>
        </div>
        <div>
          <h3 className="title-doably">
            What I have learned from this project?
          </h3>
          <p className="paragraph">
            For complex UX problems research is a must. I couldn’t have designed
            a product users love without the help of people who will actually
            use it. The user interviews revealed unexpected information.
          </p>
        </div>
        <div>
          <h3 className="title-doably">Link to Dribbble</h3>
          <a
            rel="noreferrer"
            className="link"
            target="_blank"
            href="https://dribbble.com/shots/9179196-Doably-Web-Application"
          >
            https://dribbble.com/shots/9179196-Doably-Web-Application
          </a>
        </div>
      </div>
    </Layout>
  )
};

export default Doably
