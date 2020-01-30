import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../../components/layout';
import Image from '../../../components/image';
import SEO from '../../../components/seo';

const Rocketbelt = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpe?g|png)/i" }
          relativePath: { regex: "/rocketbelt/i" }
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
      <h2></h2>
      {/* {images.intro.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}
      {images.sketch.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}
      {images.site.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })} */}

      <p>
        <Link to="/projects">← Back to Projects</Link>
      </p>
    </Layout>
  );
};

export default Rocketbelt;
