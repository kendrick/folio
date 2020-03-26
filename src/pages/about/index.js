import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import Image from '../../components/image';
import SEO from '../../components/seo';
import styled from '@emotion/styled';

import { media } from '../../utils/rocketbelt';

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;

  label {
    display: grid;
    grid-template-areas:
      'contact_name contact_email'
      'contact_message'
      'submit';
    margin-bottom: 1rem;

    ${media[1]} {
      &:first-of-type {
        margin-right: 1rem;
      }
    }
  }

  .contact_name,
  .contact_email {
    width: 100%;

    ${media[1]} {
      width: calc(50% - 0.5rem);
    }
  }

  .contact_message {
    max-width: 600px;
    width: 100%;
  }

  textarea {
    height: calc(6rem * var(--line-height));
  }

  button {
    display: flex;
    flex: 0 1 auto;
  }
`;

const FormWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

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

    <h2>Contact Kendrick</h2>
    <p>
      I'd love to build something awesome with you! Send me a note below and
      I'll get back to you.
    </p>

    <FormWrapper>
      <Form name="contact" method="POST" data-netlify="true">
        <label className="contact_name">
          Your Name
          <input type="text" name="name" />
        </label>

        <label className="contact_email">
          Your Email
          <input type="email" name="email" />
        </label>

        <label className="contact_message">
          Message<textarea name="message"></textarea>
        </label>

        <button type="submit">Send</button>
      </Form>
    </FormWrapper>
  </Layout>
);

export default AboutPage;
