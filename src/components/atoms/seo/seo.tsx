import React from 'react';
import Head from 'next/head';

import { theme } from '@/theme/default';

type Props = {
  title?: string;
  image?: string;
  description?: string;
  titleSuffix?: boolean;
};

const SEO: React.FC<Props> = ({
  title,
  image,
  description,
  titleSuffix = false,
}: Props) => {
  const pageTitle = `${title} ${!titleSuffix ? `| Mercado Libre` : ''}`;

  return (
    <Head>
      <title>{title ? pageTitle : 'Mercado Libre'}</title>
      <meta
        name="description"
        content={description || 'Juntos. De la mano o no.'}
      />
      <meta name="image" content={image || '/logo@2x.png'} />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="480" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content={theme.palette.primary.main} />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />
      <meta
        name="msapplication-TileColor"
        content={theme.palette.primary.main}
      />

      <meta property="og:title" content={title ? pageTitle : 'Mercado Libre'} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content={title ? pageTitle : 'Mercado Libre'}
      />
      <meta property="og:image" content={image || '/logo@2x.png'} />
      <meta property="og:image:secure_url" content={image || '/logo@2x.png'} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="620" />

      <meta
        name="twitter:title"
        content={title ? pageTitle : 'Mercado Libre'}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mercadolivre" />
      <meta name="twitter:creator" content="@mercadolivre" />
      <meta name="twitter:image" content={image || '/logo@2x.png'} />
      <meta name="twitter:image:src" content={image || '/logo@2x.png'} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </Head>
  );
};

export default SEO;
