import React from 'react';
import SEO from '../components/seo';

import { css } from '@emotion/core';
import { media } from '../utils/rocketbelt';
import gsap from 'gsap';

import TransitionLink from 'gatsby-plugin-transition-link';

const IndexPage = () => (
  <>
    <SEO title="Kendrick Arnett › UX Leader" />
    <div
      className="content"
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;

        ${media[1]} {
          max-width: 66vw;
        }

        ${media[2]} {
          max-width: 50vw;
        }

        ${media[3]} {
          max-width: 33vw;
        }
      `}
    >
      <h1>Hi, I'm Kendrick Arnett</h1>

      <p>A Lead UX Architect in Fort Worth, TX.</p>
      <p>
        I'm passionate about uncovering the little points of friction that cause
        customers pain and designing thoughtful solutions to remedy them.
      </p>
    </div>
  </>
);

export default IndexPage;
