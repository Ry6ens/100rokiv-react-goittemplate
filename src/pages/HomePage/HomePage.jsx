import { Helmet } from 'react-helmet-async';

import Home from "components/Home/Home";

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>100 років тому вперед</title>
        <link rel="canonical" href="https://100rokiv.netlify.app" />
      </Helmet>
      <Home />
    </main>
  );
};

export default HomePage;
