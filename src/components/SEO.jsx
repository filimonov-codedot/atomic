import React from 'react';
import { Helmet } from 'react-helmet';

export const SEO = ({ titleTemplate, title }) => {
  const metaTitle = titleTemplate ?
    titleTemplate : `Atomic${title ? ` | ${title}` : ''}`;

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={metaTitle}
      titleTemplate={metaTitle}
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
          content: metaTitle,
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
          content: metaTitle,
        },
      ]}
    />
  );
};
