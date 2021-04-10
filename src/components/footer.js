import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${ props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: underline;
  color: #4F5ABF;
  

  &.current-page {
    border-bottom: 2px solid #222;
    color: #4F5ABF;
  }

  &:last-of-type {
    margin-right: 0;
  }

`;

const Footer = ({ siteTitle }) => (
  <footer 
    css={css`
      background: transparnet;
      
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0.5rem calc((100vw - 950px - 0.5rem) / 2);
      height: 72px;
    `}
  >
    
    <nav css={css`
      margin-top: 128px;
    `}>
      <NavLink to="#" activeClassName="current-page">Linked</NavLink>
      <NavLink to="#" activeClassName="current-page">Behance</NavLink>
      <NavLink to="#" activeClassName="current-page">Dribbble</NavLink>
    </nav>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer