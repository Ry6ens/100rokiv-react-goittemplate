import { Helmet } from 'react-helmet-async';

import Home from 'components/Home/Home';

const HomePage = () => {
  return (
    <main>
      <Helmet>
        {/* <!--Primary Meta Tags--> */}
        <title>100 років тому вперед</title>
        <meta name="title" content="100 років тому вперед" />
        <meta
          name="description"
          content="Незвичайний Ресторан в Києві Де є Традиційні Страви Української Кухні"
        />

        {/* <!--Open Graph / Facebook Meta Tags--> */}
        <meta property="og:title" content="100 років тому вперед" />
        <meta
          property="og:description"
          content="Незвичайний Ресторан в Києві Де є Традиційні Страви Української Кухні"
        />
        <meta property="og:url" content="https://100rokiv.netlify.app/home" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://storokiv-server.herokuapp.com/images/ground.jpeg"
        />

        {/* <!--Twitter Meta Tags--> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="100 років тому вперед" />
        <meta
          name="twitter:description"
          content="Незвичайний Ресторан в Києві Де є Традиційні Страви Української Кухні"
        />
        <meta name="twitter:url" content="https://100rokiv.netlify.app/home" />
        <meta
          name="twitter:image"
          content="https://storokiv-server.herokuapp.com/images/ground.jpeg"
        />

        <link rel="canonical" href="https://100rokiv.netlify.app/home" />
      </Helmet>
      <Home />
    </main>
  );
};

export default HomePage;
