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
              viewBox="0 0 126 171"
              xmlns="http://www.w3.org/2000/svg"
              css={css`
                height: 1em;
              `}
            >
              <path
                d="M10.782 166.968L13.555 171H8l2.782-4.032zm56.106-81.306L125.555 171h-6.334L63.555 90.493l3.333-4.831zm-8.015 11.615L109.555 171h-6.334l-47.658-68.926 3.31-4.797zm-8.015 11.615L93.555 171h-6.334l-39.65-57.344 3.287-4.764zm-8.015 11.615L77.555 171h-6.334l-31.642-45.762 3.264-4.731zm-8.015 11.616L61.555 171h-6.334l-23.634-34.181 3.241-4.696zm-8.015 11.615L45.555 171h-6.334l-15.626-22.599 3.218-4.663zm-8.016 11.615L29.555 171h-6.334l-7.619-11.017 3.195-4.63zM117.555 0L0 171v-10.144L111.22 0h6.335zm-16 0L-.004 147.731 0 137.724 95.22 0h6.335zm-16 0L.004 124.446 0 114.612 79.22 0h6.335zm-16 0L0 101.196l-.003-9.757L63.22 0h6.335zm-16 0L-.002 77.906 0 68.318 47.22 0h6.335zm-16 0L0 54.612v-9.405L31.22 0h6.335zm-16 0L-.003 31.358 0 22.027 15.22 0h6.335zm-16 0L0 8.105V0h5.555z"
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
