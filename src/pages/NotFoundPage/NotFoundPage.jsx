import $ from 'jquery';

import Section from 'components/Shared/Section/Section';
import Ghost from 'components/Ghost/Ghost';
import TitleH2 from 'components/Shared/TitleH2/TitleH2';
import Text from 'components/Shared/Text/Text';
import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import OpenGraphHelmet from 'components/OpenGraphHelmet/OpenGraphHelmet';

export default function NotFoundPage() {
  var pageX = $(document).width();
  var pageY = $(document).height();
  var mouseY = 0;
  var mouseX = 0;

  $(document).mousemove(function (event) {
    //verticalAxis
    mouseY = event.pageY;
    var yAxis = ((pageY / 2 - mouseY) / pageY) * 300;

    //horizontalAxis
    mouseX = event.pageX / -pageX;
    var xAxis = -mouseX * 100 - 100;

    $('#boxGhostEyes').css({
      transform: 'translate(' + xAxis + '%,-' + yAxis + '%)',
    });
  });

  return (
    <main>
      <OpenGraphHelmet
        title="100років • Сторінка не знайдена"
        description="Сторінка не знайдена"
        url="https://100rokiv.netlify.app/*"
        image="https://storokiv-server.herokuapp.com/images/above.jpg"
      />
      <Section sectionClass="sectionNotFound">
        <Ghost />
        <div>
          <TitleH2 text="Загубилися?" />
          <Text text="Почніть з головної сторінки" />
          <ButtonLink to="/" text="Головна сторінка" />
        </div>
      </Section>
    </main>
  );
}
