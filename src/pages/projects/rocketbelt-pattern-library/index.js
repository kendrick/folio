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
      {images.intro.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}
      {images.sketch.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}
      {images.site.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}
      <h2>Overview</h2>
      <h3>Challenge</h3>
      <p>
        A survey of the site and an audit of our CSS identified a large number
        of inconsistencies in UI implementation and in brand elements.
      </p>
      <h3>Approach</h3>
      <p>
        We cataloged patterns in 3 buckets: those that needed to persist, those
        that needed to be updated, and those that needed to be eliminated.
      </p>
      <h3>Outcome</h3>
      <p>
        The organization has a common visual language between design &
        development and our CSS payload was reduced.
      </p>
      <h3>Role</h3>
      <p>
        Lead UX Architect. Performed technical audit; presented proposed remedy
        to executives; built front-end library; built corresponding Sketch
        library; led & mentored developers in contributing updates.
      </p>
      <h2>Research</h2>
      <h3>Heuristic Analysis</h3>
      <p>
        Tasked with unifying both our UI and branded elements, I sought to
        catalog the existing inconsistency on the site. Remedying these issues
        would require collaboration from colleagues in E-Commerce and in
        marketing, so I presented my findings along with a primer on responsive
        web design, to VPs in those areas. I also presented more informally to
        our development team and our creative teams.
      </p>
      113 font sizes 32 blues ARTIFACT: RB keynote screenshots After the
      conversations, I did a quick competitive analysis to determine how other
      e-commerce sites leveraged pattern libraries. I found that nearly all of
      them had home-grown libraries. After discussions with leaders in the IT
      organization, we decided that it would likely be more work to customize an
      existing pattern library for our needs than it would be to build our own.
      Implementation & Development After building consensus (for what? action?),
      I identified the most commonly-used patterns and laid out reusable symbols
      in a Sketch library file to be used by our designers. I also built
      corresponding UI elements in HTML, CSS, and Javascript for use by the
      development team. ARTIFACT: Sketch file Once a primary collection of
      patterns was built, I recruited developers to help us round it out.
      ARTIFACT: Screenshot of site :| Next Steps The pattern library is a really
      easy bridge to maintain rapport with our development partners, and we
      continue to collaborate on component updates. We recently noticed that
      Rocketbelt is component-heavy but lacks exposition in some areas, and that
      its information architecture is a bit muddy. We’re currently working on a
      redesign of the site that will remedy these issues.
      <p>
        <Link to="/projects">←Back to Projects</Link>
      </p>
    </Layout>
  );
};

export default Rocketbelt;
