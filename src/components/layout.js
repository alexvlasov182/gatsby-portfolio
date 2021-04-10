/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Global, css } from '@emotion/react';
import Helmet from 'react-helmet';
import useSiteMetadata from "../hooks/use-sitemetadata";


import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global 
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }
          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helveteca, Arial, sans-serif;
            font-size: 18px;
            line-height: 1.4;
            
            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;
              font-size: 40px;
              + * {
                margin-top: 0.5rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          }
        `} 
      />
      <Helmet>
        <html lang="en" />
        <title>{ title }</title>
        <meta name="description" content={ description } /> 
       </Helmet>
      <Header />
      <main 
        css={css`
            margin: 2rem auto 4rem;
            max-width: 90vw;
            width: 700px;
        `}
      >{ children }</main>
     <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
