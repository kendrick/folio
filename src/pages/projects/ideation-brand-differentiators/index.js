import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../../components/layout';
import SEO from '../../../components/seo';

import Overview from '../../../components/overview';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const BrandDifferentiation = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpe?g|png)/i" }
          relativePath: { regex: "/ideation-brand-differentiators/i" }
          base: { regex: "/^[^-]/i" }
        }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid(maxWidth: 1024) {
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
    affinityMaps: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('affinity-map-');
    }),
    clusteredIdeas: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('clustered-ideas-');
    }),
    p1labsIntro: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('p1labs-intro');
    }),
    proto: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('prototype-');
    }),
    session: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('session-');
    }),
  };

  return (
    <Layout>
      <SEO title="Kendrick Arnett › Projects › Ideation" />
      <h1>Ideation on Brand Differentiators</h1>
      <Overview
        overview={{
          challenge: `An executive stakeholder wanted a large number of customer experience
          ideas that emphasized the company’s competitive advantages.`,
          approach: `We held several cross-functional Design Thinking workshops to generate
          ideas drawing from the large body of knowledge of company associates.
          Participants included members of teams in E-Commerce, Stores, Marketing,
          Customer Relations, Development, Product Management, Merchandising, and
          Data Science.`,
          outcome: `I presented a mobile app prototype that provided 1:1 home decorating
          appointments with a company associate, along with prioritized affinity
          maps around two separate themes.`,
          role: `I facilitated our design thinking sessions, built the digital artifacts,
          and presented to stakeholders & our executive sponsor to obtain buy-in.`,
        }}
      ></Overview>

      <h2>Ideation Sessions</h2>
      <p>
        Design thinking was new within the organization, so I had the
        responsibility of selling it to stakeholders so that we could collect
        such a diverse group. Once I received the green light, I conducted a
        brief session introducing each group to the method.
      </p>

      <aside className="artifacts artifacts-ideation artifacts-intro">
        <div className="images breakout">
          {images.p1labsIntro.map(({ node }) => {
            return (
              <a
                href={node.childImageSharp.fluid.src}
                key={node.id}
                className="breakout_image"
              >
                <figure>
                  <Img fluid={node.childImageSharp.fluid} />
                </figure>
              </a>
            );
          })}
        </div>
        <span className="caption">
          Excerpts from our introduction to the method.
        </span>
      </aside>

      <p>
        It took some patience and calendar Tetris to reconvene the groups, but
        we met for 120-minute sessions. The general structure of the sessions
        followed a double-diamond, focus-and-flare approach.
      </p>

      <aside className="artifacts artifacts-ideation artifacts-session">
        <div className="images breakout">
          {images.session.map(({ node }) => {
            return (
              <a
                href={node.childImageSharp.fluid.src}
                key={node.id}
                className="breakout_image"
              >
                <figure>
                  <Img fluid={node.childImageSharp.fluid} />
                </figure>
              </a>
            );
          })}
        </div>
        <span className="caption">
          Clustered Post-Its from two of the sessions.
        </span>
      </aside>

      <p>
        The group constructed affinity diagrams that clustered ideas and plotted
        them on impact & effort axes. I made digital versions of these maps that
        would be used later.
      </p>

      <p>
        We recognized that many of the ideas involved customers seeking
        affirmation of their sense of style, and assistance in finding the
        perfect item.
      </p>

      <p>
        If we knew specifics around a customer’s sense of style, we could offer
        tailor-made recommendations. We also surfaced an idea that involved
        bringing 1-on-1 decorating advice to a customer, no matter the
        customer’s location.
      </p>

      <p>
        Based on these observations, the group decided to solve several of these
        customer needs at once with a mobile app.{' '}
      </p>

      <h2>Design</h2>
      <p>
        We were given a very short timeframe, and the executive sponsor of this
        project had specifically asked to see our output at a higher fidelity
        than wireframes.
      </p>

      <p>
        I built medium-fidelity mockups to represent the proposed direction of
        the visual design. Next I built a clickable prototype to demonstrate
        with our stakeholders.
      </p>

      <aside className="artifacts artifacts-ideation artifacts-proto">
        <div className="images breakout">
          {images.proto.map(({ node }) => {
            return (
              <a
                href={node.childImageSharp.fluid.src}
                key={node.id}
                className="breakout_image"
              >
                <figure>
                  <Img fluid={node.childImageSharp.fluid} />
                </figure>
              </a>
            );
          })}
        </div>
        <span className="caption">Selected screens from the prototype.</span>
      </aside>

      <h2>Next Steps</h2>
      <p>
        Unfortunately, this project wasn't fully realized as our executive
        sponsor left the company.
      </p>

      {/* {images.session.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}
      {images.proto.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}
      {images.affinityMaps.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}
      {images.clusteredIdeas.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}
      {images.p1labsIntro.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })} */}
      <div className="link-wrapper">
        <Link to="/projects">← Back to Projects</Link>
      </div>
    </Layout>
  );
};

export default BrandDifferentiation;
