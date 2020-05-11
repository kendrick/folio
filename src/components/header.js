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
    {/* <div
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
            <stop stopColor="#4911AE" offset="0%" />
            <stop stopColor="#472BAF" offset="17.347%" />
            <stop stopColor="#4447B0" offset="31.633%" />
            <stop stopColor="#4060B2" offset="44.082%" />
            <stop stopColor="#3A76B5" offset="55.918%" />
            <stop stopColor="#3586B7" offset="68.367%" />
            <stop stopColor="#3092B8" offset="82.653%" />
            <stop stopColor="#2E97B9" offset="100%" />
          </linearGradient>
        </defs>
        <path
          d="M0 17.515V88h841.523V17.515c-102.505-5.4-170.041-8.1-202.609-8.1-48.851 0-73.387 29.205-150.16 29.205-76.774 0-135.426-18.3-172.863-18.3-37.438 0-82.063 10.906-118.04 0C161.876 9.415 133.232 0 88.29 0 58.33 0 28.9 5.838 0 17.515z"
          transform="matrix(1 0 0 -1 0 88)"
          fill="url(#a)"
          fillRule="evenodd"
        />
      </svg>
    </div> */}
    <div
      className="header_contents"
      css={css`
        display: flex;
        flex: 1;
        position: relative;
        align-items: center;
        z-index: 1;
        height: 100%;
      `}
    >
      <span className={`site-title`} style={{ margin: 0 }}>
        <Link
          to="/"
          css={css`
            display: inline-flex;
            align-items: center;
            text-decoration: none;
            color: ${colors.gray.minus2};
          `}
        >
          <span
            className="header_logo"
            css={css`
              margin-left: var(--header-lr-margin);
              color: gray;
              font-size: ${fontSize(5)};
            `}
          >
            <svg
              css={css`
                height: 1em;
              `}
              viewBox="0 0 127 142"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M86.86 0L1.008 103.341l-.004-8.166L80.502 0h6.358zM1.004 84.034l-.003-8.102L64.446 0h6.357L1.004 84.034zM54.747 0L1.002 64.694l.002-7.962L48.39 0h6.357zM1.004 45.35v-7.81L32.334 0h6.357L1.004 45.35zM.001 26.04l.003-7.749L15.277 0h6.358L0 26.04zM1.004 6.73V0h5.575L1.004 6.73z"
                  fill="#4911AE"
                />
                <path
                  d="M11.824 138.652L14.607 142H9.032l2.792-3.348zm56.303-67.517L127 142h-6.356L64.782 75.146l3.345-4.011zm-8.043 9.645l50.86 61.22h-6.356L56.762 84.763l3.322-3.983zm-8.043 9.645L94.888 142H88.53L48.742 94.381l3.299-3.956zm-8.044 9.645L78.831 142h-6.356l-31.753-38.001 3.275-3.929zm-8.043 9.646L62.775 142H56.42l-23.717-28.384 3.252-3.9zm-8.043 9.645L46.72 142h-6.356l-15.681-18.766 3.23-3.873zm-8.044 9.646L30.663 142h-6.356l-7.646-9.149 3.206-3.844z"
                  fill="#4911AE"
                />
                <path
                  fill="#4911AE"
                  d="M118.972 0L1.004 142v-8.424L112.614 0z"
                />
                <path
                  fill="#4911AE"
                  d="M102.916 0L1 122.677l.004-8.31L96.558 0z"
                />
              </g>
            </svg>
          </span>
          <span
            css={css`
              display: none;
              visibility: hidden;

              ${media[1]} {
                margin-left: 0.5rem;
                font-weight: 300;
                display: inline-block;
                visibility: visible;
                font-size: ${fontSize(5)};
              }
            `}
          >
            Kendrick Arnett
          </span>
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
            color: ${colors.gray.minus2};
            /* font-weight: 300; */
            display: inline-flex;
            height: 2em;
            align-items: center;
            text-transform: uppercase;
            text-decoration: none;
            box-shadow: inset 0 0 0 0 transparent;
            transition: box-shadow 200ms cubic-bezier(0.39, 0.575, 0.565, 1);

            &:hover {
              box-shadow: inset 0 -4px 0 0px ${colors.gradient.light};
            }
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
        <li className="link-wrapper " key="resume">
          <a href="/kendrick-arnett-resume.pdf" className="header_nav-link">
            Resume
          </a>
        </li>
      </ul>
      <div
        className="bar"
        css={css`
          background: transparent;
          height: 8px;
          width: 100%;
          position: absolute;
          overflow: hidden;
          bottom: -8px;

          &::after {
            content: '';
            display: block;
            height: 200vh;
            position: relative;
            top: -100vh;
            transform: rotate(-2186deg);
            background: linear-gradient(
              to right,
              #4911ae 0%,
              #4735af 23%,
              #415ab2 41%,
              #3979b5 57%,
              #328eb8 76%,
              #2e97b9 100%
            );
            animation: bar 12s infinite linear;
          }

          @keyframes bar {
            from {
              transform: rotate(0deg) scale(2);
            }

            to {
              transform: rotate(360deg) scale(1);
            }
          }
        `}
      ></div>
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
