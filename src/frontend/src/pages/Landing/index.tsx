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
            <Text variant="header-2">Экономия времени и ресурсов</Text>
            <ul>
              <li>
                Сокращение времени обучения: VR-технологии позволяют более
                эффективно обучать сотрудников, сокращая время, затрачиваемое на
                обучение.
              </li>
              <li>
                Масштабируемость: Создавайте порталы для разных отделов и групп
                сотрудников, оптимизируя обучение.
              </li>
            </ul>
          </div>
          <div className="opportunities-item">
            <div className="img">
              <img src="/images/landing/feature-icon-2.svg" alt="" />
            </div>
            <Text variant="header-2">
              Более безопасное и контролируемое обучение
            </Text>
            <ul>
              <li>
                Виртуальное обучение в безопасной среде: Позволяет сотрудникам
                учиться и совершенствовать навыки без риска для здоровья и
                безопасности.
              </li>
              <li>
                Удаленное обучение: Обучайте сотрудников, не вынуждая их
                покидать место работы.
              </li>
              <li>Обновление кластера без потери прогресса вычислений.</li>
            </ul>
          </div>
          <div className="opportunities-item">
            <div className="img">
              <img src="/images/landing/feature-icon-3.svg" alt="" />
            </div>
            <Text variant="header-2">Легкость внедрения</Text>
            <ul>
              <li>
                Интеграция с бизнес-процессами: Мы поможем интегрировать систему
                с вашими существующими процессами, что упростит внедрение.
              </li>
              <li>
                Готовое VR-оборудование: Предоставление возможности приобретения
                необходимого VR-оборудования для обучения.
              </li>
            </ul>
          </div>
          <div className="opportunities-item">
            <div className="img">
              <img src="/images/landing/feature-icon-4.svg" alt="" />
            </div>
            <Text variant="header-2">Индивидуальный контроль и анализ</Text>
            <ul>
              <li>
                Мониторинг прогресса: Отслеживайте процесс обучения и
                тестирования каждого сотрудника.
              </li>
              <li>
                Аналитика результатов: Получайте детальные отчеты о
                производительности сотрудников и уровне усвоения материала.
              </li>
            </ul>
          </div>
          <div className="opportunities-item">
            <div className="img">
              <img src="/images/landing/feature-icon-5.svg" alt="" />
            </div>
            <Text variant="header-2">Сотрудничество и обратная связь</Text>
            <ul>
              <li>Внутренний чат: Обеспечьте коммуникацию между сотрудниками, представителями предприятия и технической поддержкой.</li>
              <li>Обратная связь: Позвольте сотрудникам и администраторам делиться мнениями и предложениями по улучшению системы.</li>
            </ul>
          </div>
          <div className="opportunities-item">
            <div className="img">
              <img src="/images/landing/feature-icon-6.svg" alt="" />
            </div>
            <Text variant="header-2">Гибкость и настраиваемость</Text>
            <ul>
              <li>
              Доработка под специфику: Мы адаптируем систему под уникальные потребности вашей компании, включая создание специализированных модулей и тестов.
              </li>
              <li>Регулярные обновления: Мы постоянно совершенствуем систему и предоставляем обновления, чтобы она оставалась актуальной.</li>
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
            <Text variant="header-2">Обучение новых сотрудников</Text>
            <p>
              Создайте портал для новых сотрудников и предоставьте им доступ к
              обучающим материалам и тестированиям. Используйте VR-технологии
              для симуляции рабочих ситуаций и повышения уровня подготовки.
            </p>
          </div>
          <div className="scenarios-item">
            <img src="/images/landing/2.png" alt="" />
            <Text variant="header-2">
              Оценка и повышение квалификации сотрудников:
            </Text>
            <p>
              Проводите периодические тестирования и анализируйте результаты,
              чтобы оценить уровень компетенции сотрудников. Предоставьте
              персонализированные материалы для повышения квалификации в
              соответствии с потребностями.
            </p>
          </div>
          <div className="scenarios-item">
            <img src="/images/landing/3.png" alt="" />
            <Text variant="header-2">Мониторинг процесса обучения:</Text>
            <p>
              Следите за прогрессом каждого сотрудника, отслеживая его успехи и
              результаты тестирований. Анализируйте статистику, чтобы выявить
              области, требующие дополнительного внимания.
            </p>
          </div>
          <div className="scenarios-item">
            <img src="/images/landing/4.png" alt="" />
            <Text variant="header-2">Индивидуальная настройка обучения:</Text>
            <p>
              Создайте персонализированные образовательные планы для
              сотрудников, учитывая их уровень знаний и потребности.
              Предоставьте дополнительные материалы и тестирования для улучшения
              конкретных навыков.
            </p>
          </div>
          <div className="scenarios-item">
            <img src="/images/landing/5.png" alt="" />
            <Text variant="header-2">Сотрудничество и обратная связь:</Text>
            <p>
              Обеспечьте коммуникацию между сотрудниками и представителями
              предприятия через внутренний чат. Позвольте сотрудникам оставлять
              обратную связь и предложения по улучшению системы.{" "}
            </p>
          </div>
          <div className="scenarios-item">
            <img src="/images/landing/6.png" alt="" />
            <Text variant="header-2">
              Создание специализированных образовательных модулей:
            </Text>
            <p>
              Дорабатывайте систему под уникальные потребности вашей компании,
              создавая специализированные образовательные модули и тесты.
              Поддерживайте постоянное обновление и совершенствование
              образовательного контента в соответствии с требованиями вашей
              отрасли.
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
