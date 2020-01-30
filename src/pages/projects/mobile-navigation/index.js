import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../../components/layout';
import SEO from '../../../components/seo';

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
      {images.visualDesign.map(({ node }) => {
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
      })}
      <p>
        <Link to="/projects">←Back to Projects</Link>
      </p>
    </Layout>
  );
};

export default MobileNavPage;
