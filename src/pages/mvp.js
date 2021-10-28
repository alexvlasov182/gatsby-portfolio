import * as React from 'react'
import Layout from '../components/layout'

import { StaticImage } from 'gatsby-plugin-image'

const Mvp = () => {
  return (
    <Layout>
      <div className="about-block">
        <div className="front-block">
          <StaticImage
            src="../images/mvp-big.jpg"
            width={700}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <p className="subtitle-doably">MVP Now</p>
        <h1 className="paragraph-doably">
          No code platform best suited for non-tech startup founders
        </h1>
        <div>
          <h3 className="title-doably">Overview</h3>
          <p className="paragraph">
            MVP Now is a no code platform. The main goal of this product is to
            help non-tech domain experts build web and mobile apps without
            developers
          </p>
        </div>
        <div>
          <h3 className="title-doably">Goal</h3>
          <p className="paragraph">
            Create a tool that can help non-tech founders create working
            prototype for their product in an hour. This approach is useful when
            it comes to startups and MVP.
          </p>
        </div>
        <div>
          <h3 className="title-doably">Team</h3>
          <p className="paragraph">
            I worked on this project with 2 designers, business owner, qa team
            and developers.
          </p>
        </div>
        <div>
          <h3 className="title-doably">Responsibilities </h3>
          <p className="paragraph">
            Low-fi prototypes to provide a usability testing.{' '}
          </p>
        </div>
        <div>
          <h3 className="title-doably">
            What I have learned from this project?
          </h3>
          <p className="paragraph">
            Keep doing different tests and validating the ideas before launching
            any features. Defining a proper measurements for success is one of
            the keys to validate the test results.
          </p>
        </div>
        <div>
          <h3 className="title-doably">Link to Behance</h3>
          <a
            rel="noreferrer"
            className="link"
            target="_blank"
            href="https://www.behance.net/gallery/114254591/Social-Network-MVP"
          >
            https://www.behance.net/gallery/114254591/Social-Network-MVP
          </a>
        </div>
      </div>
    </Layout>
  )
};

export default Mvp