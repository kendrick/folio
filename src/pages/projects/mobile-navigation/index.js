import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../../components/layout';
import SEO from '../../../components/seo';

import './mobile-navigation.css';

const MobileNavPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpe?g|png)/i" }
          relativePath: { regex: "/mobile-navigation/i" }
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
    competitiveAnalysis: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('ca-');
    }),
    ixd: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('ixd-');
    }),
    researchReport: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('research-report-');
    }),
    visualDesign: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('visual-design-');
    }),
  };

  return (
    <Layout>
      <SEO title="Kendrick Arnett › Projects › Mobile Navigation Redesign" />
      <h1>Mobile Navigation Redesign</h1>
      <h2>Overview</h2>
      <h3>Challenge</h3>
      <p>
        Navigation site-wide displayed poor interaction design & feedback, and
        presented few modes of alternate navigation or product finding for
        customers who were having trouble finding the right product. We were
        also presented the business need to make it easier for customers to
        contact our Customer Relations team via lower-cost channels like chat or
        text message.
      </p>

      <h3>Approach</h3>
      <p>
        Our analytics team identified the need for alternate navigation paths
        beyond our primary category navigation. With this knowledge, I performed
        a thorough competitive analysis and collected secondary research to
        drive the experience.
      </p>

      <h3>Outcome</h3>
      <p>
        The site has clearer navigation indicators and customers can contact our
        Customer Relations team instantly from our main navigation, where
        they’re most likely to look for it. However, much of the design remains
        in the team’s backlog.
      </p>
      <h3>Role</h3>
      <p>
        Lead UX Architect. I collaborated with our product owner, web analyst,
        and our remote development team. The primary stakeholder was the VP of
        e-commerce.
      </p>

      <h2>Research</h2>
      <h3>Primary Research</h3>
      <p>
        I did extensive research among our competitors and other best-in-class
        e-commerce sites. I also performed a thorough heuristic analysis of our
        own site to quantify where we were falling short.
      </p>

      <aside className="artifacts artifacts-competitive-analysis">
        <div className="images">
          {images.competitiveAnalysis.map(({ node }) => {
            return (
              <figure key={node.id}>
                <Img fluid={node.childImageSharp.fluid} />
              </figure>
            );
          })}
        </div>
        <span className="caption">
          Sample of sites used in competitive analysis.
        </span>
      </aside>

      <h3>Secondary Research</h3>
      <p>
        I also referenced Baymard Institute’s exhaustive Mobile Usability
        report, as well as Nielsen Norman Group articles to generate a list of
        validated best practices. Some action items I gathered included:
      </p>
      <ul>
        <li>Making our footer navigation more prominent</li>
        <li>Adding a search input near the bottom of the page</li>
        <li>Including “Top Product” results below tile navigation</li>
        <li>Testing a menu-like tile nav list instead of a grid of tiles</li>
      </ul>
      <p>
        I compiled both my primary & secondary research findings into a
        presentation that I delivered to our VP of E-Commerce.
      </p>

      <h2>Design</h2>
      <h3>Interaction Design</h3>
      <p>
        Some of the changes we needed to make were improvements in interaction
        design and had little visual impact. The scope of these interaction
        updates was broad, though: interaction in the site’s main navigation,
        visual/tile navigation, header, and footer would all be affected.
      </p>
      <p>
        Working closely with our product owner, I clearly outlined these
        interaction requirements to be included in user stories. I also built
        examples on Codepen to demonstrate desired animations & interactions.
      </p>

      <aside className="artifacts artifacts-nav artifacts-ixd">
        <div className="images">
          {images.ixd.map(({ node }) => {
            return (
              <a href={node.childImageSharp.fluid.src}>
                <figure key={node.id}>
                  <Img fluid={node.childImageSharp.fluid} />
                </figure>
              </a>
            );
          })}
        </div>
        <span className="caption">Detailed IxD notes.</span>
      </aside>

      <h3>Wireframes/Visual Design</h3>
      <p>
        Because of the lower impact on visual design, the team agreed that they
        could build the experience based on medium-fidelity wireframes. I built
        these in Sketch with our pattern library.
      </p>

      <aside className="artifacts artifacts-nav artifacts-visual-design">
        <div className="images">
          {images.visualDesign.map(({ node }) => {
            return (
              <a href={node.childImageSharp.fluid.src}>
                <figure key={node.id}>
                  <Img fluid={node.childImageSharp.fluid} />
                </figure>
              </a>
            );
          })}
        </div>
        <span className="caption">Detailed IxD notes.</span>
      </aside>

      <h2>Next Steps</h2>
      <p>
        The site has clearer navigation indicators and customers can contact our
        customer relations team instantly from our main navigation, where
        they’re most likely to look for it. Due to capital constraints, however,
        much of the rest of the design remains in the team’s backlog.
      </p>

      {/* {images.visualDesign.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}

      {images.competitiveAnalysis.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}

      {images.ixd.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}

      {images.researchReport.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })} */}
      <div className="link-wrapper">
        <Link to="/projects">← Back to Projects</Link>
      </div>
    </Layout>
  );
};

export default MobileNavPage;
