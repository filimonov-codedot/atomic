import React from 'react';
import { Helmet } from 'react-helmet';

export const SEO = ({ title }) => {
  const titleTemplate = `${title ? `${title} — ` : ''}Atomic`;

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={titleTemplate}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: 'description',
          content: 'Atomic'
        },
        {
          name: 'keywords',
          content: 'atomic'
        },
        {
          property: `og:title`,
          content: titleTemplate,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: titleTemplate,
        },
      ]}
    />
  );
};

