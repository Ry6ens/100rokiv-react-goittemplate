import Menu from "components/Menu/Menu";
import OpenGraphHelmet from 'components/OpenGraphHelmet/OpenGraphHelmet';


export default function MenuPage() {
  return (
    <>
    <OpenGraphHelmet
        title="100років • Меню"
        description="Меню, винна карта"
        url="https://100rokiv.netlify.app/menu"
        image="https://storokiv-server.herokuapp.com/images/above.jpg"
      />
      <Menu />
    </>
  );
}
