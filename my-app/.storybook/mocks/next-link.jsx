// .storybook/mocks/next-link.js
import React from 'react';

// Mock Next.js Link component
const Link = ({ href, as, replace, scroll, shallow, passHref, prefetch, locale, ...props }) => {
  return (
    <a href={href} {...props}>
      {props.children}
    </a>
  );
};

export default Link;