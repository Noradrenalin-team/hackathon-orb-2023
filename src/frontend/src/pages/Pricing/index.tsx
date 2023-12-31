import "./Pricing.scss";
import { Button } from "@gravity-ui/uikit";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate()
  return (
    <main className="pricing">
      <h1 className="pricing-title">Наши тарифы</h1>
      <div className="pricing-list">
        <div className="pricing-item">
          <div className="item-title">Бесплатный</div>
          <div className="item-price">бесплатно</div>
          <div className="opportunities-list">Нет возможности создать школу</div>
          <Button onClick={() => {
            navigate('/pay?price=1')
          }}>Выбрать Бесплатный</Button>
        </div>
        <div className="pricing-item">
          <div className="item-title">Малый бизнес</div>
          <div className="item-price">100 тыс. руб/месяц</div>
          <div className="opportunities-list">
            <div className="opportunity-item">Возможность создать 1 школы</div>
          </div>
          <Button onClick={() => {
            navigate('/pay?price=2')
          }}>Выбрать Малый бизнес</Button>
        </div>
        <div className="pricing-item">
          <div className="item-title">Предприятие</div>
          <div className="item-price">250 тыс. руб/месяц</div>
          <div className="opportunities-list">
            <div className="opportunity-item">Возможность создать 5 школ</div>
          </div>
          <Button onClick={() => {
            navigate('/pay?price=3')
          }}>Выбрать Предприятие</Button>
        </div>
        <div className="pricing-item">
          <div className="item-title">Корпорация</div>
          <div className="item-price">1 млн. руб/месяц</div>
          <div className="opportunities-list">
            <div className="opportunity-item">Возможность создать 40 школ</div>
          </div>
          <Button onClick={() => {
            navigate('/pay?price=4')
          }}>Выбрать Корпорация</Button>
        </div>
      </div>
      <div className="pricing-support">
        <div className="wrapper">
          <h1>Если не знаете, с чего начать, напишите нам</h1>
          <p>
            мы рассчитаем стоимость проекта поможем построить архитектуру и
            начать работу в облаке
          </p>
          <button
          onClick={() => {
            navigate('/support')
          }}>
            Написать
          </button>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
