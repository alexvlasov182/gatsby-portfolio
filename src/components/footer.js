import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: underline;
  color: #4f5abf;

  &.current-page {
    border-bottom: 2px solid #222;
    color: #4f5abf;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Footer = () => (
  <footer
    css={css`
      height: 80px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
    `}
  >
    <nav css={css``}>
      <NavLink
        className="hover-link"
        target="_blank"
        to="https://www.linkedin.com/in/anastasiia-pyvovarova-a8b36216b/"
        activeClassName="current-page"
      >
        LinkedIn
      </NavLink>
      <NavLink
        className="hover-link"
        target="_blank"
        to="https://www.behance.net/anastasiya503d2"
        activeClassName="current-page"
      >
        Behance
      </NavLink>
      <NavLink
        className="hover-link"
        target="_blank"
        to="https://dribbble.com/leansquad"
        activeClassName="current-page"
      >
        Dribbble
      </NavLink>
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
