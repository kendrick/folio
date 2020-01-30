import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import './home.css';

const IndexPage = () => (
  <Layout headerStyle="no-name">
    <SEO title="Home" />
    <div className="content">
      <h1>Hi, I'm Kendrick…</h1>
      <p className="left">
        … a Lead UX Architect located in Fort Worth, Texas. I'm passionate about
        uncovering the little points of friction that cause customers pain and
        identifying creative solutions to remedy them.
      </p>
      <p>
        I'm a participative leader & mentor with interdisciplinary skills. I
        have a bent toward user research & testing, analysis, sprinkled
        liberally with my background in front-end development.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
