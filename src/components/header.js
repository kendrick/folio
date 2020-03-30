import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/core';

import { colors, fontSize, media } from '../utils/rocketbelt';

const Header = ({ siteTitle, headerStyle }) => (
  <header
    css={css`
      height: var(--header-height);
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      top: 0;
      left: 0;
      right: 0;
    `}
  >
    <div
      className="header_gradient"
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 130%;
      `}
    >
      <svg
        viewBox="0 0 842 88"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        <defs>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
            <stop stop-color="#4911AE" offset="0%" />
            <stop stop-color="#472BAF" offset="17.347%" />
            <stop stop-color="#4447B0" offset="31.633%" />
            <stop stop-color="#4060B2" offset="44.082%" />
            <stop stop-color="#3A76B5" offset="55.918%" />
            <stop stop-color="#3586B7" offset="68.367%" />
            <stop stop-color="#3092B8" offset="82.653%" />
            <stop stop-color="#2E97B9" offset="100%" />
          </linearGradient>
        </defs>
        <path
          d="M0 17.515V88h841.523V17.515c-102.505-5.4-170.041-8.1-202.609-8.1-48.851 0-73.387 29.205-150.16 29.205-76.774 0-135.426-18.3-172.863-18.3-37.438 0-82.063 10.906-118.04 0C161.876 9.415 133.232 0 88.29 0 58.33 0 28.9 5.838 0 17.515z"
          transform="matrix(1 0 0 -1 0 88)"
          fill="url(#a)"
          fill-rule="evenodd"
        />
      </svg>
    </div>
    <div
      className="header_contents"
      css={css`
        display: flex;
        flex: 1;
        position: relative;
        align-items: center;
        justify-content: space-between;
        z-index: 1;
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
    </div>{' '}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Kendrick Arnett`,
};

export default Header;
