import React from 'react';

import Image from '../../components/image';
import SEO from '../../components/seo';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Tlink from '../../components/t-link';

import { colors, fontSize } from '../../utils/rocketbelt';

const ProjectsUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  margin-bottom: 1rem;
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
    padding: 2rem 2rem;
    position: relative;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    text-decoration: none;

    &:hover {
      color: ${colors.gray.minus1};

      .card_rule {
        transform: scaleX(1);
      }
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
    position: relative;

    font-size: ${fontSize(-2)};
    color: ${colors.gray.base};
    font-style: italic;
  }
  .card_rule {
    display: block;
    width: calc(100%);
    height: 4px;
    background: #2e97b9;
    margin: 0.5rem 0;
    transform: scaleX(0.1);
    transform-origin: 0 50%;
    transition: transform 300ms var(--ease-out);
  }
`;

const ProjectsIndexPage = ({ children, transitionStatus, entry, exit }) => {
  return (
    <div className={transitionStatus}>
      <SEO title="Kendrick Arnett › Projects" />
      <h1>Selected Projects</h1>

      <ProjectsUl className="card-list list-horizontal">
        <ProjectLi className="card">
          <Tlink
            to={`/projects/ideation-brand-differentiators`}
            key="ideation-brand-differentiators"
          >
            <h2>Ideation on Brand Differentiators</h2>
            <div className="card_rule"></div>
            <small className="card_summary">
              Cross-functional collaboration brings company expertise to
              customers.
            </small>
          </Tlink>
        </ProjectLi>
        <ProjectLi className="card card-search-autocomplete">
          <Tlink to={`/projects/search-autocomplete`} key="search-autocomplete">
            <h2>Search Autocomplete Experience</h2>
            <div className="card_rule"></div>
            <small className="card_summary">
              Helping customers find the right item faster.
            </small>
          </Tlink>
        </ProjectLi>
        <ProjectLi className="card">
          <Tlink to={`/projects/mobile-navigation`} key="mobile-navigation">
            <h2>Mobile Navigation Redesign</h2>
            <div className="card_rule"></div>
            <small className="card_summary">
              Eliminating dead ends and improving IxD.
            </small>
          </Tlink>
        </ProjectLi>
        <ProjectLi className="card">
          <Tlink
            to={`/projects/rocketbelt-pattern-library`}
            key="rocketbelt-pattern-library"
          >
            <h2>Rocketbelt Pattern Library</h2>
            <div className="card_rule"></div>
            <small className="card_summary">
              Building bridges & fostering consistency for designers & devs.
            </small>
          </Tlink>
        </ProjectLi>
        <ProjectLi className="card">
          <Tlink
            to={`/projects/ab-multivariate-testing`}
            key="ab-multivariate-testing"
          >
            <h2>A/B & Multivariate Testing</h2>
            <div className="card_rule"></div>
            <small className="card_summary">
              Quantitatively measuring the experience.
            </small>
          </Tlink>
        </ProjectLi>
      </ProjectsUl>

      {/* <h2>Other Project Highlights</h2>
    <ul>
      <li>Accessiblity Best Practices & Site Rehabilitation</li>
      <li>Taxonomy Research</li>
      <li>Checkout & Order Summary Refresh</li>
      <li>Promo Experience on PLPs & PDPs</li>
    </ul> */}
    </div>
  );
};

export default ProjectsIndexPage;
