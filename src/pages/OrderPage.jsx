import React from "react";

const OrderPage = () => {
  return (
    <div className="container">
      <div className="block1">
        <div>
          <div className="titleHead d-flex justify-content-between align-items-center">
            <p>
              Бесплатная доставка по городу при заказе{" "}
              <strong>от 5000 руб!</strong>
            </p>
            <span>
              | Ежедневно 10:00-20:00 | <br />{" "}
              <a href="https://mail.google.com/mail/u/0/#inbox">
                erlanK123456789@gmail.com
              </a>{" "}
              <br />{" "}
              <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCKHRtbDWpPspljlTczkxkhTQRWnmMMBHMHSTPhrmHxnCgtQQrlgMPnpkSLtckDJLzljjWqB">
                ismailov10800@gmail.com
              </a>
            </span>
          </div>

          <div style={{ textAlign: "left" }}>
            <h1 style={{ marginTop: "30px" }}>Доставка</h1>
            {/* <p style={{ marginTop: "30px" }}>
              Разместите на этой странице информацию с описанием способов
              доставки, которые использует ваш интернет-магазин.
            </p> */}
            <span style={{ marginTop: "20px", fontSize: "20px" }}>
              {/* <strong>
                <i>Например:</i>
              </strong> */}
            </span>
            <p style={{ marginTop: "10px" }}>
              Наш интернет-магазин осуществляет доставку по Бишкеку и регионам
              Кыргызстана:
            </p>

            <ol style={{ marginTop: "30px", listStyle: "outside" }}>
              <li>Курьерская доставка по городу Бишкек — 200 руб. </li>
              <li>
                Самовывоз из нашего пункта выдачи или розничного магазина –
                бесплатно!
              </li>
              <li>
                Почтовая доставка по Кыргызстану — от 150 руб. в зависимости от
                адреса доставки.
              </li>
            </ol>

            <span>Сроки доставки:</span>

            <ol style={{ marginTop: "30px", listStyle: "outside" }}>
              <li>Курьерская доставка по Бишкеку – на следующий день</li>
              <li>Самовывоз – на следующий день</li>
              <li>
                Почтовая доставка по Кыргызстану – от 3 до 14 дней в зависимости
                от региона
              </li>
            </ol>

            <span style={{ fontWeight: "600" }}>
              Доставка осуществляется бесплатно при сумме заказа более 7000
              рублей.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
