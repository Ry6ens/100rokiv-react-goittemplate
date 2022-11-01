import GastraWidget from "components/GastraWidget/GastraWidget";
import OpenGraphHelmet from 'components/OpenGraphHelmet/OpenGraphHelmet';

export default function BookPage() {
  return (
    <main>
      <OpenGraphHelmet
        title="100років • Забронювати столик"
        description="100 років тому вперед - Забронювати столик"
        url="https://100rokiv.netlify.app/book"
        image="https://storokiv-server.herokuapp.com/images/above.jpg"
      />

      <GastraWidget />
    </main>
  );
}
