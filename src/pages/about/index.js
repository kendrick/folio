import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import Image from '../../components/image';
import SEO from '../../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="Kendrick Arnett › About" />
    <h1>About Kendrick</h1>
    <p>
      A developer-turned-designer and self-made handyman with a recently
      reignited passion for camping, public lands, and national parks (they’re
      America’s Best Idea!). A little snobby about coffee, beer, barbeque,
      CSS-in-JS, participative leadership, and Oxford commas, but only because
      they’re worth doing right. Striving to be the reader my librarian thinks I
      am.
    </p>
    <p>
      You can contact me at <span style={{ fontWeight: 700 }}>kmarnett</span> at
      Sundar Pichai's email service.
    </p>
  </Layout>
);

export default AboutPage;
