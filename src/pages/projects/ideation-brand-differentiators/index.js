import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../../components/layout';
import SEO from '../../../components/seo';

const BrandDifferentiation = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpe?g|png)/i" }
          relativePath: { regex: "/ideation-brand-differentiators/i" }
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
      {images.session.map(({ node }) => {
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
      })}
      <p>
        <Link to="/projects">←Back to Projects</Link>
      </p>
    </Layout>
  );
};

export default BrandDifferentiation;
