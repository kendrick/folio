import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const BackToProjects = ({ children, overview }) => {
  return (
    <div
      className="button"
      css={css`
        margin-bottom: 3rem;
        padding: 0;
      `}
    >
      <Link
        to="/projects"
        css={css`
          padding: 0.5em 1em;
          display: inline-block;
        `}
      >
        ← Back to Projects
      </Link>
    </div>
  );
};

export default BackToProjects;
