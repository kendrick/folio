import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import Image from '../../components/image';
import SEO from '../../components/seo';

import './projects.css';

const ProjectsIndexPage = () => (
  <Layout>
    <SEO title="Kendrick Arnett › Projects" />
    <h1>Selected Projects</h1>

    <ul className="card-list list-horizontal">
      <li className="card card-search-autocomplete">
        <Link to="./projects/search-autocomplete/">
          <h2>
            Search Autocomplete Experience<small></small>
          </h2>
        </Link>
      </li>
      <li className="card">
        <Link to="./projects/mobile-navigation/">
          <h2>Mobile Navigation Redesign</h2>
        </Link>
      </li>
      <li className="card">
        <Link to="./projects/ideation-brand-differentiators/">
          <h2>Ideation on Brand Differentiators</h2>
        </Link>
      </li>
      <li className="card">
        <Link to="./projects/rocketbelt-pattern-library/">
          <h2>Rocketbelt Pattern Library</h2>
        </Link>
      </li>
      {/* <li className="card">
        <Link to="./projects/ab-split-multivariate-testing/">
          A/B, Split, and Multivariate Testing
        </Link>
      </li> */}
    </ul>

    {/* <h2>Other Project Highlights</h2>
    <ul>
      <li>Accessiblity Best Practices & Site Rehabilitation</li>
      <li>Taxonomy Research</li>
      <li>Checkout & Order Summary Refresh</li>
      <li>Promo Experience on PLPs & PDPs</li>
    </ul> */}
  </Layout>
);

export default ProjectsIndexPage;
