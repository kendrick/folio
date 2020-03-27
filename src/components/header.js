import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/core';

import { colors, fontSize, media } from '../utils/rocketbelt';

const Header = ({ siteTitle, headerStyle }) => (
  <header
    css={css`
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
        ${colors.gradient.dark},
        ${colors.gradient.light}
      );
      height: var(--header-height);
    `}
  >
    <span className={`site-title`} style={{ margin: 0 }}>
      <Link
        to="/"
        css={css`
          margin-left: var(--header-lr-margin);
          text-decoration: none;
          color: white;
        `}
      >
        <span
          css={css`
            text-transform: uppercase;

            ${media[1]} {
              font-size: ${fontSize(1)};
            }
          `}
        >
          Kendrick Arnett
        </span>
        <small
          css={css`
            display: none;
            visibility: hidden;
            font-size: ${fontSize(-2)};

            ${media[1]} {
              display: inline-block;
              visibility: visible;
              margin-left: 0.5rem;
            }
          `}
        >
          UX Leader
        </small>
      </Link>
    </span>

    <ul
      className="list-horizontal"
      css={css`
        list-style-type: none;
        margin: 0;
        margin-right: var(--header-lr-margin);
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        li {
          margin: 0;
          margin-left: 0.5rem;
          margin-right: 0;
        }

        .header_nav-link {
          color: white;
        }
      `}
    >
      <li className="link-wrapper" key="projects">
        <Link to="/projects" className="header_nav-link">
          Projects
        </Link>
      </li>
      <li className="link-wrapper " key="about">
        <Link to="/about" className="header_nav-link">
          About
        </Link>
      </li>
    </ul>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Kendrick Arnett`,
};

export default Header;
