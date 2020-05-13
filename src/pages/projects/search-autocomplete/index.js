import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../../../components/seo';
import Overview from '../../../components/overview';
import Artifacts from '../../../components/artifacts';
import BackToProjects from '../../../components/backToProjects';

import { css } from '@emotion/core';

const SearchAutocompletePage = ({
  children,
  transitionStatus,
  entry,
  exit,
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpe?g|png)/i" }
          relativePath: { regex: "/search-autocomplete/i" }
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
    sketches: data.allFile.edges.filter(({ node }) => {
      return node.base.includes('sketch-');
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
    <div className={transitionStatus}>
      <SEO title="Kendrick Arnett › Projects › Search Autocomplete" />
      <h1>Search Autocomplete Experience</h1>
      <Overview
        overview={{
          challenge: `Our e-commerce website had an out-of-the-box search experience that
          wasn’t tailored to the behavior of our customers or to their shift
          toward mobile devices.`,
          approach: `We sought to accelerate the customer experience by driving
          engagement with product & search suggestions within the search
          dropdown. Our hope was that we could surface just what the customer
          was looking for before they’d even finished typing her search term.`,
          outcome: `The project saw a 9.9% lift in Revenue Per Visit for customers who interact with a
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
        search function had an RPV (Revenue Per Visit) three times higher than
        that of customers who didn’t search, and viewed 50% more product.
      </p>
      <p>
        I collaborated with our Internal Search Specialist to gather most
        commonly-searched terms across both mobile & desktop, which would
        ultimately inform my design decisions.
      </p>

      <Artifacts
        artifacts={images.research}
        caption={'Analytics dashboard.'}
        imageMinWidths={['320px', '480px']}
      />

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

      <Artifacts
        artifacts={images.heuristic}
        caption={'Old design used in heuristic analysis.'}
        imageMaxWidths={['240px']}
      />

      <h3>Secondary Research</h3>
      <p>
        In addition to my primary research, I consulted Baymard Institute’s
        exhaustive Mobile Usability report, as well as Nielsen Norman Group
        articles to gather a list of validated best practices.
      </p>

      <h2>Design</h2>
      <h3>Sketches</h3>
      <p>
        I sketched out my initial ideas to communicate the general direction I
        had in mind. I used them in conversations with my manager, my fellow UX
        designer, our product owner, and stakeholders including the VP of
        E-Commerce and our internal search specialist.
      </p>

      <Artifacts
        artifacts={images.sketches}
        caption={'Sample of sketches.'}
        imageMinWidths={['280px', '240px']}
      />

      <h3>Interaction Design</h3>
      <p>
        Based on our research, I knew it was important to introduce some new
        interactions to the site. We would enable customers to narrow the scope
        of their search by allowing autocomplete results to search within a
        category. We would also offer autocompleted category names as search
        suggestions, and incorporate recent searches into the list. The new
        design would also display better metadata around top product
        suggestions. Finally, we would need to account for a variety of device
        heights & widths that had previously not been accommodated.
      </p>

      <Artifacts
        artifacts={images.ixd}
        caption={'Sample of IxD notes.'}
        imageMinWidths={['280px', '240px']}
      />

      <h3>Wireframes</h3>
      <p>
        To communicate the scope and breadth of these changes, I made low
        fidelity wireframes to present to the VP of E-Commerce and IT leaders.{' '}
      </p>

      <Artifacts
        artifacts={images.wireframes}
        caption={'Sample mobile wireframe & desktop coverage visual.'}
      />

      <h3>Visual Design</h3>
      <p>
        I worked with our product owner to incorporate design & technical
        feeback. Informed by all this, I provided high-fidelity visual designs
        to the team for implementation.
      </p>

      <Artifacts
        artifacts={images.visualDesign}
        filter={'mobile'}
        caption={'Sample of mobile designs delivered to the team.'}
        imageMinWidths={['240px']}
      />

      <Artifacts
        artifacts={images.visualDesign}
        filter={'desktop'}
        caption={'Sample of desktop designs delivered to the team.'}
        imageMinWidths={['240px']}
      />

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

      <BackToProjects />
    </div>
  );
};

export default SearchAutocompletePage;
