import { Helmet } from 'react-helmet-async';

import Home from 'components/Home/Home';

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>100 років тому вперед</title>
        <meta
          name="description"
          content="Незвичайний Ресторан в Києві Де є Традиційні Страви Української Кухні"
        />
      </Helmet>
      <Home />
    </main>
  );
};

export default HomePage;
