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
      <p>
        <Link to="/projects">←Back to Projects</Link>
      </p>
    </Layout>
  );
};

export default MobileNavPage;
