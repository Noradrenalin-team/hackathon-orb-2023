import { useNavigate } from "react-router-dom";
import "./Landing.scss";
import { Text } from "@gravity-ui/uikit";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <main className="landing">
      <div className="landing-header">
        <div className="landing-title">
          <Text variant="header-1">ПрофТестиум</Text>
        </div>
        <Text variant="body-1" className="landing-header-text">
          Платформа для обучения “синих воротничков” с использованием
          VR-инструментов
        </Text>
        <span>
          <button
            className="new"
            onClick={() => {
              navigate("/create");
            }}
          >
            Зарегистрировать новую школу
          </button>
          <button
            className="price"
            onClick={() => {
              navigate("/pricing");
            }}
          >
            Тарифы
          </button>
        </span>
      </div>
      <div className="opportunities">
        <div className="opportunities-title">
          <Text variant="header-1">Преимущества платформы</Text>
        </div>
        <div className="opportunities-list">
          <div className="opportunities-item">
            <div className="img">
              <img src="/images/landing/feature-icon-1.svg" alt="" />
            </div>
            <Text variant="header-2">Многопользовательская экосистема</Text>
            <ul>
              <li>
                Набор связных подсистем: MapReduce, движок SQL-запросов,
                планировщик, KV- хранилище данных для OLTP.
              </li>
              <li>
                Поддержка большого количества пользователей позволяет отказаться
                от лишних инсталляций и эффективно утилизировать железо.
              </li>
            </ul>
          </div>
          <div className="opportunities-item">
            <div className="img">
              <img src="/images/landing/feature-icon-2.svg" alt="" />
            </div>
            <Text variant="header-2">Надёжность и стабильность</Text>
            <ul>
              <li>Отсутствие единой точки отказа.</li>
              <li>Автоматическая репликация между серверами.</li>
              <li>Обновление кластера без потери прогресса вычислений.</li>
            </ul>
          </div>
          <div className="opportunities-item">
            <div className="img">
              <img src="/images/landing/feature-icon-3.svg" alt="" />
            </div>
            <Text variant="header-2">Масштабируемость платформы</Text>
            <ul>
              <li>До миллиона CPU и тысяч GPU.</li>
              <li>
                Эксабайты данных на разных носителях: HDD, SSD, NVME, RAM.
              </li>
              <li>10 000+ узлов.</li>
              <li>Автоматический ввод и вывод серверов.</li>
            </ul>
          </div>
          <div className="opportunities-item">
            <div className="img">
              <img src="/images/landing/feature-icon-4.svg" alt="" />
            </div>
            <Text variant="header-2">Обширная функциональность</Text>
            <ul>
              <li>Расширенная модель MapReduce.</li>
              <li>Богатая транзакционная модель.</li>
              <li>Разнообразие SDK и API.</li>
              <li>Надёжная изоляция по вычислительным ресурсам и хранению.</li>
              <li>Удобный и красивый UI.</li>
            </ul>
          </div>
          <div className="opportunities-item">
            <div className="img">
              <img src="/images/landing/feature-icon-5.svg" alt="" />
            </div>
            <Text variant="header-2">CHYT powered by ClickHouse®</Text>
            <ul>
              <li>Привычный диалект SQL и знакомые функции.</li>
              <li>Быстрые аналитические запросы.</li>
              <li>Интеграция с популярными BI-решениями через JDBC и ODBC.</li>
            </ul>
          </div>
          <div className="opportunities-item">
            <div className="img">
              <img src="/images/landing/feature-icon-6.svg" alt="" />
            </div>
            <Text variant="header-2">SPYT powered by Apache Spark</Text>
            <ul>
              <li>
                Набор популярных инструментов для написания ETL-процессов.
              </li>
              <li>Запуск и поддержка нескольких кластеров SPYT.</li>
              <li>Простая миграция готовых решений.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="scenarios">
        <div className="scenarios-title">
          <Text variant="header-1">Сценарии использования</Text>
        </div>
        <div className="scenarios-list">
          <div className="scenarios-item">
            <img src="/images/landing/1.png" alt="" />
            <Text variant="header-2">Batch-обработка</Text>
            <p>
              MapReduce и SPYT для обработки структурированных и
              полуструктурированных данных: логов или финансовых транзакций.
            </p>
          </div>
          <div className="scenarios-item">
            <img src="/images/landing/2.png" alt="" />
            <Text variant="header-2">Ad hoc аналитика</Text>
            <p>
              Быстрые запросы через CHYT без копирования данных в отдельную
              аналитическую систему. ODBC и JDBC с возможностью подключить BI
              для визуализации.
            </p>
          </div>
          <div className="scenarios-item">
            <img src="/images/landing/3.png" alt="" />
            <Text variant="header-2">OLTP-задачи</Text>
            <p>
              Транзакционная работа с KV-хранилищем в реальном времени:
              например, для хранения профилей пользователей, показа рекламы или
              построения пайплайнов потоковой обработки.
            </p>
          </div>
          <div className="scenarios-item">
            <img src="/images/landing/4.png" alt="" />
            <Text variant="header-2">Машинное обучение</Text>
            <p>
              Управление кластерами GPU для обучения моделей с миллиардами
              параметров.
            </p>
          </div>
          <div className="scenarios-item">
            <img src="/images/landing/5.png" alt="" />
            <Text variant="header-2">Хранилище метаинформации</Text>
            <p>
              Транзакционное хранение метаинформации и надёжный сервис
              распределённых блокировок.
            </p>
          </div>
          <div className="scenarios-item">
            <img src="/images/landing/6.png" alt="" />
            <Text variant="header-2">Построение хранилищ данных и ETL</Text>
            <p>
              Построение многоуровневых регулярных процессов обработки данных
              при помощи любимых инструментов: Apache Spark, SQL, MapReduce.
            </p>
          </div>
        </div>
      </div>
      <div className="try">
        <div className="try-title">
          <Text variant="header-2">Начни бесплатно уже сейчас</Text>
          <div className="buttons">
            <span>
              <button
                className="new"
                onClick={() => {
                  navigate("/create");
                }}
              >
                Создать портал
              </button>
              <button
                className="price"
                onClick={() => {
                  navigate("/pricing");
                }}
              >
                Тарифы
              </button>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
