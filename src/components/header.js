import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './header.css';

const Header = ({ siteTitle, headerStyle }) => (
  <header>
    <span className={`site-title`} style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
          display: headerStyle === 'no-name' ? 'none' : 'inherit',
        }}
      >
        Kendrick Arnett
        <small>UX Leader</small>
      </Link>
    </span>

    <ul className="list-horizontal">
      <li className="link-wrapper" key="projects">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="link-wrapper" key="about">
        <Link to="/about">About</Link>
      </li>
      {/* <li key="contact">
        <Link to="/contact">Contact</Link>
      </li> */}
    </ul>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Kendrick Arnett`,
};

export default Header;
