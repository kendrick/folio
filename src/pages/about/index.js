import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import Image from '../../components/image';
import SEO from '../../components/seo';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { media, fontSize } from '../../utils/rocketbelt';

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

const Card = styled.section`
  li {
    margin-bottom: calc(1.666rem / 4);
  }

  ${media[1]} {
    border: 1px solid var(--border-color-light);
    display: inline-grid;
    padding: 1rem;
    grid-gap: 1rem;
    grid-auto-rows: auto;
    grid-template-areas: 'subhead' 'content';
    flex-direction: column;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    font-size: ${fontSize(-1)};

    .overview_subhead {
      font-size: ${fontSize(-1)};
      margin: 0;
    }

    .overview_text {
      margin-bottom: 0;
    }

    ul {
      margin-bottom: 0;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const AboutPage = () => {
  const thanksContainer = useRef(null);

  useEffect(() => {
    if (
      typeof window === 'object' &&
      window.location.search.includes('submitted=true')
    ) {
      thanksContainer.current.innerText =
        "Thank you! I'll be in touch as soon as possible.";
    }
  });

  return (
    <>
      <SEO title="Kendrick Arnett › About" />
      <h1>About Kendrick</h1>
      <p>
        I'm a developer-turned-UXer who's enthralled with bridging the gap with
        colleagues in both professions.
      </p>
      <div
        css={css`
          display: flex;

          ${media[1]} {
            justify-content: center;
          }
        `}
      >
        <div
          className="about_cards"
          css={css`
            display: grid;
            grid-template-rows: auto;
            grid-gap: 1rem;

            ${media[1]} {
              max-width: 640px;
              grid-template-columns: 1fr 1fr;
            }
          `}
        >
          <Card>
            <h2 className="overview_subhead">I'm Borderline Obsessed With…</h2>
            <div className="overview_text">
              <ul>
                <li>Black holes</li>
                <li>
                  Public lands & the National Park system (America's Best Idea!)
                </li>
                <li>Coffee</li>
                <li>BBQ</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h2 className="overview_subhead">I Have Strong Opinions About…</h2>
            <div className="overview_text">
              <ul>
                <li>Participative leadership</li>
                <li>Oxford commas</li>
                <li>CSS-in-JS</li>
              </ul>
              <p>… but only because they're worth doing right.</p>
            </div>
          </Card>
        </div>
      </div>
      <h2>Contact Kendrick</h2>
      <p>
        I'd love to build something awesome with you! Send me a note below and
        I'll get back to you.
      </p>

      <FormWrapper>
        <Form
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/about?submitted=true"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
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
          <span
            ref={thanksContainer}
            css={css`
              display: flex;
              align-items: center;
              margin-left: 1rem;
            `}
          ></span>
        </Form>
      </FormWrapper>
    </>
  );
};

export default AboutPage;
