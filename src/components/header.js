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
  text-decoration: none;
  

  &.current-page {
    border-bottom: 2px solid #222;
    color: #4F5ABF;
  }

  &:last-of-type {
    margin-right: 0;
  }

`;

const Header = ({ siteTitle }) => (
  <header 
    css={css`
      background: transparnet;
      
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem calc((100vw - 1135px - 0.5rem) / 2);
      height: 72px;
    `}
  >
    <NavLink to="/about" fontWeight="bold">Anastasiia Pyvovarova</NavLink>
    <nav css={css`
      margin-top: 0;
    `}>
      <NavLink to="/about" activeClassName="current-page">Bio</NavLink>
      <NavLink to="/work" activeClassName="current-page">Work</NavLink>
      <NavLink to="/resume" activeClassName="current-page">Resume</NavLink>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
