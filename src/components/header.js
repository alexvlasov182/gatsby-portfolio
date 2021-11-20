import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 56px 0 0;

  text-decoration: none;

  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => (
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
    <NavLink className="logo" to="/" fontWeight="bold">
      Anastasiia Vlasova
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink className="hover-link" to="/work" activeClassName="current-page">
        Work
      </NavLink>
      <NavLink
        className="hover-link"
        target="_blank"
        to="https://drive.google.com/file/d/1tSfC4kBZ9FeBVTdPLvKPyeQGpC_WEX3I/view"
        activeClassName="current-page"
      >
        Resume
      </NavLink>
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
