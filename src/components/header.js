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
        z-index: 1;
      `}
    >
      <span className={`site-title`} style={{ margin: 0 }}>
        <Link
          to="/"
          css={css`
            /* margin-left: 1rem; */
            text-decoration: none;
            color: white;
          `}
        >
          <span
            className="header_logo"
            css={css`
              margin-left: var(--header-lr-margin);
              color: white;
              font-size: 1.8rem;
            `}
          >
            <svg
              viewBox="0 0 126 142"
              xmlns="http://www.w3.org/2000/svg"
              css={css`
                height: 1em;
              `}
            >
              <path
                d="M10.824 138.652L13.607 142H8.032l2.792-3.348zm56.303-67.517L126 142h-6.356L63.782 75.146l3.345-4.011zm-8.043 9.645l50.86 61.22h-6.356L55.762 84.763l3.322-3.983zM93.888 142H87.53L47.742 94.381l3.299-3.956L93.888 142zm-16.057 0h-6.356l-31.753-38.001 3.275-3.929L77.831 142zm-16.056 0H55.42l-23.717-28.384 3.252-3.9L61.775 142zm-34.864-22.639L45.72 142h-6.356l-15.681-18.766 3.23-3.873zM29.663 142h-6.356l-7.646-9.149 3.206-3.844L29.663 142zM117.972 0L.004 142v-8.424L111.614 0h6.358zm-16.056 0L0 122.677l.004-8.31L95.558 0h6.358zM85.86 0L.008 103.341l-.004-8.166L79.502 0h6.358zM.004 84.034l-.003-8.102L63.446 0h6.357L.004 84.034zM53.747 0L.002 64.694l.002-7.962L47.39 0h6.357zM.004 45.35v-7.81L31.334 0h6.357L.004 45.35zM.001 26.04l.003-7.749L15.277 0h6.358L0 26.04zM.004 6.73V0h5.575L.004 6.73z"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
          </span>
          <span
            css={css`
              text-transform: uppercase;
              display: none;
              visibility: hidden;

              ${media[1]} {
                margin-left: 0.5rem;
                display: inline-block;
                visibility: visible;
                font-size: ${fontSize(0)};
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
          justify-self: flex-end;
          flex: 1;
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
