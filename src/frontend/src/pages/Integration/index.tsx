import "./Integration.scss";
import { useNavigate } from "react-router-dom";

const Integration = () => {
  const navigate = useNavigate();
  return (
    <main className="integration">
      <div className="integration-header">
        <div className="wrapper">
          <h1>Внедрение</h1>
          <h1>ПрофТестиум</h1>
          <p>
            Мы понимаем, что успешное внедрение новых технологий и систем на
            предприятии может быть вызовом.
          </p>
          <p>
            Поэтому мы предлагаем дополнительные услуги и ресурсы, чтобы сделать
            процесс внедрения "ПрофТестиум" более гладким и продуктивным.
          </p>
        </div>
      </div>
      <div className="services">
        <div className="services-title">
          <h1>Наши услуги</h1>
        </div>
        <div className="services-cards">
          <div className="card">
            <div className="card-title">
              <h2>Интеграция с процессами вашей комании</h2>
            </div>
            <div className="card-text">
              <p>
                Наши эксперты помогут интегрировать систему "ПрофТестиум" с
                вашими существующими бизнес-процессами, чтобы обеспечить плавное
                внедрение и максимальную эффективность.
              </p>
            </div>
            <button
              onClick={() => {
                navigate("/support");
              }}
            >
              Заказать звонок
            </button>
          </div>
          <div className="card">
            <div className="card-title">
              <h2>Поставка VR оборудования</h2>
            </div>
            <div className="card-text">
              <p>
                Мы предоставляем возможность приобретения необходимого
                VR-оборудования для проведения обучения в виртуальной среде. Это
                позволит вашим сотрудникам получить практический опыт в
                безопасной и контролируемой среде.
              </p>
            </div>
            <button
              onClick={() => {
                navigate("/support");
              }}
            >
              Заказать звонок
            </button>
          </div>
          <div className="card">
            <div className="card-title">
              <h2>Оборудование класса для VR обучения</h2>
            </div>
            <div className="card-text">
              <p>
                Мы поможем вам создать специализированные классы для
                VR-обучения, обеспечивая удобное и эффективное пространство для
                обучения в виртуальной реальности.
              </p>
            </div>
            <button
              onClick={() => {
                navigate("/support");
              }}
            >
              Заказать звонок
            </button>
          </div>
          <div className="card">
            <div className="card-title">
              <h2>Дороботка под вашу специфику</h2>
            </div>
            <div className="card-text">
              <p>
                Мы готовы адаптировать систему "ПрофТестиум" под уникальные
                потребности вашей компании, включая создание специализированных
                модулей и тестов.
              </p>
            </div>
            <button
              onClick={() => {
                navigate("/support");
              }}
            >
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
      <div className="consultation">
        <div className="consultation-title">
          <h2>Консультация по телефону</h2>
        </div>
        <div className="consultation-text">
          <p>
            Свяжитесь с нами, чтобы узнать больше о наших услугах по внедрению и
            обсудить, как мы можем поддержать вашу компанию.
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/support");
          }}
        >
          Заказать звонок
        </button>
      </div>
    </main>
  );
};

export default Integration;
