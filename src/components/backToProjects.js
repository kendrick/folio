import React from 'react';
import { css } from '@emotion/core';
import TransitionLink from 'gatsby-plugin-transition-link';

const BackToProjects = ({ children, overview }) => {
  return (
    <div
      className="button"
      css={css`
        margin-bottom: 3rem;
        padding: 0;
      `}
    >
      <TransitionLink
        to="/projects"
        css={css`
          padding: 0.5em 1em;
          display: inline-block;
        `}
      >
        ← Back to Projects
      </TransitionLink>
    </div>
  );
};

export default BackToProjects;
