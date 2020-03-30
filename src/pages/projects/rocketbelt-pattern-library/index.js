import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Artifacts from '../../../components/artifacts';
import Layout from '../../../components/layout';
import Image from '../../../components/image';
import SEO from '../../../components/seo';

import { css } from '@emotion/core';
import Overview from '../../../components/overview';

const Rocketbelt = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpe?g|png)/i" }
          relativePath: { regex: "/rocketbelt/i" }
          base: { regex: "/^[^-_]/i" }
        }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid(maxWidth: 1200) {
                src
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const images = {
    site: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('site-');
    }),
    intro: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('rb-intro-');
    }),
    sketch: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('sketch-');
    }),
  };
  return (
    <Layout>
      <SEO title="Kendrick Arnett › Projects › Rocketbelt Pattern Library" />
      <h1>Rocketbelt Pattern Library</h1>

      <Overview
        overview={{
          challenge: `A survey of the site and an audit of our CSS identified a large number
          of inconsistencies in UI implementation and in brand elements.`,
          approach: `We sorted patterns into 3 groups: those that needed to persist, those
          that needed to be updated, and those that needed to be eliminated.`,
          outcome: `The organization has a common visual language between design &
          development that's used daily; developers were excited to take part in
          the collaboration; Our CSS payload was greatly reduced.`,
          role: `As Lead UX Architect, I performed a technical audit and presented my
          proposed remedy to executives and other stakeholders. I subsequently
          built our front-end library and corresponding Sketch library, and led
          and mentored developers in contributing updates as needed.`,
        }}
      ></Overview>

      <h2>Research</h2>
      <h3>Heuristic Analysis</h3>
      <p>
        Tasked with unifying both our UI and branded elements, I sought to
        catalog the existing inconsistency on the site. Remedying these issues
        would require collaboration from colleagues in E-Commerce and in
        Marketing, so I presented my findings along with a primer on responsive
        web design, to VPs in those areas. I also presented more informally to
        our development team and our creative teams.
      </p>
      <p>
        (Of note: there were 113 different font sizes in use and 32
        similar-but-different shades of blue in use!)
      </p>

      <Artifacts
        artifacts={images.intro}
        caption={
          'Selected slides from the audit & responsive layout presentation.'
        }
        imageMinWidths={['140px', '180px']}
      />

      <p>
        After the conversations, I did a quick competitive analysis to determine
        how other e-commerce sites leveraged pattern libraries. I found that
        nearly all of them had home-grown libraries. After discussions with
        leaders in the IT organization, we decided that it would likely be more
        work to customize an existing pattern library for our needs than it
        would be to build our own.
      </p>

      <h2>Implementation & Development</h2>
      <p>
        After building consensus for an in-house designed library, I identified
        the most commonly-used patterns and laid out reusable symbols in a
        Sketch library file to be used by our designers. I also built
        corresponding UI elements in HTML, CSS, and Javascript for use by the
        development team.
      </p>

      <Artifacts
        artifacts={images.sketch}
        caption={'Sample composite symbols from the Sketch library.'}
      />

      <p>
        Once a primary collection of patterns was built, I recruited developers
        to help us round it out.
      </p>

      <Artifacts
        artifacts={images.site}
        caption={'Selected component pages from the sample site.'}
        imageMinWidths={['140px', '240px']}
        containerMaxWidths={['100%', '640px']}
      />

      <h2>Next Steps</h2>
      <p>
        I enjoy maintaining the pattern library because it's such an easy bridge
        to maintain rapport with our development partners, and we continue to
        collaborate on component updates. We recently noticed that Rocketbelt is
        component-heavy but lacks exposition in some areas, and that its
        information architecture is a bit muddy. We’re currently working on a
        redesign of the site that will remedy these issues.
      </p>

      <div
        className="button"
        css={css`
          margin-bottom: 3rem;
        `}
      >
        <Link to="/projects">← Back to Projects</Link>
      </div>
    </Layout>
  );
};

export default Rocketbelt;
