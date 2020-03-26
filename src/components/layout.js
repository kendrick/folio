/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import Header from './header';

import 'sanitize.css';
import { fontSize, media, colors } from '../utils/rocketbelt';

const Layout = ({ children, headerStyle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const globalCss = css`
    :root {
      font-size: 18px;
      --header-height: 47px;
      --header-lr-margin: 1rem;
      --padding-breakout: var(--header-lr-margin);
      --line-height: 1.66;
      --border-radius: 3px;
      --box-shadow: 0 2px 8px 0
        ${colors
          .chroma(colors.gray.minus2)
          .alpha(0.06)
          .css()};
      --border-color-light: ${colors
        .chroma(colors.gray.minus2)
        .alpha(0.1)
        .css()};

      ${media[1]} {
        --header-lr-margin: 2rem;
        --line-height: 1.5;
      }

      ${media[2]} {
        --header-lr-margin: 4rem;
        --header-height: calc(47px + 2rem);
      }
    }

    :root,
    body,
    #___gatsby,
    #gatsby-focus-wrapper,
    #layout-wrapper {
      height: 100%;
    }

    body {
      font-size: 1rem;
      line-height: var(--line-height);
    }

    p {
      margin-bottom: calc(var(--line-height) * 1rem);
    }

    h1 {
      font-size: ${fontSize(3)};

      ${media[1]} {
        font-size: ${fontSize(4)};
      }
    }

    h2 {
      font-size: ${fontSize(2)};

      ${media[1]} {
        font-size: ${fontSize(3)};
      }
    }

    h3,
    h4 {
      font-size: ${fontSize(1)};

      ${media[1]} {
        font-size: ${fontSize(2)};
      }
    }

    h1,
    h2,
    h3,
    h4 {
      margin: 0.5em 0 0.25em 0;
      line-height: 1.33;

      ${media[1]} {
        line-height: var(--line-height);
      }
    }

    .breakout {
      width: 100vw;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      padding: calc(var(--padding-breakout) / 2);
      display: flex;

      &.breakout-narrow {
        width: auto;
      }

      .breakout_image {
        flex: 1;

        &:not(:last-of-type) {
          margin-right: 1rem;
        }

        &.breakout_image-space-md {
          &:not(:last-of-type) {
            margin-right: 2rem;
          }
        }
      }
    }
  `;

  const Div = styled.div`
    background: #feffff;
  `;

  const Main = styled.main`
    padding: calc(var(--header-height)) 1rem 1rem 1rem;
    height: 100%;
    margin-left: auto;
    margin-right: auto;

    ${media[1]} {
      padding: calc(var(--header-height) + 1rem) 2rem 2rem 2rem;
      max-width: 88vw;
    }

    ${media[2]} {
      padding: calc(var(--header-height) + 3rem) 4rem 4rem 4rem;
      max-width: 84vw;
    }

    ${media[3]} {
      max-width: 1200px;
    }
  `;

  return (
    <Div id="layout-wrapper">
      <Global styles={globalCss} />
      <Header
        siteTitle={data.site.siteMetadata.title}
        headerStyle={headerStyle}
      />
      <Main>{children}</Main>
    </Div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
