import beetroot from './images/startetrs/beetroot.jpeg';
import croquettes from './images/startetrs/smokedMilkCroquettes.jpeg'
import pie from './images/startetrs/traditionalPieWithPotatoes.jpeg'
import zucchini from './images/startetrs/zucchini.jpeg'
import ukraineAvocado from './images/salads/ukrainianAvocado.jpeg'
import borshch from './images/firstCourses/borshch.jpeg'

const products = [
  {
    id: '01',
    title: 'смажена затірка, ягоди смородини і чорнобривці',
    price: 165,
    category: 'закуски',
    weight: 190,
    img: croquettes,
    quantity: 1,
    descr: 'Здебільшого в українській кулінарії затірка – це згущувач супів або каш. Її основою є вершкове масло та борошно, тобто майже бешамель. \n Ми готуємо затірку на копченому молоці у фритюрі, як цікаве продовження традиційної техніки. Також додали сезонних ягід і злегка гострий соус з чорнобривцями.'
  },
  {
    id: '02',
    title: 'буряк, оселедець, копчена груша',
    price: 120,
    category: 'закуски',
    weight: 180,
    img: beetroot,
    quantity: 1,
    descr: 'Поєднання буряку і оселедцю є звичним для нас. Ми доповнили страву локальною цікавинкою – копченою грушою. Насправді техніка приготування є унікальною і відома тільки в Україні. Можливо колись копчена груша стане на один рівень з трюфелями.'
  },
  {
    id: '03',
    title: 'книш з картоплею, бринзою і соусом із зелені',
    price: 125,
    category: 'закуски',
    weight: 165,
    img: pie,
    quantity: 1,
    descr: 'Познайомились з цією стравою коли бували в карпатських горах. Там проживають бойки, які зберегли традицію приготування книша. По суті це пиріг з листкового тіста з додаванням картоплі. Готуємо з сирами і соусом з зелені.'
  },
  {
    id: '04',
    title: 'цукіні за рецептом Ольги Франко',
    price: 165,
    category: 'закуски',
    weight: 170,
    img: zucchini,
    quantity: 1,
    descr: 'Перейняли техніку приготування з книги «Практична кухня» Ольги Франко. Бланшуємо цукіні з додаванням солі і цукру. Таким чином вони набувають смаку, залишаючи текстуру незмінною. Для контрастного смаку додаємо креветковий соус. Готуємо його, збиваючи маленькі чорноморські креветки з томатами та вершками.'
  },
  {
    id: '05',
    title: 'салат з кремом зеленим',
    price: 165,
    category: 'салати',
    weight: 200,
    img: ukraineAvocado,
    quantity: 1,
    descr: 'Зелений крем – це наше українське гуакамоле. Авокадо зараз є фудтрендом, а ми маємо не менш смачний горох. Готуємо з нього ніжну пасту, додавши шпинат, щавель, трохи цибулі і яблука.'
  },
  {
    id: '06',
    title: 'борщ з печі, із сливовим лекваром',
    price: 175,
    category: 'перші страви',
    weight: 200,
    img: borshch,
    quantity: 1,
    descr: 'Наш борщ побудовано на трьох базових засадах: 1) Буряковий квас, що надає борщу кислуватого смаку; 2) Закарпатський сливовий леквар – трішки переварене варення. Воно надає борщу солодкого смаку; 3) Буряковий фреш, який надає борщу насиченого смаку. Ці три складові роблять наш борщ одним з найкращих.'
  },
];

export default products