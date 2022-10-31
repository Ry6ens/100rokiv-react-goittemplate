import Home from 'components/Home/Home';
import OpenGraphHelmet from 'components/OpenGraphHelmet/OpenGraphHelmet';

const HomePage = () => {
  return (
    <main>
      <OpenGraphHelmet
        title="100 років тому вперед"
        description="Незвичайний Ресторан в Києві Де є Традиційні Страви Української Кухні"
        url="https://100rokiv.netlify.app/home"
        image="https://storokiv-server.herokuapp.com/images/ground.jpeg"
      />
      <Home />
    </main>
  );
};

export default HomePage;
