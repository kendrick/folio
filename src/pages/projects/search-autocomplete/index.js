import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import Overview from '../../../components/overview';

import { css } from '@emotion/core';

const SearchAutocompletePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpe?g|png)/i" }
          relativePath: { regex: "/search-autocomplete/i" }
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
                ...GatsbyImageSharpFluid
                src
              }
            }
          }
        }
      }
    }
  `);

  const images = {
    heuristic: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('heuristic-');
    }),
    ixd: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('ixd-');
    }),
    research: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('research-');
    }),
    visualDesign: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('visual-design-');
    }),
    wireframes: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('wireframe-');
    }),
  };

  return (
    <Layout>
      <SEO title="Kendrick Arnett › Projects › Search Autocomplete" />
      <h1>Search Autocomplete Experience</h1>
      <Overview
        overview={{
          challenge: `Our e-commerce website had an out-of-the-box search experience that
        wasn’t tailored to the behavior of our customers or to their shift
        toward mobile devices.`,
          approach: `We sought to drive engagement with product & search suggestions within
        the search dropdown to streamline the customer experience. Our hope
        was that we could surface just what the customer was looking for
        before she’d even finished typing her search term.`,
          outcome: `The project saw a 9.9% lift in RPV for customers who interact with a
        search suggestion as well as a 27% lift in Conversion for customers
        who interact with a suggested product in the autocomplete container.`,
          role: `Lead UX Architect. I worked closely with our product owner and our
        remote development team. Stakeholders included the VP of e-commerce
        and our internal search specialist.`,
        }}
      ></Overview>

      <h2>Research</h2>
      <h3>Primary Research</h3>
      <p>
        I performed behavioral analysis in Adobe Analytics to gain insight on
        customers’ usage of our existing search functionality.
      </p>
      <p>
        I was surprised to find that customers were about 8% more likely to
        search on mobile than on desktop, though customers on desktop performed
        more searches per visit. Additionally, mobile customers who engaged the
        search function had an RPV three times higher than that of customers who
        didn’t search, and viewed 50% more product.
      </p>
      <p>
        I collaborated with our Internal Search Specialist to gather most
        commonly-searched terms across both mobile & desktop, which would
        ultimately inform my design decisions.
      </p>

      <aside className="artifacts">
        <div className="images">
          {images.research.map(({ node }) => {
            return (
              <figure key={node.id}>
                <Img fluid={node.childImageSharp.fluid} />
              </figure>
            );
          })}
        </div>
        <span className="caption">Analytics dashboard.</span>
      </aside>

      <h3>Heuristic Analysis</h3>
      <p>
        After a quick survey of other retailers, I performed a heuristic
        analysis of our existing search functionality. Some of my findings were:
      </p>
      <ul>
        <li>Only 1 autocomplete suggestion</li>
        <li>No busy indicator</li>
        <li>No contextual/category-specific search</li>
        <li>
          No images or product metadata to draw the eye or otherwise compel a
          customer to interact
        </li>
        <li>Search dropdown results were occluded by the keyboard on mobile</li>
        <li>
          Our most common search terms were for category names, yet these
          results were below product names
        </li>
      </ul>

      <aside className="artifacts artifacts-heuristic">
        <div className="images">
          {images.heuristic.map(({ node }) => {
            return (
              <figure key={node.id}>
                <Img
                  fluid={node.childImageSharp.fluid}
                  css={css`
                    width: 375px;
                  `}
                />
              </figure>
            );
          })}
        </div>
        <span className="caption">Old design used in heuristic analysis.</span>
      </aside>

      <h3>Secondary Research</h3>
      <p>
        In addition to my primary research, I consulted Baymard Institute’s
        exhaustive Mobile Usability report, as well as Nielsen Norman Group
        articles to gather a list of validated best practices.
      </p>

      <h2>Design</h2>
      <h3>Interaction Design</h3>
      <p>
        Based on this research, I knew it was important to introduce some new
        interactions to the site. We would enable customers to narrow the scope
        of their search by allowing autocomplete results to search within a
        category. We would also offer autocompleted category names as search
        suggestions, and incorporate recent searches into the list. The new
        design would also display better metadata around top product
        suggestions. Finally, we would need to account for a variety of device
        heights & widths that had previously not been accommodated.
      </p>

      <aside className="artifacts artifacts-ixd">
        <div className="images breakout">
          {images.ixd.map(({ node }) => {
            return (
              <a
                href={node.childImageSharp.fluid.src}
                className="breakout_image"
                key={node.id}
              >
                <figure>
                  <Img fluid={node.childImageSharp.fluid} />
                </figure>
              </a>
            );
          })}
        </div>
        <span className="caption">Detailed IxD notes.</span>
      </aside>

      <h3>Wireframes</h3>
      <p>
        To communicate the scope and breadth of these changes, I made low
        fidelity wireframes to present to the VP of E-Commerce and IT leaders.{' '}
      </p>

      <aside className="artifacts artifacts-wireframes">
        <div className="images breakout">
          {images.wireframes.map(({ node }) => {
            return (
              <a
                href={node.childImageSharp.fluid.src}
                className="breakout_image"
                key={node.id}
              >
                <figure>
                  <Img fluid={node.childImageSharp.fluid} />
                </figure>
              </a>
            );
          })}
        </div>
        <span className="caption">Mobile wireframe & desktop coverage.</span>
      </aside>

      <h3>Visual Design</h3>
      <p>
        I worked with our product owner to incorporate design & technical
        feeback. Informed by all this, I provided high-fidelity visual designs
        to the team for implementation.
      </p>

      <aside className="artifacts artifacts-visual-design">
        <div className="images breakout">
          {images.visualDesign.map(({ node }) => {
            return (
              <a
                href={node.childImageSharp.fluid.src}
                className="breakout_image"
                key={node.id}
              >
                <figure>
                  <Img fluid={node.childImageSharp.fluid} />
                </figure>
              </a>
            );
          })}
        </div>
        <span className="caption">Visual design delivered to the team.</span>
      </aside>

      <h3>Next Steps</h3>
      <p>
        The product owner, dev team & I worked together closely while the
        feature was implemented. The design was successfully built and deployed
        by the team. We’ve collected analytics that indicate customers who
        search are finding what they’re looking for in fewer page views and
        account for a lift in RPV, as outlined above.
      </p>
      <p>
        That said, the overall search experience on the site still needs
        improvement. The desktop design hasn’t been fully realized and our
        search results page needs to better align with the project.
      </p>

      {/* {images.research.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}
      {images.visualDesign.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}
      {images.wireframeDesktop.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}
      {images.wireframeMobile.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}
      {images.ixd.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })}
      {images.heuristic.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fluid} key={node.id} />;
      })} */}

      <div className="link-wrapper">
        <Link to="/projects">← Back to Projects</Link>
      </div>
    </Layout>
  );
};

export default SearchAutocompletePage;
