import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../../components/layout';
import Image from '../../../components/image';
import SEO from '../../../components/seo';

import { css } from '@emotion/core';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const AbSplitMultivariateTesting = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpe?g|png)/i" }
          relativePath: { regex: "/ab-multivariate-testing/i" }
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
    orderReview: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('order-review-');
    }),
    pdpMultivariate: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('pdp-multivariate-');
    }),
    spuIncentive: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('spu-incentive-');
    }),
  };

  return (
    <Layout>
      <SEO title="Kendrick Arnett › Projects › A/B & Multivariate Testing" />
      <h1>A/B and Multivariate Testing</h1>
      <p>
        Learning about our users' unspoken tendencies and preferences is one of
        my favorite facets of UX. It's an especially exciting challenge to find
        the right balance between these tendencies and the needs of an
        omnichannel e-commerce business.
      </p>
      <p>
        Among other testing efforts, one way that my team finds that balance is
        with an A/B and Multivariate testing program that I developed and have
        managed since 2016. Here are some of my favorite results in that time
        period.
      </p>

      <h2>Order Review Progress Indicator</h2>
      <h3>Summary</h3>
      <p>
        We suspected we could improve the clarity of whether an order had been
        submitted by adding an additional point to the progress indicator in our
        Checkout experience.
      </p>

      <aside className="artifacts artifacts-ab-multivariate-testing artifacts-order-review">
        <div className="breakout">
          <div className="breakout_images">
            {images.orderReview.map(({ node }) => {
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
        </div>
        <span className="caption">Control (L) and experiment (R).</span>
      </aside>

      <h3>Results</h3>
      <p>
        The experiment resulted in a minor lift in Conversion Rate (0.58% on
        mobile devices; 0.18% on desktop). These findings indicated that there
        were customers who intended to purchase, but may have accidentally
        abandoned their carts on the Order Review page. These "saved" orders
        accounted for an additional $750,000 in annualized revenue.
      </p>

      <h2>Product Page Multivariate</h2>

      <h3>Summary</h3>
      <p>
        The team was given bandwidth for a redesign of the mobile product page.
        We wanted to identify the most impactful elements of the page and gather
        data to inform the most effective ordering of components.
      </p>
      <p>
        For complicated product pages, such as the control image below, we knew
        there was too much visual weight in between the product image and the
        Add to Basket button. This test would help us condense that space by
        only showing the most beneficial pieces.
      </p>
      <p>Actions that were tested included:</p>
      <ul>
        <li>
          Replacing product gallery thumbnails with dots on the main image
        </li>
        <li>Hiding the product description excerpt</li>
        <li>Giving less visual weight to the product name</li>
        <li>Moving the product name above the main product image</li>
        <li>
          Allowing swatch images to scroll horizontally instead of wrapping them
          onto new lines
        </li>
        <li>Styling the ship methods in a more touch-friendly manner</li>
        <li>
          Moving overlay tags (like “Sale” or “Indoor/Outdoor”) to be inline
          with other product metadata
        </li>
        <li>
          Autoscrolling to the product image—past the site header—on page load
        </li>
      </ul>

      <aside className="artifacts artifacts-ab-multivariate-testing artifacts-pdp-multivariate">
        <div className="breakout">
          <div className="breakout_images">
            {images.pdpMultivariate.map(({ node }) => {
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
        </div>
        <span className="caption">
          Control (L) and an example of a multivariate combination (R).
        </span>
      </aside>

      <h3>Results</h3>
      <p>The most effective combination was one in which we:</p>
      <ul>
        <li>Replaced product gallery thumbnails with dots on the main image</li>
        <li>Styled the ship methods in a more touch-friendly manner</li>
        <li>Moved overlay tags to be inline with other product metadata</li>
        <li>Hid the product description excerpt</li>
      </ul>
      <p>
        These changes resulted in both a cleaner, more easily-scannable product
        page for the customer as well as a huge win for the business: a 13.7%
        lift in Add to Basket Rate on our product pages!
      </p>

      <h2>Store Pick-Up Incentive</h2>
      <h3>Summary</h3>
      <p>
        Our team was tasked with finding an easily-measured, scrappy way to
        lower our extremely high shipment costs. After cross-functional ideation
        in the e-commerce organization, we designed a simple banner to be
        displayed in checkout that offered the customer a small discount if they
        picked up their order in store instead of having it shipped.
      </p>

      <aside className="artifacts artifacts-ab-multivariate-testing artifacts-spu-incentive">
        <div className="breakout">
          <div className="breakout_images">
            {images.spuIncentive.map(({ node }) => {
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
        </div>
        <span className="caption">
          Banner placed at the top of Checkout (experiment).
        </span>
      </aside>

      <h3>Results</h3>
      <p>
        The offer saw a $7 million lift in annualized revenue. This project
        demanded an extremely high level of collaboration across the entire
        company. In addition to the UX and e-commerce teams, I partnered with
        colleagues in finance and multiple analysts throughout the organization.
        In the end, massive acceptance of the discount and an unexpected boost
        in Conversion led to the positive result.
      </p>

      <div
        className="button"
        css={css`
          margin-bottom: 2rem;
        `}
      >
        <Link to="/projects">← Back to Projects</Link>
      </div>
    </Layout>
  );
};

export default AbSplitMultivariateTesting;
