import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../../components/layout';
import Image from '../../../components/image';
import SEO from '../../../components/seo';

const AbSplitMultivariateTesting = () => (
  <Layout>
    <SEO title="Kendrick Arnett › Projects › A/B, Split, and Multivariate Testing" />
    <h1>A/B, Split, and Multivariate Testing</h1>
    <p>Here are some of my favorite tests.</p>
    <h3>Store Pick-Up Incentive</h3>
    <h3>Mobile Product Page Multivariate</h3>
    <h3>Promo Drawer</h3>
    <h3>Order Review</h3>
    <h3>Add-to-Cart Upseller</h3>
    <Link to="/projects">Back to Projects</Link>
  </Layout>
);

export default AbSplitMultivariateTesting;
