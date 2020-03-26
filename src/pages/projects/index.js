import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import Image from '../../components/image';
import SEO from '../../components/seo';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { colors, fontSize } from '../../utils/rocketbelt';

const ProjectsUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const ProjectLi = styled.li`
  padding: 0;
  margin: 0;
  border: 1px solid ${colors.gray.plus2};
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: box-shadow 100ms linear;
  position: relative;

  &:hover {
    box-shadow: 0 2px 16px 0
      ${colors
        .chroma(colors.gray.minus2)
        .alpha(0.12)
        .css()};
  }

  &:active {
    box-shadow: 0 0px 4px 0
      ${colors
        .chroma(colors.gray.minus2)
        .alpha(0.18)
        .css()};
  }

  &.card a {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    min-height: 200px;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-end;
    text-decoration: none;

    &:hover {
      color: ${colors.gray.minus1};
    }

    &:active {
      color: ${colors.gray.minus2};
    }
  }

  h2 {
    align-self: flex-start;
    margin: 0;
    font-size: ${fontSize(0)};
    color: ${colors.gray.minus2};
    transition: color 100ms linear;
  }

  .card_summary {
    font-size: ${fontSize(-2)};
    color: ${colors.gray.base};
    font-style: italic;

    &::before {
      content: '';
      display: block;
      width: 2rem;
      height: 4px;
      background: #2e97b9;
      margin: 0.5rem 0;
    }
  }
`;

const ProjectsIndexPage = () => (
  <Layout>
    <SEO title="Kendrick Arnett › Projects" />
    <h1>Selected Projects</h1>

    <ProjectsUl className="card-list list-horizontal">
      <ProjectLi className="card card-search-autocomplete">
        <Link to={`/projects/search-autocomplete`} key="search-autocomplete">
          <h2>Search Autocomplete Experience</h2>
          <small className="card_summary">
            Helping customers find the right item faster.
          </small>
        </Link>
      </ProjectLi>
      <ProjectLi className="card">
        <Link to={`/projects/mobile-navigation`} key="mobile-navigation">
          <h2>Mobile Navigation Redesign</h2>
          <small className="card_summary">
            Eliminating dead ends and improving IxD.
          </small>
        </Link>
      </ProjectLi>
      <ProjectLi className="card">
        <Link
          to={`/projects/ideation-brand-differentiators`}
          key="ideation-brand-differentiators"
        >
          <h2>Ideation on Brand Differentiators</h2>
          <small className="card_summary">
            Cross-functional collaboration brings company expertise to
            customers.
          </small>
        </Link>
      </ProjectLi>
      <ProjectLi className="card">
        <Link
          to={`/projects/rocketbelt-pattern-library`}
          key="rocketbelt-pattern-library"
        >
          <h2>Rocketbelt Pattern Library</h2>
          <small className="card_summary">
            Building bridges & fostering consistency for designers & devs.
          </small>
        </Link>
      </ProjectLi>
    </ProjectsUl>

    {/* <h2>Other Project Highlights</h2>
    <ul>
      <li>Accessiblity Best Practices & Site Rehabilitation</li>
      <li>Taxonomy Research</li>
      <li>Checkout & Order Summary Refresh</li>
      <li>Promo Experience on PLPs & PDPs</li>
    </ul> */}
  </Layout>
);

export default ProjectsIndexPage;
