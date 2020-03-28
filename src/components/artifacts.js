import React, { useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import { media } from '../utils/rocketbelt';
const Artifacts = ({
  artifacts,
  caption,
  imageMinWidths,
  imageMaxWidths,
  containerMaxWidths,
  noZoom,
  vertical,
}) => {
  imageMinWidths = imageMinWidths || ['280px'];
  imageMaxWidths = imageMaxWidths || ['1fr'];
  containerMaxWidths = containerMaxWidths || ['100%'];

  return (
    <aside
      className="artifacts"
      css={[
        css`
          max-width: ${containerMaxWidths[0]};
        `,
        containerMaxWidths[1] &&
          css`
            ${media[1]} {
              max-width: ${containerMaxWidths[1]};
            }
          `,
      ]}
    >
      <div
        className="artifacts_images"
        css={[
          css`
            --min: ${imageMinWidths[0]};
            --max: ${imageMaxWidths[0]};

            display: grid;
            grid-gap: var(--default-spacing);
            grid-template-columns: repeat(
              auto-fit,
              minmax(var(--min), var(--max))
            );
          `,
          imageMinWidths[1] &&
            css`
              ${media[1]} {
                --min: ${imageMinWidths[1]};
              }
            `,
        ]}

        // width: 100vw;
        // position: relative;
        // left: 50%;
        // transform: translateX(-50%);
      >
        {artifacts.map(({ node }) => {
          return (
            (!noZoom && (
              <Zoom key={node.id}>
                <a
                  href={node.childImageSharp.fluid.src}
                  css={css`
                    width: 100%;
                  `}
                >
                  <Img
                    fluid={node.childImageSharp.fluid}
                    css={css`
                      width: 100%;
                    `}
                  />
                </a>
              </Zoom>
            )) || (
              <Img
                fluid={node.childImageSharp.fluid}
                key={node.id}
                css={css`
                  width: 100%;
                `}
              />
            )
          );
        })}
      </div>
      <span className="caption">{caption}</span>
    </aside>
  );
};

export default Artifacts;
