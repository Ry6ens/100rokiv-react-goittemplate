import { Helmet } from 'react-helmet-async';

export default function OpenGraphHelmet({ title, description, url, image }) {
  return (
    <Helmet>
      {/* <!--Primary Meta Tags--> */}
      <title>{title}</title>
      <link rel="canonical" href={url} />

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!--Open Graph / Facebook Meta Tags--> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* <!--Twitter Meta Tags--> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
