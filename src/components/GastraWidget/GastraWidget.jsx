// import { useMediaQuery } from "react-responsive";

export default function GastraWidget() {
  // const isMobile = useMediaQuery({ maxWidth: 767.98 });

  return (
    <>
      <gasstra-widget
        id="gasstra-widget"
        clientId="2420e446d9144244b542c1dee14cd271"
        theme="white"
        maxGuestsNumber="10"
        locale="uk"
        width="100%"
        // height={(isMobile && "900px") || "680px"}
        // height="0"
        background-color="#fdfbf8"
        policies='{
                        "uk": {
                            "title": "Політика бронювання",
                            "paragraph": "Просимо Вас уважно ознайомитися з політикою бронювання. Ми можемо гарантувати Ваше бронювання за дотримання наступних положень та умов:",
                            "items": [
                                "запізнення на 15+ хвилин без попередження скасовує Ваше бронювання",
                "столик зарезервований на 2 години 30 хвилин",
                "біля ресторану немає паркувальних місць, тому просимо заздалегідь спланувати свій маршрут",
                "для змін або скасування бронювання ми будемо вдячні, якщо Ви зателефонуєте нам за номером <a href=&apos;tel:380680686975&apos;>+38-068-068-69-75</a>",
                "замовлення на страви і напої приймаємо до 20:00 год"
                                ]
                                }
                              }'
        custom='{
        "background-color": "#fdfbf8",
        "button-background": "#46B37A",
        "button-text-color": "#ffffff",
        "button-color__hover": "#259e5f",
        }'
      ></gasstra-widget>
    </>
  );
}
