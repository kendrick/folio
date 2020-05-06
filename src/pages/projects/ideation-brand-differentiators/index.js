import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../../components/layout';
import SEO from '../../../components/seo';

import Artifacts from '../../../components/artifacts';
import Overview from '../../../components/overview';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import BackToProjects from '../../../components/backToProjects';

const BrandDifferentiation = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpe?g|png)/i" }
          relativePath: { regex: "/ideation-brand-differentiators/i" }
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
    affinityMaps: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('affinity-map-');
    }),
    clusteredIdeas: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('clustered-ideas-');
    }),
    affinityMaps: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('affinity-map-');
    }),
    p1labsIntro: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('p1labs-intro');
    }),
    userFlow: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('user-flow');
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

      <Artifacts
        artifacts={images.p1labsIntro}
        caption={'Excerpts from our introduction to the method.'}
        imageMinWidths={['280px', '180px']}
      />

      <p>
        It took some patience and calendar Tetris to reconvene the groups, but
        we met for several 120-minute sessions. The sessions were loosely
        structured around the individual days of a Design Sprint and followed a
        double-diamond, focus-and-flare approach.
      </p>

      <Artifacts
        artifacts={images.session}
        caption={'Clustered Post-Its from two of the sessions.'}
      />

      <p>
        The group voted on 2 “How Might We?” questions to explore answers to. We
        constructed affinity diagrams that clustered ideas and plotted them on
        impact & effort axes. I made digital versions of these maps that would
        be used later.
      </p>

      <p>
        We recognized that many of the ideas involved customers seeking
        affirmation of their sense of style, and assistance in finding the
        perfect item.
      </p>

      <Artifacts
        artifacts={images.affinityMaps}
        caption={"Affinity maps created from the sessions' ideas."}
      />

      <p>
        If we knew specifics around a customer’s sense of style, we could offer
        tailor-made recommendations. We also surfaced an idea that involved
        bringing 1-on-1 decorating advice to a customer, no matter the
        customer’s location.
      </p>

      <p>
        Based on these observations, the group voted on potential solutions and
        decided to solve several of these customer needs at once with a mobile
        app. This idea was enthusiastically approved by our executive
        stakeholder.
      </p>

      <h2>Design</h2>
      <p>
        We were given a very short timeframe, and the sponsor of this project
        had specifically asked to see our output at a higher fidelity than
        wireframes.
      </p>

      <h3>User Flow</h3>
      <p>
        To be sure the group was aligned, I constructed a high-level user flow
        diagram of the idea. This diagram would allow us to double-check the
        feasibility of our idea with partners in IT and Marketing.
      </p>

      <Artifacts
        artifacts={images.userFlow}
        caption={
          'User flow diagram used for alignment & feasibility validation.'
        }
        imageMinWidths={['120px', '120px']}
      />

      <p>
        I built medium-fidelity mockups to represent the proposed direction of
        the visual design. Next I built a clickable prototype to demonstrate
        with our stakeholders.
      </p>

      <Artifacts
        artifacts={images.proto}
        caption={'Selected screens from the prototype.'}
        imageMinWidths={['120px', '120px']}
      />

      <h2>Next Steps</h2>
      <p>
        Unfortunately, this project wasn't fully realized as our executive
        sponsor left the company. Nonetheless, the collective experience broke
        down organizational silos and built long-standing bridges across teams.
      </p>

      <BackToProjects />
    </Layout>
  );
};

export default BrandDifferentiation;
