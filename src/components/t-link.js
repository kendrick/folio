import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

const Tlink = ({ to, children }) => {
  return (
    <TransitionLink
      to={to}
      exit={{
        length: 0.5,
      }}
      entry={{
        length: 0,
        delay: 0.05,
      }}
    >
      {children}
    </TransitionLink>
  );
};

export default Tlink;
