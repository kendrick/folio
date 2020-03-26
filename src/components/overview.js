import React from 'react';
import styled from '@emotion/styled';
import { media, fontSize, colors } from '../utils/rocketbelt';

const Overview = ({ children, overview }) => {
  const headingLevel = overview.headingLevel || 2;
  const H = `h${headingLevel}`;
  const SubH = `h${headingLevel + 1}`;

  const Over = styled.section`
    .overview_lines {
      display: flex;
      flex-direction: column;

      ${media[1]} {
        border: 1px solid var(--border-color-light);
        display: grid;
        padding: 1rem;
        grid-gap: 1rem;
        grid-auto-columns: auto;
        grid-template-areas: 'subhead content';
        flex-direction: column;
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
        font-size: ${fontSize(-1)};

        .overview_subhead {
          font-size: ${fontSize(-1)};
          margin: 0;
        }

        .overview_text {
          margin-bottom: 0;
        }
      }
    }
  `;

  return (
    <Over>
      <H>Overview</H>
      <div className="overview_lines">
        <SubH className="overview_subhead">Challenge</SubH>
        <p className="overview_text">{overview.challenge}</p>

        <SubH className="overview_subhead">Approach</SubH>
        <p className="overview_text">{overview.approach}</p>

        <SubH className="overview_subhead">Outcome</SubH>
        <p className="overview_text">{overview.outcome}</p>

        <SubH className="overview_subhead">Role</SubH>
        <p className="overview_text">{overview.role}</p>
      </div>
    </Over>
  );
};

export default Overview;
